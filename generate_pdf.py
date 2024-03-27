import psycopg2
import json
from flask import Flask, send_file
from io import BytesIO
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
app = Flask(__name__)

styles = getSampleStyleSheet()

red = ParagraphStyle(name='CustomStyle', textColor=colors.red)
green = ParagraphStyle(name='CustomStyle', textColor=colors.green)
black = ParagraphStyle(name='CustomStyle', textColor=colors.black)
custom_heading1_style = ParagraphStyle(
    name='CustomHeading1',
    parent=styles['Heading1'],  # Use the existing Heading1 style as parent
    underline=True  # Set underline to True to enable
)
def fetch_quiz_results(id):
    # Connect to PostgreSQL database
    conn = psycopg2.connect(
        dbname='database_practice',
        user='postgres',
        password='mypass',
        host='mithamithithings.store',
        port='5432'
    )

    # Fetch quiz results based on ID
    cursor = conn.cursor()
    cursor.execute("SELECT result_data FROM quiz_results WHERE id = %s", (id,))
    result_data = cursor.fetchone()
    conn.close()

    return result_data

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
    
@app.route('/generate_pdf/<int:id>', methods=['GET'])
def generate_pdf(id):
    results_data = fetch_quiz_results(id)
    filename = "result" + str(id) + ".pdf"

    buffer = BytesIO()  
    doc = SimpleDocTemplate(buffer, pagesize=letter, title=filename)
    # Modify the font size of the Heading1 style
    styles['Heading1'].fontSize = 13

    # Modify the font size of the Heading2 style
    styles['Heading2'].fontSize = 12

    # Define content for the PDF
    content = []

    json_string = result_data[0]  # Extract the JSON string from the tuple

    # Ensure that json_string is a string
    data = json.loads(json.loads(json_string));
    for i, item in enumerate(data, 1):

        # Extract properties from result_data
        question = item['question']
        choices = item['choices']
        answer = item['answer']
        answered = item['answered']
        if 'marked' in item: 
            marked = item['marked']
        else:
            marked = None
        success = answered == answer
        markedText = "(M) " if marked else ""
        # Add question to the PDF content
        content.append(Paragraph(f"{markedText}Question {i}:", style=custom_heading1_style))
        content.append(Paragraph(question, style=black))

        # Add choices to the PDF content
        content.append(Spacer(1, 12))
        content.append(Paragraph("Choices:", styles['Heading1']))
        for choice in choices:
            if choice == answer:
                content.append(Paragraph(choice, style=green))
                content.append(Spacer(1, 6))
            else:
                content.append(Paragraph(choice, style=black))
                content.append(Spacer(1, 6))

        if not success:
            # Add answered to the PDF content if available
            if answered:
                content.append(Spacer(1, 12))
                content.append(Paragraph("Answered:", styles['Heading1']))
                content.append(Paragraph(answered, style=red))

    # Build the PDF document
    doc.build(content)

    pdf_data = buffer.getvalue()

    buffer.close()
    return send_file(
        BytesIO(pdf_data),
        attachment_filename='quiz_results.pdf',
        as_attachment=True
    )
    print('done')


