from models import db, User, Article, Resource, ForumThread, ForumReply, SelfAssessment, AssessmentQuestion, AssessmentAnswer
from app import app  # Import your Flask app here
import datetime

# Bind the app to the current context
with app.app_context():
    # Drop all tables and recreate them
    db.drop_all()
    db.create_all()

    # Create sample users
    user1 = User(username='User1', email='userone@example.com', password='password20', role="Registered")
    user2 = User(username='User2', email='usertwo@example.com', password='password25', role="Registered")
    
    db.session.add_all([user1, user2])

    db.session.commit()

    # Create sample articles
    article1 = Article(title='Understanding Anxiety', content="In today's fast-paced world, many individuals face various mental health challenges that profoundly impact their well-being. These challenges range from everyday stress and anxiety to more complex conditions. Addressing mental health is crucial for leading a fulfilling life. This article explores strategies to overcome mental health problems, emphasizing the importance of self-awareness, seeking support, and adopting healthy coping mechanisms. Self-awareness plays a pivotal role in this journey. Starting by recognizing and acknowledging a range of emotions, both positive and negative, is essential. Identifying triggers—whether they stem from work-related stress, relationship issues, or external pressures—is a crucial step in overcoming difficulties. Seeking professional support is another significant aspect. Mental health professionals such as psychologists, counselors, or therapists can provide valuable insights, coping strategies, and a safe space for expressing thoughts and feelings. In some cases, medication may be prescribed, and it's crucial to consult with a qualified healthcare professional to explore tailored treatment options.", author=user1, published_date=datetime.datetime.utcnow(), status='Published', imageURL="https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    article2 = Article(title='Dealing with Depression', content="In today's fast-paced world, many individuals face various mental health challenges that profoundly impact their well-being. These challenges range from everyday stress and anxiety to more complex conditions. Addressing mental health is crucial for leading a fulfilling life. This article explores strategies to overcome mental health problems, emphasizing the importance of self-awareness, seeking support, and adopting healthy coping mechanisms. Self-awareness plays a pivotal role in this journey. Starting by recognizing and acknowledging a range of emotions, both positive and negative, is essential. Identifying triggers—whether they stem from work-related stress, relationship issues, or external pressures—is a crucial step in overcoming difficulties. Seeking professional support is another significant aspect. Mental health professionals such as psychologists, counselors, or therapists can provide valuable insights, coping strategies, and a safe space for expressing thoughts and feelings. In some cases, medication may be prescribed, and it's crucial to consult with a qualified healthcare professional to explore tailored treatment options.", author=user1, published_date=datetime.datetime.utcnow(), status='Published', imageURL="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHN1cHBvcnR8ZW58MHx8MHx8fDA%3D")
    article3 = Article(title='You will not die', content="In today's fast-paced world, many individuals face various mental health challenges that profoundly impact their well-being. These challenges range from everyday stress and anxiety to more complex conditions. Addressing mental health is crucial for leading a fulfilling life. This article explores strategies to overcome mental health problems, emphasizing the importance of self-awareness, seeking support, and adopting healthy coping mechanisms. Self-awareness plays a pivotal role in this journey. Starting by recognizing and acknowledging a range of emotions, both positive and negative, is essential. Identifying triggers—whether they stem from work-related stress, relationship issues, or external pressures—is a crucial step in overcoming difficulties. Seeking professional support is another significant aspect. Mental health professionals such as psychologists, counselors, or therapists can provide valuable insights, coping strategies, and a safe space for expressing thoughts and feelings. In some cases, medication may be prescribed, and it's crucial to consult with a qualified healthcare professional to explore tailored treatment options.", author=user1, published_date=datetime.datetime.utcnow(), status='Published', imageURL="https://images.unsplash.com/photo-1553986782-9f6de60b51b4?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

    db.session.add_all([article1, article2, article3])

    # Create sample resources
    resource1 = Resource(name='Mental Health Hotline', description='Crisis Center', contact_info='1-800-123-4567', availability='24/7', imageURL='https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', location="Nairobi")
    resource2 = Resource(name='Local Therapy Services', description='Therapist',  contact_info='therapyservices@example.com', availability='Business Hours', location="Mandera", imageURL="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHN1cHBvcnR8ZW58MHx8MHx8fDA%3D")

    db.session.add_all([resource1, resource2])

    # Create sample forum threads and replies
    thread1 = ForumThread(title='Greetings', content='How are you doing today?', user=user1)
    reply1 = ForumReply(content='I find mindfulness helpful.', thread=thread1, user=user2)

    db.session.add_all([thread1, reply1])

    # Seed Assessment Questions
    questions = [
        AssessmentQuestion(question_text='How often do you feel overwhelmed by your responsibilities?'),
        AssessmentQuestion(question_text='How frequently do you find yourself feeling irritable or angry?'),
        AssessmentQuestion(question_text='Do you often find it difficult to concentrate on tasks?'),
        AssessmentQuestion(question_text='How regularly do you experience physical symptoms like headaches or stomachaches?'),
        AssessmentQuestion(question_text='Do you feel disconnected or detached from your emotions or surroundings?')
    ]

    db.session.add_all(questions)

    answers = [
    AssessmentAnswer(question_id=1, assessment_id=1, rating=3),
    AssessmentAnswer(question_id=2, assessment_id=2, rating=1), 
    AssessmentAnswer(question_id=3, assessment_id=3, rating=5),
    AssessmentAnswer(question_id=4, assessment_id=4, rating=4),
    
    ]

    db.session.add_all(answers)

    # Additional Self-Assessments
    assessment1 = SelfAssessment(average_rating=3.5, mood="Moderate Stress", user=user1)
    assessment2 = SelfAssessment(average_rating=2.0, mood="Normal", user=user2)
    assessment3 = SelfAssessment(average_rating=4.0, mood="Depressed", user=user1)
    assessment4 = SelfAssessment(average_rating=1.5, mood="Content", user=user2)
    assessment5 = SelfAssessment(average_rating=3.8, mood="Anxious", user=user1)

    # Add these assessments to the session
    db.session.add_all([assessment1, assessment2, assessment3, assessment4, assessment5])


    # Commit all changes to the database
    db.session.commit()

    print('Database seeded successfully!')
