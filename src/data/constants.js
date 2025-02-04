export const Bio = {
  name: "Kedar",
  roles: [
    "Cloud Data Engineer",
    "ETL Developer",
    "Big Data Engineer",
    "Data Engineer",
  ],
  description:"I design and develop scalable data pipelines and backend solutions, ensuring efficient data processing and storage. With expertise in Big Data technologies, cloud services, and ETL workflows, I build optimized, high-performance data engineering solutions for real-time and batch processing.",
  github: "https://github.com/kedarshiral",
  resume:
    "https://drive.google.com/file/d/1rUWHdH0ezSOvUDmj-U5uuQHjrwaLflBt/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/kedarshiral/",
};

export const skills = [
  {
    title: "Big Data Skills",
    skills: [
      {
        name: "Apache Spark",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
      },
      {
        name: "PySpark",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/PySpark-logo.png",
      },
      {
        name: "Apache Kafka",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Apache_kafka.svg",
      },
      {
        name: "Apache Hive",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Apache_hive_logo.svg",
      },
      {
        name: "Airflow",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Apache-Airflow-Logo.png",
      },
    ],
  },
  {
    title: "Cloud",
    skills: [
      {
        name: "Amazon Athena",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Amazon_Athena_Logo.svg",
      },
      {
        name: "Amazon Redshift",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Amazon-Redshift-Logo.png",
      },
      {
        name: "AWS S3",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Amazon_S3_simple_storage_service.svg",
      },
      {
        name: "Azure Data Lake",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Microsoft_Azure_Logo.svg",
      },
      {
        name: "Databricks",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Databricks_Logo.png",
      },
    ],
  },
  {
    title: "Other Tools & Technologies",
    skills: [
      {
        name: "SQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      },
      {
        name: "MySQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "",
    role: "ETL Developer",
    company: "ZS Associates",
    date: "March 2024 – Present",
    desc: "Optimized scalable data pipelines, improving processing speed by 35% for faster trial site selection. Integrated multi-source data from Citeline API, AACT (ct.gov), and CTMS CSV files using custom Python adapters and PySpark. Designed and implemented Data Quality Metrics (DQM) ensuring 99% data accuracy. Developed a Universal Structured Layer (USL) for clinical trial data modeling and built a reporting layer in AWS Redshift with 13 KPIs for real-time insights.",
    skills: ["Airflow", "AWS S3", "Lambda", "AWS RDS", "PostgreSQL", "AWS EMR", "Redshift", "Athena", "PySpark", "Hadoop", "Hive"],
    doc: "",
  },
  {
    id: 1,
    img: "",
    role: "Software Engineer II",
    company: "Zimetrics",
    date: "Sept 2021 – March 2024",
    desc: "Designed a cost-effective data pipeline for diabetes patient management, achieving 30% cost savings. Implemented UPSERT logic for SCD Type 2 compliance, ensuring accurate historical tracking. Transformed raw data into structured formats (L1-L3 layers) with validation checks for improved consistency. Designed dimension tables for patient tracking, reducing table count by 61% through optimized joins, and enabling real-time reporting in PowerBI.",
    skills: ["AWS S3", "Lambda", "IICS", "AWS RDS", "AWS Glue", "Snowflake", "Step Functions", "Python", "Athena"],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: "https://i.pinimg.com/736x/47/0d/63/470d6319b7e082b743eebb72679dd576.jpg",
    school: "Dr.D.Y.Patil College of Engineering, Pune",
    date: "July 2017 - April 2021",
    grade: "8.19 CGPA",
    degree: "Bachelor of Engineering (Electronics and Telecommunications)",
  },
];

export const projects = [
  {
    id: 0,
    img: "https://i.pinimg.com/736x/47/0d/63/470d6319b7e082b743eebb72679dd576.jpg",
    school: "Dr.D.Y.Patil College of Engineering, Pune",
    date: "July 2017 - April 2021",
    grade: "8.19 CGPA",
    degree: "Bachelor of Engineering (Electronics and Telecommunications)",
  },
];
