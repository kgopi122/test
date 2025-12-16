export const courses = [
  {
    id: "sap-abap-complete",
    title: "Complete SAP ABAP Development",
    description: "Master SAP ABAP programming from basics to advanced concepts including HANA integration, OOPs, and real-world project implementation.",
    duration: "70 Hours",
    level: "Beginner to Advanced",
    category: "SAP ABAP",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center",
    rating: 4.8,
    students: 1250,
    overview: "This comprehensive SAP ABAP course is designed to take you from a complete beginner to an advanced ABAP developer. You'll learn everything from basic ABAP syntax to complex HANA integration, object-oriented programming, and real-world project implementation. The course includes hands-on exercises, real-time scenarios, and industry best practices.",
    demoVideo: "https://www.youtube.com/embed/eIho2S0ZahI",
    trainer: {
      name: "Rajesh Kumar",
      title: "Senior SAP ABAP Consultant",
      experience: "12+ Years",
      expertise: ["SAP ABAP Development", "SAP HANA", "OOPs ABAP", "Performance Optimization", "Integration Technologies"],
      bio: "Rajesh is a certified SAP ABAP consultant with over 12 years of experience in SAP development. He has worked with Fortune 500 companies and has extensive experience in ABAP on HANA, OOPs, and integration technologies. He has trained over 500+ students globally.",
      certifications: ["SAP Certified Development Associate - ABAP with SAP NetWeaver", "SAP Certified Development Specialist - ABAP for SAP HANA"],
      image: "/placeholder.svg"
    },
    prerequisites: [
      "Basic understanding of programming concepts",
      "Familiarity with database concepts",
      "Basic knowledge of SAP system navigation"
    ],
    modules: [
      {
        title: "1. Introduction of ERP",
        topics: ["ERP Fundamentals", "Why ERP?", "Features and advantages of ERP", "About SAP R/4 ERP", "Comparison of SAP R/4 with other products"]
      },
      {
        title: "2. SAP R/4 Architecture",
        topics: ["Presentation Server, Application Server, Database Server", "Defining an R/4 Instance", "Understanding a User Context", "Understanding a Roll Area", "List and their jobs of background services"]
      },
      {
        title: "3. Introduction to ABAP/4",
        topics: ["ABAP/4 Programming concept", "Introduction of various types of program", "Fundamentals of creation of programs", "Introduction of standard Data Types", "Declaration of different types of variables", "Loop and Controls", "IF structure", "Case statement", "Loop statement", "Control break statement", "Data structure", "User-Defined Data Types", "System Fields"]
      },
      {
        title: "4. Introduction of ABAP Dictionary",
        topics: ["Overview of Dictionary objects", "Overview of Types of Base tables", "Creation of Client independent base tables", "Creation of Client dependent base tables", "Understanding of standard database tables", "Views", "Structure", "Data Element", "Domain", "Search Help"]
      },
      {
        title: "5. Introduction of Database Operations",
        topics: ["Understanding of Open SQL statement", "Understanding of Native SQL statement", "Working with Insert, Update, Delete statement", "Addition of corresponding fields of statement"]
      },
      {
        title: "6. Introduction of Internal Table",
        topics: ["Overview of types of Internal tables", "Creation of an Internal table with an implicit header line", "Creation of an Internal table with an explicit header line", "Processing on internal table using following statements", "Append, Insert, Modify, Sort, Read, Collect, Clear, Refresh, Delete, Free", "Processing logic Read table statement Loop at"]
      },
      {
        title: "7. Message class",
        topics: ["Creation of user define massages", "Overview of types of massages", "Displaying massages"]
      },
      {
        title: "8. Modularization technique",
        topics: ["Include programs", "Subroutines", "Function modules"]
      },
      {
        title: "8.1 Debugging",
        topics: ["How to understand the code with help of F5 and F8 buttons", "How to analyse sub programs with help of F6 and F7 buttons", "How to set breakpoint with messages, Sub routines, function modules, methods", "How to create Watch point", "How to change in data base table from SE16N with help of debugging", "How to verify WA and ITAB conditions on different values", "How to download normal report data as ALV"]
      },
      {
        title: "9. Introduction of object transportation",
        topics: ["Understanding of development class / package", "Creation of development class / package", "Creation of workbench request", "Transportation of objects", "Understanding of TMS technique"]
      },
      {
        title: "10. Reports",
        topics: ["Understanding of types of reports", "Generation of various types of reports", "Classical report", "ALV report", "ALV report with events", "ABAP Query"]
      },
      {
        title: "11. Understanding of report events",
        topics: ["Initialization", "Start-of-selection", "Add-selection-screen", "Top-of-page", "End-of-page", "At line-selection", "At user-command"]
      },
      {
        title: "12. Introduction of selection screen",
        topics: ["Understanding of selection screen methods", "Creation of selection screen using SELECT-OPTIONS", "Usage of SELECT-OPTIONS in function module"]
      },
      {
        title: "13. Introduction of dialogue programming",
        topics: ["Understanding of module pool programming", "Creation of module pool program", "Designing screens using various screens elements", "Navigation in between multiple screens", "Displaying data into table control", "Screen painter", "Menu painter", "Creation of menu bar, tool bar, title bar etc."]
      },
      {
        title: "14. Introduction of BDC",
        topics: ["Overview of BDC", "Methods of BDC", "I/O method", "Direct input method", "Call transaction method", "Session method", "Working with foreground and background techniques", "Recording method"]
      },
      {
        title: "15. Introduction of SAP Script",
        topics: ["Designing of layout", "Working with standard text object", "Creation of various elements of SAP Script", "Working with standard SAP Script", "Writing print programs"]
      },
      {
        title: "16. SMART FORMS",
        topics: ["Creation of smart form with different Window Types", "Passing Parameters into Smart Form", "Smart Form with Database using Tables", "Smart Form with Derived Fields to perform Calculations", "Smart Form with Table Format Output", "Smart Form with Graphic window, Address Window", "Calling Smart at Runtime using Module Programming", "Adobe forms"]
      },
      {
        title: "17. OBJECT ORIENTED ABAP",
        topics: ["OOABAP Programming", "Local Classes, Global Classes", "Class, Encapsulation, Inheritance, Polymorphism", "ABAP OBJECTS with BDC Applications"]
      },
      {
        title: "18. BADI'S",
        topics: ["API application programming Interface", "Add-Ins Programming", "User Exits, Menu Exits, Function Module Exits"]
      },
      {
        title: "19. ALV reports with OOPS",
        topics: ["Reports with SCREEN PAINTER LAYOUT CONTAINER", "Using GRID, HOTSPOT and interactive selection process"]
      },
      {
        title: "20. Enhancements",
        topics: ["User Exits", "custom Exits", "BADI's"]
      },
      {
        title: "21. Interfaces",
        topics: ["RFC", "BAPI", "ALE IDOC"]
      },
      {
        title: "22. ABAP ON HANA - Unit 1: Introduction",
        topics: ["SAP HANA Basics and Technical Concepts", "Introducing the SAP HANA Studio", "ABAP and SAP HANA"]
      },
      {
        title: "23. ABAP ON HANA - Unit 2: Database Independent Code-to-Data",
        topics: ["Classical Open SQL and Its Limitations", "New Open SQL", "Core Data Services in ABAP", "Associations in Core Data Services", "Core Data Services with Input Parameters"]
      },
      {
        title: "24. ABAP ON HANA - Unit 3: SQL and SQL Script Basics for SAP HANA",
        topics: ["Reading data from a table or view", "Calculated Columns and Functions", "Duplicate Elimination", "Sorting and limiting result sets", "The WHERE clause", "SQL Script basics"]
      },
      {
        title: "25. ABAP ON HANA - Unit 4: SAP HANA specific Code-to-Data",
        topics: ["ABAP Database Connectivity (ADBC)", "Native SQL Syntax", "ABAP-Managed Database Procedures (AMDP)"]
      }
    ]
  },
  {
    id: "sap-fico-module2",
    title: "Module 2: SAP FICO (Finance & Controlling)",
    description: "Comprehensive SAP Finance and Controlling module training covering financial accounting, management accounting, and reporting.",
    duration: "60 Hours",
    level: "Beginner to Intermediate",
    category: "SAP Functional",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center",
    rating: 4.7,
    students: 890,
    overview: "Master SAP FICO module with comprehensive training in Financial Accounting (FI) and Controlling (CO). Learn to configure and manage financial processes, cost accounting, budgeting, and financial reporting in SAP systems.",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    trainer: {
      name: "Priya Sharma",
      title: "SAP FICO Senior Consultant",
      experience: "10+ Years",
      expertise: ["Financial Accounting", "Controlling", "Asset Accounting", "Cost Center Accounting", "Financial Reporting"],
      bio: "Priya is a certified SAP FICO consultant with extensive experience in implementing and configuring SAP Finance modules. She has successfully delivered multiple end-to-end SAP implementations across various industries.",
      certifications: ["SAP Certified Application Associate - Financial Accounting", "SAP Certified Application Associate - Management Accounting"],
      image: "/placeholder.svg"
    },
    prerequisites: [
      "Basic accounting knowledge",
      "Understanding of business processes",
      "SAP navigation basics"
    ],
    modules: [
      {
        title: "1. SAP FICO Overview & Organizational Structure",
        topics: ["Introduction to SAP FICO", "Company Code", "Chart of Accounts", "Fiscal Year Variant", "Currency Configuration"]
      },
      {
        title: "2. General Ledger Accounting",
        topics: ["GL Master Data", "Document Types", "Posting Keys", "GL Account Creation", "Automatic Account Determination"]
      },
      {
        title: "3. Accounts Payable (AP)",
        topics: ["Vendor Master Data", "Invoice Processing", "Payment Processing", "Automatic Payment Program", "Vendor Reports"]
      },
      {
        title: "4. Accounts Receivable (AR)",
        topics: ["Customer Master Data", "Invoice Processing", "Payment Processing", "Dunning Process", "Customer Reports"]
      },
      {
        title: "5. Asset Accounting",
        topics: ["Asset Master Data", "Depreciation", "Asset Acquisition", "Asset Retirement", "Asset Reports"]
      },
      {
        title: "6. Controlling Overview",
        topics: ["Cost Elements", "Cost Centers", "Internal Orders", "Profit Centers", "Cost Allocation"]
      }
    ]
  },
  {
    id: "sap-mm-module3",
    title: "Module 3: SAP MM (Materials Management)",
    description: "Learn SAP Materials Management module covering procurement, inventory management, vendor management, and material master data.",
    duration: "50 Hours",
    level: "Beginner to Intermediate",
    category: "SAP Functional",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop&crop=center",
    rating: 4.6,
    students: 675,
    overview: "Comprehensive SAP MM training covering all aspects of materials management including procurement processes, inventory management, vendor management, and integration with other SAP modules.",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    trainer: {
      name: "Amit Patel",
      title: "SAP MM Functional Consultant",
      experience: "8+ Years",
      expertise: ["Materials Management", "Procurement", "Inventory Management", "Vendor Management", "Integration with SD/PP"],
      bio: "Amit specializes in SAP MM module with hands-on experience in procurement and inventory management processes. He has worked on multiple SAP rollout projects globally.",
      certifications: ["SAP Certified Application Associate - Materials Management"],
      image: "/placeholder.svg"
    },
    modules: [
      {
        title: "1. SAP MM Overview & Organizational Structure",
        topics: ["Introduction to SAP MM", "Client", "Company Code", "Plant", "Storage Location", "Purchasing Organization"]
      },
      {
        title: "2. Material Master Data",
        topics: ["Material Types", "Material Groups", "Material Master Views", "Material Creation Process", "Material Classification"]
      },
      {
        title: "3. Vendor Master Data",
        topics: ["Vendor Account Groups", "Vendor Master Views", "Vendor Creation Process", "Vendor Evaluation"]
      },
      {
        title: "4. Purchasing Process",
        topics: ["Purchase Requisition", "Request for Quotation", "Purchase Order", "Goods Receipt", "Invoice Verification"]
      }
    ]
  },
  {
    id: "sap-sd-module4",
    title: "Module 4: SAP SD (Sales & Distribution)",
    description: "Master SAP Sales and Distribution module covering sales processes, pricing, shipping, billing, and customer management.",
    duration: "55 Hours",
    level: "Beginner to Intermediate",
    category: "SAP Functional",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
    rating: 4.5,
    students: 520,
    overview: "Complete SAP SD training covering the entire order-to-cash process including sales order management, pricing procedures, delivery processing, billing, and credit management.",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    trainer: {
      name: "Sneha Reddy",
      title: "SAP SD Senior Consultant",
      experience: "9+ Years",
      expertise: ["Sales & Distribution", "Pricing Procedures", "Order Management", "Billing", "Credit Management"],
      bio: "Sneha is an experienced SAP SD consultant with expertise in order-to-cash processes. She has successfully implemented SAP SD modules for various manufacturing and retail clients.",
      certifications: ["SAP Certified Application Associate - Sales and Distribution"],
      image: "/placeholder.svg"
    },
    modules: [
      {
        title: "1. SAP SD Overview & Organizational Structure",
        topics: ["Introduction to SAP SD", "Sales Organization", "Distribution Channel", "Division", "Sales Area"]
      },
      {
        title: "2. Master Data in SD",
        topics: ["Customer Master Data", "Material Master Data", "Customer-Material Info Records", "Condition Records"]
      },
      {
        title: "3. Sales Document Processing",
        topics: ["Sales Document Types", "Item Categories", "Schedule Lines", "Sales Order Processing"]
      },
      {
        title: "4. Pricing Procedures",
        topics: ["Condition Technique", "Pricing Procedures", "Access Sequences", "Condition Types"]
      }
    ]
  },
  {
    id: "sap-sd-module4",
    title: "Module 5: TEST",
    description: "Master SAP Sales and Distribution module covering sales processes, pricing, shipping, billing, and customer management.",
    duration: "55 Hours",
    level: "Beginner to Intermediate",
    category: "SAP Functional",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
    rating: 4.5,
    students: 520,
    overview: "Complete SAP SD training covering the entire order-to-cash process including sales order management, pricing procedures, delivery processing, billing, and credit management.",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    trainer: {
      name: "Sneha Reddy",
      title: "SAP SD Senior Consultant",
      experience: "9+ Years",
      expertise: ["Sales & Distribution", "Pricing Procedures", "Order Management", "Billing", "Credit Management"],
      bio: "Sneha is an experienced SAP SD consultant with expertise in order-to-cash processes. She has successfully implemented SAP SD modules for various manufacturing and retail clients.",
      certifications: ["SAP Certified Application Associate - Sales and Distribution"],
      image: "/placeholder.svg"
    },
    modules: [
      {
        title: "1. SAP SD Overview & Organizational Structure",
        topics: ["Introduction to SAP SD", "Sales Organization", "Distribution Channel", "Division", "Sales Area"]
      },
      {
        title: "2. Master Data in SD",
        topics: ["Customer Master Data", "Material Master Data", "Customer-Material Info Records", "Condition Records"]
      },
      {
        title: "3. Sales Document Processing",
        topics: ["Sales Document Types", "Item Categories", "Schedule Lines", "Sales Order Processing"]
      },
      {
        title: "4. Pricing Procedures",
        topics: ["Condition Technique", "Pricing Procedures", "Access Sequences", "Condition Types"]
      }
    ]
  },
  {
    id: "sap-sd-module4",
    title: "Module 5: TEST",
    description: "Master SAP Sales and Distribution module covering sales processes, pricing, shipping, billing, and customer management.",
    duration: "55 Hours",
    level: "Beginner to Intermediate",
    category: "SAP Functional",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
    rating: 4.5,
    students: 520,
    overview: "Complete SAP SD training covering the entire order-to-cash process including sales order management, pricing procedures, delivery processing, billing, and credit management.",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    trainer: {
      name: "Sneha Reddy",
      title: "SAP SD Senior Consultant",
      experience: "9+ Years",
      expertise: ["Sales & Distribution", "Pricing Procedures", "Order Management", "Billing", "Credit Management"],
      bio: "Sneha is an experienced SAP SD consultant with expertise in order-to-cash processes. She has successfully implemented SAP SD modules for various manufacturing and retail clients.",
      certifications: ["SAP Certified Application Associate - Sales and Distribution"],
      image: "/placeholder.svg"
    },
    modules: [
      {
        title: "1. SAP SD Overview & Organizational Structure",
        topics: ["Introduction to SAP SD", "Sales Organization", "Distribution Channel", "Division", "Sales Area"]
      },
      {
        title: "2. Master Data in SD",
        topics: ["Customer Master Data", "Material Master Data", "Customer-Material Info Records", "Condition Records"]
      },
      {
        title: "3. Sales Document Processing",
        topics: ["Sales Document Types", "Item Categories", "Schedule Lines", "Sales Order Processing"]
      },
      {
        title: "4. Pricing Procedures",
        topics: ["Condition Technique", "Pricing Procedures", "Access Sequences", "Condition Types"]
      }
    ]
  }
];