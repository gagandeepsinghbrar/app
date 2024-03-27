import psycopg2
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet

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

def generate_pdf(result_data, output_path):
    # Create PDF document and styles
    doc = SimpleDocTemplate(output_path, pagesize=letter)
    styles = getSampleStyleSheet()

    # Generate PDF content (similar to the previous Python script)

    doc.build(content)

if __name__ == "__main__":
    import sys

    if len(sys.argv) != 2:
        print("Usage: generate_pdf.py <id>")
        sys.exit(1)

    id = sys.argv[1]

    # Fetch quiz results
    result_data = fetch_quiz_results(id)

    # Generate PDF
    output_path = f"quiz_results_{id}.pdf"
    generate_pdf(result_data, output_path)

    print(output_path)  # Print PDF file path or URL
