import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const courseModules = [
  {
    title: "1. Introduction of ERP",
    topics: ["What is ERP?", "Evolution of ERP systems", "SAP as an ERP solution", "SAP modules overview"],
  },
  {
    title: "2. SAP R/4 Architecture",
    topics: ["Client/Server architecture", "Three-tier architecture", "SAP system landscape", "Transport management system"],
  },
  {
    title: "3. Introduction to ABAP/4",
    topics: ["ABAP workbench overview", "ABAP programming basics", "Data types and declarations", "ABAP syntax and structure"],
  },
  {
    title: "4. ABAP Dictionary",
    topics: ["Database tables", "Data elements", "Domains", "Structures and table types", "Search helps", "Lock objects"],
  },
  {
    title: "5. Database Operations",
    topics: ["Open SQL vs Native SQL", "SELECT statements", "INSERT, UPDATE, DELETE operations", "Database cursors"],
  },
  {
    title: "6. Internal Tables",
    topics: ["Types of internal tables", "Standard, Sorted, Hashed tables", "Table operations", "Control break statements"],
  },
  {
    title: "7. Message Classes",
    topics: ["Creating message classes", "Message types", "Using messages in programs", "Dynamic messages"],
  },
  {
    title: "8. Modularization Techniques",
    topics: ["Subroutines (FORM/PERFORM)", "Function modules", "Include programs", "Macros"],
  },
  {
    title: "9. Debugging",
    topics: ["ABAP debugger", "Breakpoints", "Watchpoints", "Debugging techniques", "Runtime analysis"],
  },
  {
    title: "10. Object Transportation",
    topics: ["Transport organizer", "Creating transport requests", "Releasing and importing transports", "Transport routes"],
  },
  {
    title: "11. Reports",
    topics: ["Classical reports", "Interactive reports", "ALV reports", "Report programming"],
  },
  {
    title: "12. Report Events",
    topics: ["INITIALIZATION", "AT SELECTION-SCREEN", "START-OF-SELECTION", "END-OF-SELECTION", "TOP-OF-PAGE"],
  },
  {
    title: "13. Selection Screen",
    topics: ["PARAMETERS", "SELECT-OPTIONS", "Selection screen blocks", "Validation and events"],
  },
  {
    title: "14. Dialogue Programming",
    topics: ["Module pool programming", "Screen painter", "Menu painter", "PAI and PBO events", "Table controls"],
  },
  {
    title: "15. BDC (Batch Data Communication)",
    topics: ["Recording transactions", "Call transaction method", "Session method", "Error handling in BDC"],
  },
  {
    title: "16. SAP Script",
    topics: ["Form design", "Layout sets", "Windows and pages", "Text elements", "Print programs"],
  },
  {
    title: "17. Smart Forms & Adobe Forms",
    topics: ["Smart form architecture", "Form builder", "Adobe forms basics", "Integration with ABAP"],
  },
  {
    title: "18. Object-Oriented ABAP",
    topics: ["Classes and objects", "Inheritance", "Polymorphism", "Interfaces", "Events", "Exception handling"],
  },
  {
    title: "19. BADIs & Enhancements",
    topics: ["User exits", "Customer exits", "BADIs", "Enhancement framework", "Implicit and explicit enhancements"],
  },
  {
    title: "20. ALV Reports with OOPs",
    topics: ["CL_SALV_TABLE", "ALV grid control", "Events in ALV", "Custom ALV programming"],
  },
  {
    title: "21. Interfaces (RFC, BAPI, ALE IDOC)",
    topics: ["RFC types and creation", "BAPI concepts", "ALE configuration", "IDOC structure and processing"],
  },
  {
    title: "22. ABAP on HANA - Unit 1",
    topics: ["Introduction to SAP HANA", "HANA architecture", "In-memory computing", "ABAP for HANA basics"],
  },
  {
    title: "23. ABAP on HANA - Unit 2",
    topics: ["CDS Views", "AMDP (ABAP Managed Database Procedures)", "Code pushdown techniques"],
  },
  {
    title: "24. ABAP on HANA - Unit 3",
    topics: ["HANA optimization", "Performance analysis", "SQL trace and HANA studio"],
  },
  {
    title: "25. ABAP on HANA - Unit 4",
    topics: ["Fiori integration", "OData services", "Gateway basics", "Real-time project implementation"],
  },
];

const CourseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Curriculum
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              Complete SAP ABAP
              <span className="text-gradient"> Course Content</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A comprehensive 70-hour program covering everything from ABAP basics 
              to advanced HANA development.
            </p>

            {/* Course badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                <Clock className="w-4 h-4" />
                <span className="font-medium">70 Hours</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                <BookOpen className="w-4 h-4" />
                <span className="font-medium">25 Modules</span>
              </div>
            </div>
          </motion.div>

          {/* Course accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm"
          >
            <Accordion type="single" collapsible className="space-y-2">
              {courseModules.map((module, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4 data-[state=open]:bg-muted/50"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                    {module.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-2 pl-4">
                      {module.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Download button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10"
          >
            <Button size="lg" className="px-8 py-6 text-lg rounded-xl">
              <Download className="mr-2 h-5 w-5" />
              Download Full Course Content
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
