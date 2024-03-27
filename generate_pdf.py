import psycopg2
from flask import Flask, send_file
from io import BytesIO
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib import colors

app = Flask(__name__)

def fetch_quiz_results(id):
    # Connect to PostgreSQL database
    conn = psycopg2.connect(
        dbname='database_practice',
        user='postgres',
        password='mypass',
        host='localhost',
        port='5432'
    )

    # Fetch quiz results based on ID
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM quiz_results WHERE id = %s", (id,))
    result_data = cursor.fetchall()
    conn.close()

    return result_data

@app.route('/generate_pdf/<int:id>', methods=['GET'])
def generate_pdf(id):
    # Fetch quiz results based on the provided ID
    result_data = fetch_quiz_results(id)

    # Generate the PDF document
    pdf_data = generate_pdf_document(result_data)

    # Return the PDF as a response
    return send_file(
        BytesIO(pdf_data),
        attachment_filename='quiz_results.pdf',
        as_attachment=True
    )

def generate_pdf_document(result_data):
    # Create an in-memory buffer to hold the document data
    buffer = BytesIO()

    # Create a SimpleDocTemplate
    doc = SimpleDocTemplate(buffer, pagesize=letter)
    styles = getSampleStyleSheet()

    # Build content for the PDF
    content = []

    # Add questions to the PDF content
    for question_data in result_data:
        question = question_data[0]  # Assuming the question is the first element in each row
        content.append(Paragraph(question, styles['Title']))

        # You can add more details from the database to the PDF content as needed

    # Build the PDF document
    doc.build(content)

    # Get the PDF data from the buffer
    pdf_data = buffer.getvalue()

    # Close the buffer
    buffer.close()

    return pdf_data

if __name__ == "__main__":
    app.run(debug=True)
