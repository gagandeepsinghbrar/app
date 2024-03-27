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

def generate_pdf(result_data, id):
    doc = SimpleDocTemplate("result" + str(id) + ".pdf", pagesize=letter, title='Results')
    
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
    print('done')

if __name__ == "__main__":
    generate_pdf(fetch_quiz_results(12), 12)

