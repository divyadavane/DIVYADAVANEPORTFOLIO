import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY
import fitz

def build_pdf():
    pdf_filename = "public/resume.pdf"
    alt_filename = "public/Divya_Davane_Resume.pdf"
    
    doc = SimpleDocTemplate(
        pdf_filename,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=22,
        bottomMargin=22
    )

    styles = getSampleStyleSheet()
    
    name_style = ParagraphStyle(
        'NameStyle',
        fontName='Times-Bold',
        fontSize=19,
        leading=21,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#111111')
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        fontName='Times-Roman',
        fontSize=9,
        leading=11.5,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#222222')
    )
    
    section_heading_style = ParagraphStyle(
        'SectionHeading',
        fontName='Times-Bold',
        fontSize=11.5,
        leading=13.5,
        textColor=colors.HexColor('#111111'),
        spaceAfter=1
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        fontName='Times-Roman',
        fontSize=9,
        leading=11.2,
        alignment=TA_JUSTIFY,
        textColor=colors.HexColor('#111111')
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        fontName='Times-Roman',
        fontSize=8.8,
        leading=11,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#111111'),
        leftIndent=10,
        firstLineIndent=-7,
        spaceAfter=1
    )

    left_title_style = ParagraphStyle(
        'LeftTitle',
        fontName='Times-Bold',
        fontSize=9.2,
        leading=11.2,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#111111')
    )

    right_date_style = ParagraphStyle(
        'RightDate',
        fontName='Times-Bold',
        fontSize=9.2,
        leading=11.2,
        alignment=TA_RIGHT,
        textColor=colors.HexColor('#111111')
    )

    sub_left_style = ParagraphStyle(
        'SubLeft',
        fontName='Times-Italic',
        fontSize=8.8,
        leading=10.8,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#222222')
    )

    sub_right_style = ParagraphStyle(
        'SubRight',
        fontName='Times-Italic',
        fontSize=8.8,
        leading=10.8,
        alignment=TA_RIGHT,
        textColor=colors.HexColor('#222222')
    )

    story = []

    # Header
    story.append(Paragraph("Divya Davane", name_style))
    story.append(Spacer(1, 2))
    
    contact_text = (
        "Mumbai – 400067 &nbsp;|&nbsp; +91-9637775648 &nbsp;|&nbsp; "
        "<a href='mailto:divyadavane0@gmail.com' color='#111111'><u>divyadavane0@gmail.com</u></a> &nbsp;|&nbsp; "
        "<a href='https://github.com/divyadavane' color='#111111'><u>github.com/divyadavane</u></a> &nbsp;|&nbsp; "
        "<a href='https://linkedin.com/in/Divya-Davane' color='#111111'><u>linkedin.com/in/Divya-Davane</u></a>"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 4))

    def add_section_header(title):
        story.append(Paragraph(title, section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#111111'), spaceBefore=1, spaceAfter=3))

    # 1. Professional Summary
    add_section_header("Professional Summary")
    summary_text = (
        "Results-oriented Software Engineering undergraduate (CGPA 9.1/10) with 3 industry internships spanning "
        "full-stack development, machine learning, and data analytics. Built and shipped full-stack web applications "
        "featuring AI-driven natural language interfaces, real-time dashboards, and scalable REST APIs. Reduced monthly "
        "reporting time by 40% at Godrej Industries via workflow automation. Proficient in JavaScript/TypeScript, React, "
        "Next.js, Python, and Microsoft Azure; targeting an entry-level Software Engineer role to build reliable, production-ready products."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))

    # 2. Education
    add_section_header("Education")
    edu_table_data = [
        [
            Paragraph("<b>Vidyavardhini’s College of Engineering and Technology, University of Mumbai</b>", left_title_style),
            Paragraph("<b>2024 – Present</b>", right_date_style)
        ],
        [
            Paragraph("<i>Bachelor of Engineering – Artificial Intelligence and Data Science</i>", sub_left_style),
            Paragraph("<i>CGPA: 9.1 / 10</i>", sub_right_style)
        ]
    ]
    t = Table(edu_table_data, colWidths=[395, 153])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t)
    story.append(Paragraph("&bull; <b>Coursework:</b> Data Structures & Algorithms, DBMS, Deep Learning, Big Data Analytics, Data Warehousing, IoT", bullet_style))
    story.append(Spacer(1, 4))

    # 3. Internship Experience
    add_section_header("Internship Experience")
    
    # ML Intern
    exp1_data = [
        [Paragraph("<b>Machine Learning Intern</b>", left_title_style), Paragraph("<b>Apr 2026 – Jun 2026</b>", right_date_style)],
        [Paragraph("<i>Pratinik Infotech</i>", sub_left_style), Paragraph("", sub_right_style)]
    ]
    t1 = Table(exp1_data, colWidths=[395, 153])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t1)
    story.append(Paragraph("&bull; Developed and evaluated machine learning models using Python, Scikit-learn, and data preprocessing techniques to solve real-world problems.", bullet_style))
    story.append(Paragraph("&bull; Collaborated with the team to analyze datasets, optimize model performance, and document technical outcomes.", bullet_style))
    story.append(Spacer(1, 2))

    # SWE Intern
    exp2_data = [
        [Paragraph("<b>Software Engineer Intern</b>", left_title_style), Paragraph("<b>Feb 2026 – Apr 2026</b>", right_date_style)],
        [Paragraph("<i>Labmentix Private Limited</i>", sub_left_style), Paragraph("", sub_right_style)]
    ]
    t2 = Table(exp2_data, colWidths=[395, 153])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t2)
    story.append(Paragraph("&bull; Developed and maintained software applications by implementing scalable features, debugging code, and optimizing performance.", bullet_style))
    story.append(Paragraph("&bull; Collaborated in Agile teams using Git and modern development practices to deliver high-quality solutions.", bullet_style))
    story.append(Spacer(1, 2))

    # Data Analytics Intern
    exp3_data = [
        [Paragraph("<b>Data Analytics Intern</b>", left_title_style), Paragraph("<b>Jan 2025 – Mar 2025</b>", right_date_style)],
        [Paragraph("<i>Godrej Industries Ltd., Mumbai, India</i>", sub_left_style), Paragraph("", sub_right_style)]
    ]
    t3 = Table(exp3_data, colWidths=[395, 153])
    t3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t3)
    story.append(Paragraph("&bull; Analyzed large-scale sales and supply-chain records using Python (Pandas, NumPy) and SQL, surfacing insights that guided 3 strategic decisions for senior leadership.", bullet_style))
    story.append(Paragraph("&bull; Developed 5+ Power BI dashboards monitoring KPIs—revenue, inventory turnover, and regional sales—reducing stakeholder reporting time by 30%.", bullet_style))
    story.append(Paragraph("&bull; Built and scheduled ETL workflows that eliminated ~40% of manual data-cleaning work, shortening the monthly reporting cycle from 5 days to 3.", bullet_style))
    story.append(Spacer(1, 4))

    # 4. Projects
    add_section_header("Projects")
    
    proj1 = "<b>Aperio – AI-Powered Recycling Traceability Platform</b> — <i>Next.js, TypeScript, AI/LLM Integration</i>"
    story.append(Paragraph(proj1, left_title_style))
    story.append(Paragraph("&bull; Built a full-stack traceability platform that converts natural-language entries into structured supply-chain data; delivered real-time dashboards, lifecycle visualizations, and automated carbon-impact analytics across a 7-stage recycling pipeline.", bullet_style))
    story.append(Spacer(1, 1.5))

    proj2 = "<b>Chronos – Startup Team Operating System</b> — <i>Next.js, Full-Stack, AI Integration</i>"
    story.append(Paragraph(proj2, left_title_style))
    story.append(Paragraph("&bull; Developed an all-in-one workspace unifying task management, documentation, and team communication with integrated AI assistance for early-stage startup teams.", bullet_style))
    story.append(Spacer(1, 1.5))

    proj3 = "<b>Artificial Consciousness Simulator</b> — <i>Next.js, Interactive Data Visualization</i>"
    story.append(Paragraph(proj3, left_title_style))
    story.append(Paragraph("&bull; Built an interactive learning platform simulating multiple AI-consciousness theories (GWT, IIT, Predictive Processing) with adjustable-parameter model comparisons, quizzes, and analytics dashboards.", bullet_style))
    story.append(Spacer(1, 1.5))

    proj4 = "<b>DVH Travel Planner</b> — <i>React Native, Flutter, JavaScript, Dart</i>"
    story.append(Paragraph(proj4, left_title_style))
    story.append(Paragraph("&bull; Cross-platform mobile app with an ML-powered hotel recommendation engine (budget, location, user type); returns top-3 ranked options to cut booking search time significantly.", bullet_style))
    story.append(Spacer(1, 1.5))

    proj5 = "<b>Nextus – Financial SaaS Platform</b> — <i>Next.js, RESTful APIs, JWT, RBAC</i>"
    story.append(Paragraph(proj5, left_title_style))
    story.append(Paragraph("&bull; Banking platform supporting multi-account aggregation and real-time fund transfers across 4 account types; secured with JWT authentication and role-based access control.", bullet_style))
    story.append(Spacer(1, 4))

    # 5. Technical Skills
    add_section_header("Technical Skills")
    skills_text = (
        "<b>Languages:</b> JavaScript, TypeScript, Python, SQL, Java, C, HTML/CSS<br/>"
        "<b>Frameworks & Libraries:</b> React.js, Next.js, React Native, Flutter, Node.js, Flask, Streamlit<br/>"
        "<b>Tools & Cloud:</b> Git, MySQL, Microsoft Azure, RESTful APIs, JWT, Power BI, Tableau<br/>"
        "<b>AI / ML:</b> TensorFlow, PyTorch, Scikit-Learn, CNN, RNN/LSTM, Transfer Learning, LLM Integration<br/>"
        "<b>Soft Skills:</b> Communication, Teamwork, Technical Documentation, Content Writing, Adaptability"
    )
    skills_style = ParagraphStyle(
        'SkillsStyle',
        fontName='Times-Roman',
        fontSize=8.8,
        leading=12,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#111111')
    )
    story.append(Paragraph(skills_text, skills_style))
    story.append(Spacer(1, 4))

    # 6. Awards, Activities & Languages
    add_section_header("Awards, Activities & Languages")
    story.append(Paragraph("&bull; <b>2nd Place</b> – Oscillations National Paper Presentation, India — NeuroRender: Rendering Thoughts into Images (Apr 2025)", bullet_style))
    story.append(Paragraph("&bull; <b>Winner</b> – Oscillations National Technical Research Paper Presentation, India (2026)", bullet_style))
    story.append(Paragraph("&bull; <b>Creative Head</b> – VCET National Students Data Corps (Jun 2024 – Present)", bullet_style))
    story.append(Paragraph("&bull; <b>Languages:</b> English (Professional), Hindi (Professional), Marathi (Professional), French (Beginner)", bullet_style))

    doc.build(story)

    # Copy to alt filename as well
    with open(pdf_filename, 'rb') as f_in:
        pdf_bytes = f_in.read()
    with open(alt_filename, 'wb') as f_out:
        f_out.write(pdf_bytes)

    # Check page count and save image
    doc_fitz = fitz.open(pdf_filename)
    page_count = len(doc_fitz)
    print(f"Generated PDF with {page_count} page(s).")
    
    page = doc_fitz[0]
    pix = page.get_pixmap(dpi=150)
    pix.save("public/resume.png")
    print("Saved preview image to public/resume.png")

if __name__ == '__main__':
    build_pdf()
