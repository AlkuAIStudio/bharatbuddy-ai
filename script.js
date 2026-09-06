"use strict";

/* ============================================================
   BHARATBUDDY AI
   CLEAN + FIXED COMPLETE FRONTEND SCRIPT
   ============================================================ */


/* ============================================================
   STORAGE
   ============================================================ */

const STORAGE_KEY = "bharatbuddy_data";


/* ============================================================
   COMPLETE CLASS 11 STUDY DATA
   ============================================================ */

const lessonData = {

    Physics: {

        "Units & Measurements": [

            {
                title: "Introduction to Units and Measurements",
                content: `
                    <h3>Introduction</h3>

                    <p>
                        Physics deals with physical quantities that can be
                        measured. Measurement means comparing an unknown
                        quantity with a standard quantity.
                    </p>

                    <h3>Physical Quantity</h3>

                    <p>
                        A physical quantity has a numerical value and a unit.
                    </p>

                    <div class="study-box">
                        <strong>Example:</strong>
                        5 metre = numerical value 5 + unit metre
                    </div>

                    <h3>SI System</h3>

                    <p>
                        The International System of Units is called SI.
                    </p>

                    <ul>
                        <li>Length → metre (m)</li>
                        <li>Mass → kilogram (kg)</li>
                        <li>Time → second (s)</li>
                        <li>Temperature → kelvin (K)</li>
                        <li>Electric current → ampere (A)</li>
                        <li>Amount of substance → mole (mol)</li>
                        <li>Luminous intensity → candela (cd)</li>
                    </ul>

                    <h3>Quick Revision</h3>

                    <ul>
                        <li>Measurement requires a standard unit.</li>
                        <li>SI is the internationally accepted system.</li>
                        <li>Every physical quantity has a numerical value and unit.</li>
                    </ul>
                `
            },

            {
                title: "Significant Figures",
                content: `
                    <h3>Significant Figures</h3>

                    <p>
                        Significant figures are the meaningful digits in a
                        measured quantity.
                    </p>

                    <h3>Important Rules</h3>

                    <ul>
                        <li>All non-zero digits are significant.</li>
                        <li>Zeros between non-zero digits are significant.</li>
                        <li>Leading zeros are generally not significant.</li>
                        <li>Trailing zeros after a decimal can be significant.</li>
                    </ul>

                    <div class="study-box">
                        <strong>Example:</strong>
                        2.50 has 3 significant figures.
                    </div>

                    <h3>Why are they important?</h3>

                    <p>
                        They show the precision of a measurement and prevent
                        us from reporting more accuracy than the instrument
                        actually provides.
                    </p>
                `
            },

            {
                title: "Errors in Measurement",
                content: `
                    <h3>Measurement Error</h3>

                    <p>
                        No physical measurement is perfectly exact. The
                        difference between measured value and true value is
                        associated with measurement error.
                    </p>

                    <h3>Types of Errors</h3>

                    <ul>
                        <li>Systematic errors</li>
                        <li>Random errors</li>
                        <li>Gross errors</li>
                    </ul>

                    <h3>Percentage Error</h3>

                    <div class="study-box">
                        Percentage Error =
                        (Absolute Error / Measured Value) × 100
                    </div>

                    <p>
                        Careful experimental technique can reduce many
                        measurement errors.
                    </p>
                `
            }

        ],

        "Motion in a Straight Line": [

            {
                title: "Introduction to Motion",
                content: `
                    <h3>Motion</h3>

                    <p>
                        An object is said to be in motion when its position
                        changes with respect to a reference point with time.
                    </p>

                    <h3>Reference Point</h3>

                    <p>
                        Motion is always described relative to some reference
                        point or frame.
                    </p>

                    <div class="study-box">
                        Example: A passenger sitting inside a moving bus is
                        at rest relative to another passenger but moving
                        relative to a person standing on the road.
                    </div>
                `
            },

            {
                title: "Distance and Displacement",
                content: `
                    <h3>Distance</h3>

                    <p>
                        Distance is the total path travelled by an object.
                        It is a scalar quantity.
                    </p>

                    <h3>Displacement</h3>

                    <p>
                        Displacement is the shortest directed distance from
                        initial position to final position.
                    </p>

                    <ul>
                        <li>Distance → scalar</li>
                        <li>Displacement → vector</li>
                    </ul>
                `
            },

            {
                title: "Speed and Velocity",
                content: `
                    <h3>Speed</h3>

                    <div class="study-box">
                        Speed = Distance / Time
                    </div>

                    <h3>Velocity</h3>

                    <div class="study-box">
                        Velocity = Displacement / Time
                    </div>

                    <p>
                        Speed tells how fast an object moves, while velocity
                        also includes direction.
                    </p>
                `
            },

            {
                title: "Acceleration",
                content: `
                    <h3>Acceleration</h3>

                    <p>
                        Acceleration is the rate of change of velocity with
                        time.
                    </p>

                    <div class="study-box">
                        a = (v - u) / t
                    </div>

                    <p>
                        Here u is initial velocity, v is final velocity and
                        t is time.
                    </p>

                    <h3>SI Unit</h3>

                    <p>
                        The SI unit of acceleration is m/s².
                    </p>
                `
            }

        ],

        "Laws of Motion": [

            {
                title: "Newton's First Law",
                content: `
                    <h3>Newton's First Law</h3>

                    <p>
                        An object remains at rest or continues in uniform
                        motion in a straight line unless acted upon by an
                        external unbalanced force.
                    </p>

                    <div class="study-box">
                        This law is also called the law of inertia.
                    </div>
                `
            },

            {
                title: "Newton's Second Law",
                content: `
                    <h3>Newton's Second Law</h3>

                    <p>
                        The net force acting on an object is related to the
                        rate of change of its momentum.
                    </p>

                    <div class="study-box">
                        F = ma
                    </div>

                    <p>
                        Force is measured in newtons (N).
                    </p>
                `
            },

            {
                title: "Newton's Third Law",
                content: `
                    <h3>Newton's Third Law</h3>

                    <p>
                        Forces always occur in pairs. When one body exerts a
                        force on another body, the second body exerts an equal
                        and opposite force on the first.
                    </p>

                    <div class="study-box">
                        Action and reaction act on different bodies.
                    </div>
                `
            }

        ],

        "Work Energy Power": [

            {
                title: "Work",
                content: `
                    <h3>Work</h3>

                    <p>
                        Work is done when a force causes displacement of an
                        object in the direction of the force.
                    </p>

                    <div class="study-box">
                        W = F s cos θ
                    </div>

                    <p>
                        The SI unit of work is joule (J).
                    </p>
                `
            },

            {
                title: "Kinetic Energy",
                content: `
                    <h3>Kinetic Energy</h3>

                    <p>
                        Kinetic energy is the energy possessed by an object
                        because of its motion.
                    </p>

                    <div class="study-box">
                        KE = 1/2 mv²
                    </div>
                `
            },

            {
                title: "Potential Energy",
                content: `
                    <h3>Potential Energy</h3>

                    <p>
                        Potential energy is energy stored due to the position
                        or configuration of an object.
                    </p>

                    <div class="study-box">
                        Near Earth's surface:
                        PE = mgh
                    </div>
                `
            },

            {
                title: "Power",
                content: `
                    <h3>Power</h3>

                    <p>
                        Power is the rate at which work is done.
                    </p>

                    <div class="study-box">
                        Power = Work / Time
                    </div>

                    <p>
                        SI unit of power is watt (W).
                    </p>
                `
            }

        ]

    },

    Mathematics: {

        "Sets": [

            {
                title: "Introduction to Sets",
                content: `
                    <h3>Set</h3>

                    <p>
                        A set is a well-defined collection of objects.
                    </p>

                    <div class="study-box">
                        Example:
                        A = {1, 2, 3, 4}
                    </div>

                    <h3>Elements</h3>

                    <p>
                        Objects belonging to a set are called its elements.
                    </p>
                `
            },

            {
                title: "Types of Sets",
                content: `
                    <h3>Important Types</h3>

                    <ul>
                        <li>Empty set</li>
                        <li>Finite set</li>
                        <li>Infinite set</li>
                        <li>Singleton set</li>
                        <li>Equal sets</li>
                        <li>Subset</li>
                        <li>Universal set</li>
                    </ul>
                `
            },

            {
                title: "Set Operations",
                content: `
                    <h3>Union</h3>

                    <p>
                        A ∪ B contains elements belonging to A or B or both.
                    </p>

                    <h3>Intersection</h3>

                    <p>
                        A ∩ B contains common elements of A and B.
                    </p>

                    <h3>Difference</h3>

                    <p>
                        A - B contains elements of A that are not in B.
                    </p>
                `
            }

        ],

        "Relations and Functions": [

            {
                title: "Ordered Pairs",
                content: `
                    <h3>Ordered Pair</h3>

                    <p>
                        An ordered pair is written as (a,b), where order
                        matters.
                    </p>

                    <div class="study-box">
                        (a,b) = (c,d) only when a = c and b = d.
                    </div>
                `
            },

            {
                title: "Relations",
                content: `
                    <h3>Relation</h3>

                    <p>
                        A relation connects elements of two sets according to
                        a specified rule.
                    </p>
                `
            },

            {
                title: "Functions",
                content: `
                    <h3>Function</h3>

                    <p>
                        A function is a relation in which every element of the
                        domain has exactly one image.
                    </p>

                    <div class="study-box">
                        f : A → B
                    </div>
                `
            }

        ],

        "Trigonometric Functions": [

            {
                title: "Angles and Measurement",
                content: `
                    <h3>Angle Measurement</h3>

                    <p>
                        Angles can be measured in degrees and radians.
                    </p>

                    <div class="study-box">
                        180° = π radians
                    </div>
                `
            },

            {
                title: "Trigonometric Ratios",
                content: `
                    <h3>Basic Ratios</h3>

                    <ul>
                        <li>sin θ = perpendicular / hypotenuse</li>
                        <li>cos θ = base / hypotenuse</li>
                        <li>tan θ = perpendicular / base</li>
                    </ul>
                `
            },

            {
                title: "Basic Identities",
                content: `
                    <h3>Important Identities</h3>

                    <div class="study-box">
                        sin²θ + cos²θ = 1
                    </div>

                    <div class="study-box">
                        1 + tan²θ = sec²θ
                    </div>

                    <div class="study-box">
                        1 + cot²θ = cosec²θ
                    </div>
                `
            }

        ],

        "Complex Numbers": [

            {
                title: "Imaginary Unit",
                content: `
                    <h3>Imaginary Unit</h3>

                    <p>
                        The imaginary unit is represented by i.
                    </p>

                    <div class="study-box">
                        i² = -1
                    </div>
                `
            },

            {
                title: "Complex Number",
                content: `
                    <h3>Complex Number</h3>

                    <p>
                        A complex number is generally written as:
                    </p>

                    <div class="study-box">
                        z = a + ib
                    </div>

                    <p>
                        Here a and b are real numbers.
                    </p>
                `
            }

        ]

    },

    Chemistry: {

        "Some Basic Concepts": [

            {
                title: "Matter and Its Classification",
                content: `
                    <h3>Matter</h3>

                    <p>
                        Matter is anything that has mass and occupies space.
                    </p>

                    <h3>Classification</h3>

                    <ul>
                        <li>Elements</li>
                        <li>Compounds</li>
                        <li>Mixtures</li>
                    </ul>
                `
            },

            {
                title: "Mole Concept",
                content: `
                    <h3>Mole</h3>

                    <p>
                        A mole represents a fixed number of particles.
                    </p>

                    <div class="study-box">
                        1 mole = 6.022 × 10²³ particles
                    </div>

                    <p>
                        This number is called Avogadro's constant.
                    </p>
                `
            }

        ],

        "Structure of Atom": [

            {
                title: "Subatomic Particles",
                content: `
                    <h3>Basic Particles</h3>

                    <ul>
                        <li>Electron</li>
                        <li>Proton</li>
                        <li>Neutron</li>
                    </ul>

                    <p>
                        Protons have positive charge, electrons have negative
                        charge and neutrons have no electric charge.
                    </p>
                `
            },

            {
                title: "Atomic Models",
                content: `
                    <h3>Atomic Models</h3>

                    <p>
                        Different models were proposed to explain the
                        structure of the atom, including models associated
                        with Thomson, Rutherford and Bohr.
                    </p>
                `
            }

        ],

        "Chemical Bonding": [

            {
                title: "Chemical Bond",
                content: `
                    <h3>Chemical Bond</h3>

                    <p>
                        A chemical bond is an attractive force that holds
                        atoms or ions together.
                    </p>
                `
            },

            {
                title: "Ionic and Covalent Bonds",
                content: `
                    <h3>Ionic Bond</h3>

                    <p>
                        Ionic bonding involves electrostatic attraction
                        between oppositely charged ions.
                    </p>

                    <h3>Covalent Bond</h3>

                    <p>
                        Covalent bonding involves sharing of electron pairs
                        between atoms.
                    </p>
                `
            }

        ]

    },

    "Computer Science": {

        "Computer Fundamentals": [

            {
                title: "Introduction to Computers",
                content: `
                    <h3>Computer</h3>

                    <p>
                        A computer is an electronic machine that accepts
                        input, processes data and produces output.
                    </p>

                    <h3>Basic Cycle</h3>

                    <div class="study-box">
                        Input → Processing → Output
                    </div>
                `
            },

            {
                title: "Hardware and Software",
                content: `
                    <h3>Hardware</h3>

                    <p>
                        Physical components of a computer are called hardware.
                    </p>

                    <h3>Software</h3>

                    <p>
                        Programs and instructions that control a computer are
                        called software.
                    </p>
                `
            }

        ],

        "Programming Basics": [

            {
                title: "What is Programming?",
                content: `
                    <h3>Programming</h3>

                    <p>
                        Programming is the process of writing instructions
                        that a computer can execute.
                    </p>
                `
            },

            {
                title: "Variables and Data",
                content: `
                    <h3>Variables</h3>

                    <p>
                        A variable is a named location used to store data.
                    </p>

                    <div class="study-box">
                        Example:
                        let marks = 95;
                    </div>
                `
            }

        ],

        "Web Development": [

            {
                title: "HTML Basics",
                content: `
                    <h3>HTML</h3>

                    <p>
                        HTML is used to structure content on web pages.
                    </p>

                    <div class="study-box">
                        HTML → Structure
                    </div>
                `
            },

            {
                title: "CSS Basics",
                content: `
                    <h3>CSS</h3>

                    <p>
                        CSS is used to control the appearance and layout of
                        web pages.
                    </p>

                    <div class="study-box">
                        CSS → Styling
                    </div>
                `
            },

            {
                title: "JavaScript Basics",
                content: `
                    <h3>JavaScript</h3>

                    <p>
                        JavaScript adds logic and interactivity to web pages.
                    </p>

                    <div class="study-box">
                        JavaScript → Behaviour & Interactivity
                    </div>
                `
            }

        ]

    },

    English: {

        "Grammar": [

            {
                title: "Parts of Speech",
                content: `
                    <h3>Parts of Speech</h3>

                    <ul>
                        <li>Noun</li>
                        <li>Pronoun</li>
                        <li>Verb</li>
                        <li>Adjective</li>
                        <li>Adverb</li>
                        <li>Preposition</li>
                        <li>Conjunction</li>
                        <li>Interjection</li>
                    </ul>
                `
            },

            {
                title: "Tenses",
                content: `
                    <h3>Tenses</h3>

                    <p>
                        Tense shows the time of an action or state.
                    </p>

                    <ul>
                        <li>Present</li>
                        <li>Past</li>
                        <li>Future</li>
                    </ul>
                `
            }

        ],

        "Vocabulary": [

            {
                title: "Synonyms and Antonyms",
                content: `
                    <h3>Synonyms</h3>

                    <p>
                        Synonyms are words with similar meanings.
                    </p>

                    <h3>Antonyms</h3>

                    <p>
                        Antonyms are words with opposite meanings.
                    </p>
                `
            }

        ]

    }

};


/* ============================================================
   CHAPTER QUESTIONS
   ============================================================ */

const chapterQuestions = {

    "Physics|Units & Measurements": [

        {
            type: "MCQ",
            question: "Which is the SI unit of length?",
            options: [
                "Metre",
                "Kilogram",
                "Second",
                "Newton"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question: "Which quantity is measured in kilograms?",
            options: [
                "Length",
                "Mass",
                "Time",
                "Temperature"
            ],
            answer: 1
        },

        {
            type: "SHORT",
            question: "What is measurement?",
            answer: "Measurement is the comparison of an unknown physical quantity with a standard unit."
        },

        {
            type: "SHORT",
            question: "What are significant figures?",
            answer: "Significant figures are the meaningful digits in a measured quantity."
        },

        {
            type: "LONG",
            question: "Explain the importance of SI units and significant figures.",
            answer: "SI units provide a common measurement system, while significant figures indicate the precision of measured values."
        }

    ],

    "Physics|Motion in a Straight Line": [

        {
            type: "MCQ",
            question: "Which quantity is a vector?",
            options: [
                "Distance",
                "Speed",
                "Displacement",
                "Time"
            ],
            answer: 2
        },

        {
            type: "MCQ",
            question: "The SI unit of acceleration is:",
            options: [
                "m/s",
                "m/s²",
                "km/h",
                "N"
            ],
            answer: 1
        },

        {
            type: "SHORT",
            question: "Define velocity.",
            answer: "Velocity is displacement per unit time."
        },

        {
            type: "SHORT",
            question: "Define acceleration.",
            answer: "Acceleration is the rate of change of velocity with time."
        },

        {
            type: "LONG",
            question: "Differentiate between distance and displacement.",
            answer: "Distance is the total path travelled and is scalar, whereas displacement is the shortest directed distance between initial and final positions and is vector."
        }

    ],

    "Physics|Laws of Motion": [

        {
            type: "MCQ",
            question: "Newton's first law is also known as:",
            options: [
                "Law of inertia",
                "Law of acceleration",
                "Law of gravitation",
                "Law of energy"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question: "Newton's second law gives:",
            options: [
                "F = ma",
                "E = mc²",
                "P = VI",
                "V = IR"
            ],
            answer: 0
        },

        {
            type: "SHORT",
            question: "State Newton's first law.",
            answer: "An object remains at rest or in uniform motion unless acted upon by an external unbalanced force."
        },

        {
            type: "SHORT",
            question: "Write Newton's second law equation.",
            answer: "F = ma."
        },

        {
            type: "LONG",
            question: "Explain Newton's three laws of motion.",
            answer: "Newton's laws describe inertia, the relation between force and acceleration, and action-reaction force pairs."
        }

    ],

    "Physics|Work Energy Power": [

        {
            type: "MCQ",
            question: "The SI unit of work is:",
            options: [
                "Watt",
                "Joule",
                "Newton",
                "Pascal"
            ],
            answer: 1
        },

        {
            type: "MCQ",
            question: "Kinetic energy depends on:",
            options: [
                "Mass and velocity",
                "Only mass",
                "Only time",
                "Only distance"
            ],
            answer: 0
        },

        {
            type: "SHORT",
            question: "Write the formula for kinetic energy.",
            answer: "KE = 1/2 mv²."
        },

        {
            type: "SHORT",
            question: "Define power.",
            answer: "Power is the rate at which work is done."
        },

        {
            type: "LONG",
            question: "Explain work, kinetic energy, potential energy and power.",
            answer: "Work is energy transferred by force through displacement, kinetic energy is energy of motion, potential energy is stored energy, and power is the rate of doing work."
        }

    ],

    "Mathematics|Sets": [

        {
            type: "MCQ",
            question: "A well-defined collection of objects is called:",
            options: [
                "Set",
                "Function",
                "Equation",
                "Matrix"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question: "Which symbol represents union?",
            options: [
                "∩",
                "∪",
                "⊂",
                "∈"
            ],
            answer: 1
        },

        {
            type: "SHORT",
            question: "Define a set.",
            answer: "A set is a well-defined collection of objects."
        },

        {
            type: "SHORT",
            question: "What is intersection of two sets?",
            answer: "Intersection contains the elements common to both sets."
        },

        {
            type: "LONG",
            question: "Explain union, intersection and difference of sets.",
            answer: "Union combines elements of both sets, intersection contains common elements, and difference contains elements belonging to one set but not the other."
        }

    ],

    "Mathematics|Relations and Functions": [

        {
            type: "MCQ",
            question: "A function assigns each domain element:",
            options: [
                "Exactly one image",
                "No image",
                "At least two images",
                "Only itself"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question: "An ordered pair is written as:",
            options: [
                "[a,b]",
                "(a,b)",
                "{a,b}",
                "<a,b>"
            ],
            answer: 1
        },

        {
            type: "SHORT",
            question: "What is a relation?",
            answer: "A relation is a connection between elements of two sets according to a rule."
        },

        {
            type: "SHORT",
            question: "Define function.",
            answer: "A function is a relation in which every domain element has exactly one image."
        },

        {
            type: "LONG",
            question: "Explain the concept of relation and function.",
            answer: "A relation associates elements of sets, while a function is a special relation where each domain element maps to exactly one element in the codomain."
        }

    ],

    "Mathematics|Trigonometric Functions": [

        {
            type: "MCQ",
            question: "180 degrees equals:",
            options: [
                "π radians",
                "2π radians",
                "π/2 radians",
                "1 radian"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question: "sin²θ + cos²θ equals:",
            options: [
                "0",
                "1",
                "2",
                "θ"
            ],
            answer: 1
        },

        {
            type: "SHORT",
            question: "Write the relation between degrees and radians.",
            answer: "180 degrees equals π radians."
        },

        {
            type: "SHORT",
            question: "Write one basic trigonometric identity.",
            answer: "sin²θ + cos²θ = 1."
        },

        {
            type: "LONG",
            question: "Explain the basic trigonometric ratios and identities.",
            answer: "The basic ratios are sine, cosine and tangent, with related reciprocal ratios. Important identities include sin²θ + cos²θ = 1."
        }

    ],

    "Mathematics|Complex Numbers": [

        {
            type: "MCQ",
            question: "The value of i² is:",
            options: [
                "1",
                "-1",
                "0",
                "i"
            ],
            answer: 1
        },

        {
            type: "MCQ",
            question: "A complex number is generally written as:",
            options: [
                "a + ib",
                "a/b",
                "ab",
                "a - b only"
            ],
            answer: 0
        },

        {
            type: "SHORT",
            question: "What is the imaginary unit?",
            answer: "The imaginary unit is i, where i² = -1."
        },

        {
            type: "SHORT",
            question: "Write the general form of a complex number.",
            answer: "z = a + ib."
        },

        {
            type: "LONG",
            question: "Explain complex numbers.",
            answer: "A complex number consists of a real part and an imaginary part and is generally written as z = a + ib."
        }

    ],

    "Chemistry|Some Basic Concepts": [

        {
            type: "MCQ",
            question: "One mole contains approximately:",
            options: [
                "6.022 × 10²³ particles",
                "10 particles",
                "100 particles",
                "1 particle"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question: "Matter occupies:",
            options: [
                "Only time",
                "Space and has mass",
                "Only energy",
                "Nothing"
            ],
            answer: 1
        },

        {
            type: "SHORT",
            question: "What is a mole?",
            answer: "A mole is an amount of substance containing approximately 6.022 × 10²³ particles."
        },

        {
            type: "SHORT",
            question: "What is matter?",
            answer: "Matter is anything that has mass and occupies space."
        },

        {
            type: "LONG",
            question: "Explain the mole concept.",
            answer: "The mole is a counting unit used in chemistry and represents approximately 6.022 × 10²³ particles."
        }

    ],

    "Chemistry|Structure of Atom": [

        {
            type: "MCQ",
            question: "Which particle has negative charge?",
            options: [
                "Proton",
                "Neutron",
                "Electron",
                "Nucleus"
            ],
            answer: 2
        },

        {
            type: "MCQ",
            question: "Which particle has no electric charge?",
            options: [
                "Electron",
                "Proton",
                "Neutron",
                "Ion"
            ],
            answer: 2
        },

        {
            type: "SHORT",
            question: "Name the three basic subatomic particles.",
            answer: "Electron, proton and neutron."
        },

        {
            type: "SHORT",
            question: "What is the charge of an electron?",
            answer: "An electron has negative electric charge."
        },

        {
            type: "LONG",
            question: "Describe the basic structure of an atom.",
            answer: "An atom contains a nucleus with protons and neutrons, while electrons occupy regions around the nucleus."
        }

    ],

    "Chemistry|Chemical Bonding": [

        {
            type: "MCQ",
            question: "Covalent bonding mainly involves:",
            options: [
                "Sharing electrons",
                "Destroying atoms",
                "Removing nuclei",
                "Changing mass"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question: "Ionic bonding involves attraction between:",
            options: [
                "Neutral particles only",
                "Oppositely charged ions",
                "Two neutrons",
                "Two nuclei only"
            ],
            answer: 1
        },

        {
            type: "SHORT",
            question: "What is a chemical bond?",
            answer: "A chemical bond is an attractive force that holds atoms or ions together."
        },

        {
            type: "SHORT",
            question: "What is a covalent bond?",
            answer: "A covalent bond involves sharing of electron pairs between atoms."
        },

        {
            type: "LONG",
            question: "Differentiate between ionic and covalent bonding.",
            answer: "Ionic bonding involves electrostatic attraction between oppositely charged ions, while covalent bonding involves sharing electron pairs."
        }

    ],

    "Computer Science|Computer Fundamentals": [

        {
            type: "MCQ",
            question: "The physical parts of a computer are called:",
            options: [
                "Software",
                "Hardware",
                "Data",
                "Algorithm"
            ],
            answer: 1
        },

        {
            type: "MCQ",
            question: "A computer generally follows:",
            options: [
                "Input → Processing → Output",
                "Output → Input → Processing",
                "Processing only",
                "Input only"
            ],
            answer: 0
        },

        {
            type: "SHORT",
            question: "What is hardware?",
            answer: "Hardware refers to the physical components of a computer."
        },

        {
            type: "SHORT",
            question: "What is software?",
            answer: "Software consists of programs and instructions used by a computer."
        },

        {
            type: "LONG",
            question: "Explain the basic working cycle of a computer.",
            answer: "A computer accepts input, processes the information using instructions and produces output."
        }

    ],

    "Computer Science|Programming Basics": [

        {
            type: "MCQ",
            question: "Programming means:",
            options: [
                "Writing computer instructions",
                "Only drawing",
                "Only typing",
                "Repairing hardware"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question: "A variable is commonly used to:",
            options: [
                "Store data",
                "Delete hardware",
                "Turn off electricity",
                "Print paper only"
            ],
            answer: 0
        },

        {
            type: "SHORT",
            question: "What is programming?",
            answer: "Programming is the process of writing instructions that a computer can execute."
        },

        {
            type: "SHORT",
            question: "What is a variable?",
            answer: "A variable is a named storage location used to hold data."
        },

        {
            type: "LONG",
            question: "Explain why variables are important in programming.",
            answer: "Variables allow programs to store, update and use data while the program is running."
        }

    ],

    "Computer Science|Web Development": [

        {
            type: "MCQ",
            question: "HTML is mainly used for:",
            options: [
                "Web page structure",
                "Database storage",
                "Operating systems",
                "Video editing"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question: "CSS is mainly used for:",
            options: [
                "Styling",
                "Database queries",
                "Hardware repair",
                "Audio recording"
            ],
            answer: 0
        },

        {
            type: "SHORT",
            question: "What is HTML?",
            answer: "HTML is a markup language used to structure content on web pages."
        },

        {
            type: "SHORT",
            question: "What is CSS?",
            answer: "CSS is used to style and layout web pages."
        },

        {
            type: "LONG",
            question: "Explain the role of HTML, CSS and JavaScript.",
            answer: "HTML provides structure, CSS controls presentation and JavaScript adds logic and interactivity."
        }

    ],

    "English|Grammar": [

        {
            type: "MCQ",
            question: "Which one is a noun?",
            options: [
                "Run",
                "Beautiful",
                "Teacher",
                "Quickly"
            ],
            answer: 2
        },

        {
            type: "MCQ",
            question: "Which word is a verb?",
            options: [
                "Run",
                "Blue",
                "School",
                "Quickly"
            ],
            answer: 0
        },

        {
            type: "SHORT",
            question: "What is a noun?",
            answer: "A noun is a word used to name a person, place, thing or idea."
        },

        {
            type: "SHORT",
            question: "What is a verb?",
            answer: "A verb expresses an action, occurrence or state."
        },

        {
            type: "LONG",
            question: "Explain the main parts of speech.",
            answer: "The major parts of speech include nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions and interjections."
        }

    ],

    "English|Vocabulary": [

        {
            type: "MCQ",
            question: "A synonym has:",
            options: [
                "A similar meaning",
                "An opposite meaning",
                "No meaning",
                "Only a number"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question: "An antonym has:",
            options: [
                "A similar meaning",
                "An opposite meaning",
                "The same spelling",
                "No meaning"
            ],
            answer: 1
        },

        {
            type: "SHORT",
            question: "What is a synonym?",
            answer: "A synonym is a word having a similar meaning to another word."
        },

        {
            type: "SHORT",
            question: "What is an antonym?",
            answer: "An antonym is a word having an opposite meaning."
        },

        {
            type: "LONG",
            question: "Explain why vocabulary is important.",
            answer: "A strong vocabulary improves understanding, communication, reading and writing."
        }

    ]

};


/* ============================================================
   DEFAULT APP DATA
   ============================================================ */

const defaultData = {

    profile: {
        name: "Student",
        className: "Class 11",
        stream: "PCM",
        careerGoal: "Software Developer"
    },

    stats: {
        questions: 0,
        quizzes: 0,
        lessons: 0,
        coding: 0,
        english: 0
    },

    progress: {
        Physics: 0,
        Mathematics: 0,
        Chemistry: 0,
        "Computer Science": 0,
        English: 0
    },

    lessonProgress: {},

    quizHistory: [],

    chatHistory: [],

    dailyGoal: 0,

    dailyGoalTarget: 5,

    settings: {
        darkMode: false,
        compactMode: false
    },

    chapterTests: {}

};


/* ============================================================
   LOAD / SAVE DATA
   ============================================================ */

function loadData() {

    try {

        const saved =
            localStorage.getItem(
                STORAGE_KEY
            );

        if (!saved) {

            return JSON.parse(
                JSON.stringify(
                    defaultData
                )
            );

        }

        const parsed =
            JSON.parse(saved);

        return {

            ...JSON.parse(
                JSON.stringify(
                    defaultData
                )
            ),

            ...parsed,

            profile: {
                ...defaultData.profile,
                ...(parsed.profile || {})
            },

            stats: {
                ...defaultData.stats,
                ...(parsed.stats || {})
            },

            progress: {
                ...defaultData.progress,
                ...(parsed.progress || {})
            },

            settings: {
                ...defaultData.settings,
                ...(parsed.settings || {})
            },

            lessonProgress:
                parsed.lessonProgress &&
                typeof parsed.lessonProgress === "object"
                    ? parsed.lessonProgress
                    : {},

            quizHistory:
                Array.isArray(
                    parsed.quizHistory
                )
                    ? parsed.quizHistory
                    : [],

            chatHistory:
                Array.isArray(
                    parsed.chatHistory
                )
                    ? parsed.chatHistory
                    : [],

            chapterTests:
                parsed.chapterTests &&
                typeof parsed.chapterTests === "object"
                    ? parsed.chapterTests
                    : {}

        };

    } catch (error) {

        console.warn(
            "BharatBuddy data could not be loaded.",
            error
        );

        return JSON.parse(
            JSON.stringify(
                defaultData
            )
        );

    }

}


let data = loadData();


function saveData() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );

    } catch (error) {

        console.warn(
            "BharatBuddy data could not be saved.",
            error
        );

    }

}


/* ============================================================
   DOM REFERENCES
   ============================================================ */

const pageContent =
    document.getElementById(
        "pageContent"
    );

const pageTitle =
    document.getElementById(
        "pageTitle"
    );

const menuBtn =
    document.getElementById(
        "menuBtn"
    );

const overlay =
    document.getElementById(
        "overlay"
    );

const notificationBtn =
    document.getElementById(
        "notificationBtn"
    );

const notificationModal =
    document.getElementById(
        "notificationModal"
    );

const toast =
    document.getElementById(
        "toast"
    );

const profileName =
    document.getElementById(
        "profileName"
    );

const profileAvatar =
    document.getElementById(
        "profileAvatar"
    );


/* ============================================================
   GLOBAL STATE
   ============================================================ */

let activeQuiz = null;

let quizTimer = null;

const QUIZ_TIME = 300;

let currentCodeTab = "html";

let studyState = {

    board: "CBSE",

    className:
        data.profile.className ||
        "Class 11",

    stream:
        data.profile.stream ||
        "PCM",

    subject: "Physics",

    chapter: "Units & Measurements",

    lessonIndex: 0

};

let activeChapterTest = null;


/* ============================================================
   SAFE HELPERS
   ============================================================ */

function escapeHTML(value) {

    return String(
        value == null
            ? ""
            : value
    )
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );

}


function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        showToast.timer
    );

    showToast.timer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );

}


function formatAIText(text) {

    if (!text) return "";

    let safe =
        escapeHTML(text);

    safe =
        safe.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        );

    safe =
        safe.replace(
            /\*(.*?)\*/g,
            "<em>$1</em>"
        );

    safe =
        safe.replace(
            /^### (.*)$/gm,
            "<h3>$1</h3>"
        );

    safe =
        safe.replace(
            /^## (.*)$/gm,
            "<h2>$1</h2>"
        );

    safe =
        safe.replace(
            /^# (.*)$/gm,
            "<h1>$1</h1>"
        );

    safe =
        safe.replace(
            /^\- (.*)$/gm,
            "<li>$1</li>"
        );

    safe =
        safe.replace(
            /(<li>.*<\/li>)/gs,
            "<ul>$1</ul>"
        );

    safe =
        safe.replace(
            /\n{2,}/g,
            "</p><p>"
        );

    safe =
        "<p>" +
        safe +
        "</p>";

    return safe;

}


/* ============================================================
   PROFILE UI
   ============================================================ */

function updateProfileUI() {

    if (profileName) {

        profileName.textContent =
            data.profile.name ||
            "Student";

    }

    if (profileAvatar) {

        const name =
            data.profile.name ||
            "Student";

        profileAvatar.textContent =
            name
                .charAt(0)
                .toUpperCase();

    }

}


function updateStats(type) {

    if (
        !data.stats ||
        typeof data.stats !== "object"
    ) {

        data.stats = {
            ...defaultData.stats
        };

    }

    if (
        typeof data.stats[type] !==
        "number"
    ) {

        data.stats[type] = 0;

    }

    data.stats[type]++;

    saveData();

}


/* ============================================================
   PROGRESS HELPERS
   ============================================================ */

function normalizeProgressSubject(
    subject
) {

    return subject;

}


function getCurriculumSubjects() {

    return Object.keys(
        lessonData
    );

}


function getCurriculumChapters(
    subject
) {

    if (
        !lessonData[subject]
    ) {

        return [];

    }

    return Object.keys(
        lessonData[subject]
    );

}


function calculateLessonProgress(
    subject
) {

    const chapters =
        getCurriculumChapters(
            subject
        );

    if (!chapters.length) {

        return 0;

    }

    let total = 0;

    let completed = 0;

    chapters.forEach(
        (chapter, chapterIndex) => {

            const lessons =
                getChapterLessons(
                    subject,
                    chapter
                );

            total +=
                lessons.length;

            const progress =
                data.lessonProgress[
                    subject
                ] || [];

            lessons.forEach(
                (_, lessonIndex) => {

                    const id =
                        `${subject}-${chapterIndex}-${lessonIndex}`;

                    if (
                        progress.includes(id)
                    ) {

                        completed++;

                    }

                }
            );

        }
    );

    if (!total) return 0;

    return Math.round(
        (completed / total) * 100
    );

}


function getAllLessons(
    subject
) {

    const chapters =
        getCurriculumChapters(
            subject
        );

    const result = [];

    chapters.forEach(
        chapter => {

            const lessons =
                getChapterLessons(
                    subject,
                    chapter
                );

            lessons.forEach(
                lesson => {

                    result.push({
                        ...lesson,
                        chapter
                    });

                }

            );

        }
    );

    return result;

}


function getChapterLessons(
    subject,
    chapter
) {

    if (
        lessonData[subject] &&
        Array.isArray(
            lessonData[subject][chapter]
        )
    ) {

        return lessonData[
            subject
        ][chapter];

    }

    return [

        {
            title: chapter,

            content: `
                <h3>${escapeHTML(
                    chapter
                )}</h3>

                <p>
                    This chapter is ready for AI-powered
                    study generation.
                </p>
            `
        }

    ];

}


function ensureStudyProgress() {

    if (
        !data.lessonProgress ||
        typeof data.lessonProgress !==
        "object"
    ) {

        data.lessonProgress = {};

    }

    Object.keys(
        lessonData
    ).forEach(
        subject => {

            if (
                !Array.isArray(
                    data.lessonProgress[
                        subject
                    ]
                )
            ) {

                data.lessonProgress[
                    subject
                ] = [];

            }

            const progress =
                calculateLessonProgress(
                    subject
                );

            const progressSubject =
                normalizeProgressSubject(
                    subject
                );

            if (
                data.progress
            ) {

                data.progress[
                    progressSubject
                ] = progress;

            }

        }
    );

    saveData();

}


/* ============================================================
   SIDEBAR / NAVIGATION
   ============================================================ */

const pageNames = {

    home: "Home",

    tutor: "AI Tutor",

    study: "Study",

    practice: "Practice",

    coding: "Coding Lab",

    career: "Career",

    english: "English",

    progress: "Progress",

    achievements: "Achievements",

    profile: "Profile",

    settings: "Settings"

};


function setActiveNav(
    page
) {

    document
        .querySelectorAll(
            "[data-page]"
        )
        .forEach(
            item => {

                item.classList.toggle(
                    "active",
                    item.dataset.page === page
                );

            }
        );

}


function closeSidebar() {

    document.body.classList.remove(
        "sidebar-open"
    );

    if (overlay) {

        overlay.classList.remove(
            "show"
        );

    }

}


function openSidebar() {

    document.body.classList.add(
        "sidebar-open"
    );

    if (overlay) {

        overlay.classList.add(
            "show"
        );

    }

}


function openPage(
    page
) {

    if (
        !pageContent
    ) {

        return;

    }

    setActiveNav(
        page
    );

    if (pageTitle) {

        pageTitle.textContent =
            pageNames[page] ||
            "BharatBuddy";

    }

    closeSidebar();

    switch (page) {

        case "home":
            renderHome();
            break;

        case "tutor":
            renderTutor();
            break;

        case "study":
            renderStudy();
            break;

        case "practice":
            renderPractice();
            break;

        case "coding":
            renderCoding();
            break;

        case "career":
            renderCareer();
            break;

        case "english":
            renderEnglish();
            break;

        case "progress":
            renderProgress();
            break;

        case "achievements":
            renderAchievements();
            break;

        case "profile":
            renderProfile();
            break;

        case "settings":
            renderSettings();
            break;

        default:
            renderHome();

    }

}


/* ============================================================
   NAV EVENTS
   ============================================================ */

document
    .querySelectorAll(
        "[data-page]"
    )
    .forEach(
        item => {

            item.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    openPage(
                        item.dataset.page
                    );

                }
            );

        }
    );


if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        () => {

            if (
                document.body.classList.contains(
                    "sidebar-open"
                )
            ) {

                closeSidebar();

            } else {

                openSidebar();

            }

        }
    );

}


if (overlay) {

    overlay.addEventListener(
        "click",
        closeSidebar
    );

}


if (notificationBtn) {

    notificationBtn.addEventListener(
        "click",
        () => {

            if (notificationModal) {

                notificationModal.classList.add(
                    "show"
                );

            }

        }
    );

}


if (notificationModal) {

    notificationModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                notificationModal
            ) {

                notificationModal.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* ============================================================
   HOME
   ============================================================ */

function renderHome() {

    const progress =
        Math.round(
            Object.values(
                data.progress
            ).reduce(
                (sum, value) =>
                    sum + Number(value || 0),
                0
            ) /
            Math.max(
                1,
                Object.keys(
                    data.progress
                ).length
            )
        );

    pageContent.innerHTML = `

        <section class="page-header">

            <h1>
                👋 Welcome back,
                ${escapeHTML(
                    data.profile.name ||
                    "Student"
                )}
            </h1>

            <p>
                Learn smarter with BharatBuddy AI.
            </p>

        </section>


        <section class="hero-card">

            <div>

                <span class="hero-badge">
                    🇮🇳 BharatBuddy AI
                </span>

                <h2>
                    Your AI Study Companion
                </h2>

                <p>
                    Study chapters, practise questions,
                    learn coding and build your future.
                </p>

                <div class="hero-actions">

                    <button
                        class="btn btn-primary"
                        id="homeStudyBtn"
                        type="button">

                        📚 Start Studying

                    </button>

                    <button
                        class="btn btn-secondary"
                        id="homeTutorBtn"
                        type="button">

                        🤖 Ask AI

                    </button>

                </div>

            </div>

        </section>


        <section class="stats-grid">

            <div class="stat-card">

                <span>📚</span>

                <strong>
                    ${data.stats.lessons || 0}
                </strong>

                <small>
                    Lessons
                </small>

            </div>


            <div class="stat-card">

                <span>🧠</span>

                <strong>
                    ${data.stats.questions || 0}
                </strong>

                <small>
                    AI Questions
                </small>

            </div>


            <div class="stat-card">

                <span>🎯</span>

                <strong>
                    ${data.stats.quizzes || 0}
                </strong>

                <small>
                    Quizzes
                </small>

            </div>


            <div class="stat-card">

                <span>📈</span>

                <strong>
                    ${progress}%
                </strong>

                <small>
                    Overall Progress
                </small>

            </div>

        </section>


        <section class="card">

            <div class="section-heading">

                <div>

                    <h2>
                        🎯 Today's Goal
                    </h2>

                    <p>
                        Complete activities to keep learning.
                    </p>

                </div>

                <strong>
                    ${Math.min(
                        data.dailyGoal || 0,
                        data.dailyGoalTarget || 5
                    )}
                    /
                    ${data.dailyGoalTarget || 5}
                </strong>

            </div>

            <div class="goal-bar">

                <div
                    style="
                        width:${Math.min(
                            100,
                            (
                                (data.dailyGoal || 0) /
                                (data.dailyGoalTarget || 5)
                            ) * 100
                        )}%;
                    ">
                </div>

            </div>

        </section>


        <section class="card">

            <div class="section-heading">

                <div>

                    <h2>
                        🚀 Continue Learning
                    </h2>

                    <p>
                        Pick a subject and continue your lessons.
                    </p>

                </div>

            </div>

            <div class="grid-3">

                ${Object.keys(
                    lessonData
                ).map(
                    subject => {

                        const p =
                            calculateLessonProgress(
                                subject
                            );

                        return `

                            <button
                                class="subject-card"
                                data-home-subject="${escapeHTML(
                                    subject
                                )}"
                                type="button">

                                <span class="subject-icon">

                                    ${
                                        subject === "Physics"
                                            ? "⚡"
                                            : subject === "Mathematics"
                                                ? "📐"
                                                : subject === "Chemistry"
                                                    ? "🧪"
                                                    : subject === "Computer Science"
                                                        ? "💻"
                                                        : "🇬🇧"
                                    }

                                </span>

                                <strong>
                                    ${escapeHTML(
                                        subject
                                    )}
                                </strong>

                                <small>
                                    ${p}% complete
                                </small>

                            </button>

                        `;

                    }
                ).join("")}

            </div>

        </section>

    `;

    attachHomeEvents();

}


function attachHomeEvents() {

    const studyBtn =
        document.getElementById(
            "homeStudyBtn"
        );

    if (studyBtn) {

        studyBtn.addEventListener(
            "click",
            () => {

                openPage(
                    "study"
                );

            }
        );

    }


    const tutorBtn =
        document.getElementById(
            "homeTutorBtn"
        );

    if (tutorBtn) {

        tutorBtn.addEventListener(
            "click",
            () => {

                openPage(
                    "tutor"
                );

            }
        );

    }


    document
        .querySelectorAll(
            "[data-home-subject]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        studyState.subject =
                            button.dataset.homeSubject;

                        const chapters =
                            getCurriculumChapters(
                                studyState.subject
                            );

                        studyState.chapter =
                            chapters[0] ||
                            "";

                        studyState.lessonIndex =
                            0;

                        openPage(
                            "study"
                        );

                    }
                );

            }
        );

}


/* ============================================================
   AI API
   ============================================================ */

async function askAI(
    message
) {

    const response =
        await fetch(
            "https://bharatbuddy-ai-36i4.onrender.com/api/chat",
            {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify({
                        message
                    })

            }
        );

    let result = {};

    try {

        result =
            await response.json();

    } catch {

        result = {};

    }


    if (
        response.status === 429
    ) {

        throw new Error(
            "⏳ BharatBuddy AI ka free request limit abhi reach ho gaya hai. Thodi der baad dobara try karo."
        );

    }


    if (!response.ok) {

        throw new Error(
            result.error ||
            "BharatBuddy AI temporarily unavailable."
        );

    }


    const answer =
        result.reply ||
        result.answer ||
        result.output_text ||
        "";

    if (!answer) {

        throw new Error(
            "AI ne empty response diya."
        );

    }

    return answer;

}


/* ============================================================
   AI TUTOR
   ============================================================ */

function renderTutor() {

    pageContent.innerHTML = `

        <section class="page-header">

            <h1>
                🤖 AI Tutor
            </h1>

            <p>
                Ask BharatBuddy anything about your studies.
            </p>

        </section>


        <section class="chat-card">

            <div
                id="chatMessages"
                class="chat-messages">

            </div>


            <form
                id="tutorForm"
                class="chat-input-area">

                <input
                    id="tutorInput"
                    type="text"
                    autocomplete="off"
                    placeholder="Ask your question..."
                >

                <button
                    class="btn btn-primary"
                    type="submit">

                    Send

                </button>

            </form>

        </section>

    `;

    renderChatMessages();


    const form =
        document.getElementById(
            "tutorForm"
        );

    const input =
        document.getElementById(
            "tutorInput"
        );

    if (form) {

        form.addEventListener(
            "submit",
            async event => {

                event.preventDefault();

                const message =
                    input.value.trim();

                if (!message) return;

                input.value = "";

                await sendTutorMessage(
                    message
                );

            }
        );

    }

}


function renderChatMessages() {

    const box =
        document.getElementById(
            "chatMessages"
        );

    if (!box) return;


    if (
        !data.chatHistory.length
    ) {

        box.innerHTML = `

            <div class="empty-state">

                <div>
                    🤖
                </div>

                <h3>
                    Hi! I'm BharatBuddy AI
                </h3>

                <p>
                    Ask me a question about any subject.
                </p>

            </div>

        `;

        return;

    }


    box.innerHTML =
        data.chatHistory
            .map(
                item => `

                    <div
                        class="chat-message ${
                            item.role === "user"
                                ? "user"
                                : "assistant"
                        }">

                        <div class="chat-bubble">

                            ${
                                item.role === "assistant"
                                    ? formatAIText(
                                        item.content
                                    )
                                    : escapeHTML(
                                        item.content
                                    )
                            }

                        </div>

                    </div>

                `
            )
            .join("");

    box.scrollTop =
        box.scrollHeight;

}


async function sendTutorMessage(
    message
) {

    data.chatHistory.push({

        role: "user",

        content: message

    });

    saveData();

    renderChatMessages();


    try {

        const answer =
            await askAI(
                message
            );

        data.chatHistory.push({

            role: "assistant",

            content: answer

        });

        if (
            data.chatHistory.length >
            100
        ) {

            data.chatHistory =
                data.chatHistory.slice(
                    -100
                );

        }

        updateStats(
            "questions"
        );

        saveData();

        renderChatMessages();

    } catch (error) {

        data.chatHistory.push({

            role: "assistant",

            content:
                error.message ||
                "AI temporarily unavailable."

        });

        saveData();

        renderChatMessages();

    }

}


/* ============================================================
   STUDY PAGE
   ============================================================ */

function renderStudy() {

    ensureStudyProgress();

    const subjects =
        getCurriculumSubjects();


    if (
        !lessonData[
            studyState.subject
        ]
    ) {

        studyState.subject =
            subjects[0];

    }


    const chapters =
        getCurriculumChapters(
            studyState.subject
        );


    if (
        !chapters.includes(
            studyState.chapter
        )
    ) {

        studyState.chapter =
            chapters[0];

    }


    const chapterLessons =
        getChapterLessons(
            studyState.subject,
            studyState.chapter
        );


    if (
        studyState.lessonIndex >=
        chapterLessons.length
    ) {

        studyState.lessonIndex =
            0;

    }


    const subjectProgress =
        calculateLessonProgress(
            studyState.subject
        );


    pageContent.innerHTML = `

        <section class="page-header">

            <h1>
                📚 Study
            </h1>

            <p>
                Learn chapter by chapter with BharatBuddy.
            </p>

        </section>


        <section class="card">

            <div class="study-select-grid">

                <label>

                    <span>
                        Board
                    </span>

                    <select id="studyBoard">

                        <option
                            value="CBSE"
                            ${
                                studyState.board ===
                                "CBSE"
                                    ? "selected"
                                    : ""
                            }>
                            CBSE
                        </option>

                        <option
                            value="BSEB"
                            ${
                                studyState.board ===
                                "BSEB"
                                    ? "selected"
                                    : ""
                            }>
                            BSEB
                        </option>

                    </select>

                </label>


                <label>

                    <span>
                        Class
                    </span>

                    <select id="studyClass">

                        <option
                            value="Class 9">
                            Class 9
                        </option>

                        <option
                            value="Class 10">
                            Class 10
                        </option>

                        <option
                            value="Class 11">
                            Class 11
                        </option>

                        <option
                            value="Class 12">
                            Class 12
                        </option>

                    </select>

                </label>


                <label>

                    <span>
                        Stream
                    </span>

                    <select id="studyStream">

                        <option value="General">
                            General
                        </option>

                        <option value="PCM">
                            PCM
                        </option>

                        <option value="PCB">
                            PCB
                        </option>

                        <option value="Commerce">
                            Commerce
                        </option>

                        <option value="Arts">
                            Arts
                        </option>

                    </select>

                </label>

            </div>

        </section>


        <section class="grid-3">

            ${subjects
                .map(
                    subject => {

                        const progress =
                            calculateLessonProgress(
                                subject
                            );

                        return `

                            <button
                                class="
                                    subject-card
                                    ${
                                        studyState.subject ===
                                        subject
                                            ? "active"
                                            : ""
                                    }
                                "
                                data-subject="${escapeHTML(
                                    subject
                                )}"
                                type="button">

                                <div
                                    class="subject-icon">

                                    ${
                                        subject === "Physics"
                                            ? "⚡"
                                            : subject === "Mathematics"
                                                ? "📐"
                                                : subject === "Chemistry"
                                                    ? "🧪"
                                                    : subject === "Computer Science"
                                                        ? "💻"
                                                        : "🇬🇧"
                                    }

                                </div>

                                <strong>
                                    ${escapeHTML(
                                        subject
                                    )}
                                </strong>

                                <small>
                                    ${progress}% complete
                                </small>

                            </button>

                        `;

                    }
                )
                .join("")}

        </section>


        <section class="card">

            <div class="section-heading">

                <div>

                    <h2>
                        ${escapeHTML(
                            studyState.subject
                        )}
                    </h2>

                    <p>
                        ${subjectProgress}% complete
                    </p>

                </div>

                <strong>
                    ${subjectProgress}%
                </strong>

            </div>

            <div class="goal-bar">

                <div
                    style="
                        width:${subjectProgress}%;
                    ">
                </div>

            </div>

        </section>


        <section class="card">

            <div class="study-select-grid">

                <label>

                    <span>
                        Chapter
                    </span>

                    <select id="studyChapter">

                        ${chapters
                            .map(
                                chapter => `

                                    <option
                                        value="${escapeHTML(
                                            chapter
                                        )}"
                                        ${
                                            chapter ===
                                            studyState.chapter
                                                ? "selected"
                                                : ""
                                        }>

                                        ${escapeHTML(
                                            chapter
                                        )}

                                    </option>

                                `
                            )
                            .join("")}

                    </select>

                </label>

            </div>


            <div class="chapter-list">

                ${chapters
                    .map(
                        (chapter, index) => `

                            <button
                                type="button"
                                class="
                                    chapter-item
                                    ${
                                        chapter ===
                                        studyState.chapter
                                            ? "active"
                                            : ""
                                    }
                                "
                                data-chapter="${escapeHTML(
                                    chapter
                                )}">

                                <span>
                                    Chapter ${index + 1}
                                </span>

                                <strong>
                                    ${escapeHTML(
                                        chapter
                                    )}
                                </strong>

                            </button>

                        `
                    )
                    .join("")}

            </div>

        </section>


        <section
            id="currentLessonArea"
            class="card">

        </section>

    `;


    const classSelect =
        document.getElementById(
            "studyClass"
        );

    if (classSelect) {

        classSelect.value =
            studyState.className;

    }


    const streamSelect =
        document.getElementById(
            "studyStream"
        );

    if (streamSelect) {

        streamSelect.value =
            studyState.stream;

    }


    attachStudyEvents();

    renderCurrentLesson();

}


function attachStudyEvents() {

    const boardSelect =
        document.getElementById(
            "studyBoard"
        );

    if (boardSelect) {

        boardSelect.addEventListener(
            "change",
            () => {

                studyState.board =
                    boardSelect.value;

                saveStudyState();

            }
        );

    }


    const classSelect =
        document.getElementById(
            "studyClass"
        );

    if (classSelect) {

        classSelect.addEventListener(
            "change",
            () => {

                studyState.className =
                    classSelect.value;

                studyState.lessonIndex =
                    0;

                saveStudyState();

                renderStudy();

            }
        );

    }


    const streamSelect =
        document.getElementById(
            "studyStream"
        );

    if (streamSelect) {

        streamSelect.addEventListener(
            "change",
            () => {

                studyState.stream =
                    streamSelect.value;

                studyState.lessonIndex =
                    0;

                saveStudyState();

            }
        );

    }


    document
        .querySelectorAll(
            "[data-subject]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        studyState.subject =
                            button.dataset.subject;

                        const chapters =
                            getCurriculumChapters(
                                studyState.subject
                            );

                        studyState.chapter =
                            chapters[0] ||
                            "";

                        studyState.lessonIndex =
                            0;

                        saveStudyState();

                        renderStudy();

                    }
                );

            }
        );


    const chapterSelect =
        document.getElementById(
            "studyChapter"
        );

    if (chapterSelect) {

        chapterSelect.addEventListener(
            "change",
            () => {

                studyState.chapter =
                    chapterSelect.value;

                studyState.lessonIndex =
                    0;

                saveStudyState();

                renderStudy();

            }
        );

    }


    document
        .querySelectorAll(
            "[data-chapter]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        studyState.chapter =
                            button.dataset.chapter;

                        studyState.lessonIndex =
                            0;

                        saveStudyState();

                        renderStudy();

                    }
                );

            }
        );

}


function saveStudyState() {

    try {

        localStorage.setItem(
            "bharatbuddy_study_state",
            JSON.stringify(
                studyState
            )
        );

    } catch {

        // Ignore storage errors.

    }

}


/* ============================================================
   CURRENT LESSON
   ============================================================ */

function renderCurrentLesson() {

    const area =
        document.getElementById(
            "currentLessonArea"
        );

    if (
        !area
    ) {

        return;

    }


    const lessons =
        getChapterLessons(
            studyState.subject,
            studyState.chapter
        );


    if (
        !lessons.length
    ) {

        area.innerHTML = `

            <div class="empty-state">

                <h3>
                    No lesson available
                </h3>

                <p>
                    AI Study Notes se is chapter ko generate
                    kar sakte ho.
                </p>

                <button
                    id="generateCurrentAIStudy"
                    class="btn btn-primary"
                    type="button">

                    🤖 Generate AI Study

                </button>

            </div>

        `;

        const generate =
            document.getElementById(
                "generateCurrentAIStudy"
            );

        if (generate) {

            generate.addEventListener(
                "click",
                generateCurrentAIStudy
            );

        }

        return;

    }


    if (
        studyState.lessonIndex < 0
    ) {

        studyState.lessonIndex =
            0;

    }


    if (
        studyState.lessonIndex >=
        lessons.length
    ) {

        studyState.lessonIndex =
            lessons.length - 1;

    }


    const lesson =
        lessons[
            studyState.lessonIndex
        ];


    const chapterIndex =
        getCurriculumChapters(
            studyState.subject
        ).indexOf(
            studyState.chapter
        );


    const lessonId =
        `${studyState.subject}-${chapterIndex}-${studyState.lessonIndex}`;


    const completed =
        Array.isArray(
            data.lessonProgress[
                studyState.subject
            ]
        )
            ? data.lessonProgress[
                studyState.subject
            ].includes(
                lessonId
            )
            : false;


    const isFirst =
        studyState.lessonIndex === 0;

    const isLast =
        studyState.lessonIndex ===
        lessons.length - 1;


    area.innerHTML = `

        <div class="lesson-header">

            <div>

                <span class="lesson-label">
                    ${escapeHTML(
                        studyState.chapter
                    )}
                </span>

                <h2>
                    ${escapeHTML(
                        lesson.title
                    )}
                </h2>

                <p>
                    Topic ${studyState.lessonIndex + 1}
                    of ${lessons.length}
                </p>

            </div>

        </div>


        <div class="lesson-content">

            ${
                lesson.content ||
                `
                    <p>
                        No lesson content available.
                    </p>
                `
            }

        </div>


        <div class="lesson-actions">

            <button
                class="btn btn-secondary"
                id="previousLesson"
                type="button"
                ${isFirst ? "disabled" : ""}>

                ← Previous

            </button>


            <button
                class="btn btn-primary"
                id="completeLesson"
                type="button">

                ${
                    completed
                        ? "✅ Completed"
                        : "✅ Mark Lesson Complete"
                }

            </button>


            <button
                class="btn btn-primary"
                id="nextLesson"
                type="button">

                ${
                    isLast
                        ? "Chapter Exercise →"
                        : "Next Topic →"
                }

            </button>

        </div>

    `;


    const previous =
        document.getElementById(
            "previousLesson"
        );

    const complete =
        document.getElementById(
            "completeLesson"
        );

    const next =
        document.getElementById(
            "nextLesson"
        );


    if (previous) {

        previous.addEventListener(
            "click",
            () => {

                if (
                    studyState.lessonIndex >
                    0
                ) {

                    studyState.lessonIndex--;

                    saveStudyState();

                    renderStudy();

                    setTimeout(
                        scrollToCurrentLesson,
                        100
                    );

                }

            }
        );

    }


    if (complete) {

        complete.addEventListener(
            "click",
            () => {

                completeCurrentLesson();

            }
        );

    }


    if (next) {

        next.addEventListener(
            "click",
            () => {

                if (isLast) {

                    startChapterTest();

                } else {

                    completeCurrentLesson(
                        false,
                        true
                    );

                }

            }
        );

    }

}


function completeCurrentLesson(
    finishCourse = false,
    goNext = false
) {

    const subject =
        studyState.subject;


    const lessons =
        getChapterLessons(
            subject,
            studyState.chapter
        );


    const chapters =
        getCurriculumChapters(
            subject
        );


    const chapterIndex =
        chapters.indexOf(
            studyState.chapter
        );


    const lessonId =
        `${subject}-${chapterIndex}-${studyState.lessonIndex}`;


    if (
        !Array.isArray(
            data.lessonProgress[
                subject
            ]
        )
    ) {

        data.lessonProgress[
            subject
        ] = [];

    }


    if (
        !data.lessonProgress[
            subject
        ].includes(
            lessonId
        )
    ) {

        data.lessonProgress[
            subject
        ].push(
            lessonId
        );

        data.stats.lessons =
            Number(
                data.stats.lessons || 0
            ) + 1;

        data.dailyGoal =
            Math.min(
                data.dailyGoalTarget || 5,
                Number(
                    data.dailyGoal || 0
                ) + 1
            );

        showToast(
            "Lesson complete! 🎉"
        );

    }


    data.progress[
        normalizeProgressSubject(
            subject
        )
    ] =
        calculateLessonProgress(
            subject
        );


    saveData();


    if (
        goNext &&
        studyState.lessonIndex <
        lessons.length - 1
    ) {

        studyState.lessonIndex++;

        saveStudyState();

        renderStudy();

        setTimeout(
            scrollToCurrentLesson,
            100
        );

        return;

    }


    if (
        studyState.lessonIndex >=
        lessons.length - 1
    ) {

        showToast(
            "Chapter lessons complete! 🎯"
        );

        setTimeout(
            () => {

                startChapterTest();

            },
            300
        );

        return;

    }


    renderStudy();

    setTimeout(
        scrollToCurrentLesson,
        100
    );

}


function scrollToCurrentLesson() {

    const area =
        document.getElementById(
            "currentLessonArea"
        );

    if (area) {

        area.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* ============================================================
   CHAPTER TEST
   ============================================================ */

function getChapterQuestions() {

    const key =
        `${studyState.subject}|${studyState.chapter}`;


    if (
        chapterQuestions[key]
    ) {

        return chapterQuestions[key];

    }


    return [

        {
            type: "MCQ",

            question:
                `What is the main idea of ${studyState.chapter}?`,

            options: [

                "Understanding the chapter concepts",

                "Ignoring definitions",

                "Only memorising answers",

                "Skipping practice"

            ],

            answer: 0

        },

        {
            type: "MCQ",

            question:
                "Which is the best way to learn a difficult concept?",

            options: [

                "Understand it step by step",

                "Skip it",

                "Only memorise the title",

                "Never practise"

            ],

            answer: 0

        },

        {
            type: "SHORT",

            question:
                "Write one important concept from this chapter.",

            answer:
                "Students should identify and explain a relevant concept from the chapter."

        },

        {
            type: "SHORT",

            question:
                "Why is practice important?",

            answer:
                "Practice helps strengthen understanding and reveals areas that need revision."

        },

        {
            type: "LONG",

            question:
                "Summarise what you learned from this chapter.",

            answer:
                "A good summary should mention the key definitions, concepts, examples and important relationships covered in the chapter."

        }

    ];

}


function startChapterTest() {

    const questions =
        getChapterQuestions();


    activeChapterTest = {

        subject:
            studyState.subject,

        chapter:
            studyState.chapter,

        questions,

        current: 0,

        score: 0,

        answers: [],

        finished: false

    };


    renderChapterTest();

}


function renderChapterTest() {

    const area =
        document.getElementById(
            "currentLessonArea"
        );

    if (
        !area ||
        !activeChapterTest
    ) {

        return;

    }


    const test =
        activeChapterTest;


    if (
        test.current >=
        test.questions.length
    ) {

        finishChapterTest();

        return;

    }


    const question =
        test.questions[
            test.current
        ];


    const progress =
        Math.round(
            (
                test.current /
                test.questions.length
            ) * 100
        );


    area.innerHTML = `

        <div class="quiz-header">

            <div>

                <span class="lesson-label">
                    Chapter Test
                </span>

                <h2>
                    ${escapeHTML(
                        test.chapter
                    )}
                </h2>

            </div>

            <strong>
                ${test.current + 1}
                /
                ${test.questions.length}
            </strong>

        </div>


        <div class="goal-bar">

            <div
                style="
                    width:${progress}%;
                ">
            </div>

        </div>


        <div class="quiz-question-card">

            <span class="question-type">
                ${escapeHTML(
                    question.type
                )}
            </span>

            <h3>
                ${escapeHTML(
                    question.question
                )}
            </h3>


            ${
                question.type === "MCQ"

                    ? `

                        <div class="quiz-options">

                            ${question.options
                                .map(
                                    (
                                        option,
                                        index
                                    ) => `

                                        <button
                                            type="button"
                                            class="quiz-option"
                                            data-answer="${index}">

                                            <span>
                                                ${
                                                    String.fromCharCode(
                                                        65 +
                                                        index
                                                    )
                                                }
                                            </span>

                                            ${escapeHTML(
                                                option
                                            )}

                                        </button>

                                    `
                                )
                                .join("")}

                        </div>

                    `

                    : `

                        <textarea
                            id="chapterTextAnswer"
                            class="quiz-textarea"
                            rows="6"
                            placeholder="Write your answer here...">
                        </textarea>

                        <button
                            id="submitTextAnswer"
                            class="btn btn-primary"
                            type="button">

                            Submit Answer

                        </button>

                    `

            }

        </div>

    `;


    if (
        question.type ===
        "MCQ"
    ) {

        document
            .querySelectorAll(
                "[data-answer]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            const selected =
                                Number(
                                    button.dataset.answer
                                );

                            if (
                                selected ===
                                question.answer
                            ) {

                                test.score++;

                                button.classList.add(
                                    "correct"
                                );

                            } else {

                                button.classList.add(
                                    "wrong"
                                );

                                const correct =
                                    document.querySelector(
                                        `[data-answer="${question.answer}"]`
                                    );

                                if (correct) {

                                    correct.classList.add(
                                        "correct"
                                    );

                                }

                            }


                            test.answers.push({

                                question:
                                    question.question,

                                selected,

                                correct:
                                    question.answer

                            });


                            document
                                .querySelectorAll(
                                    "[data-answer]"
                                )
                                .forEach(
                                    item => {

                                        item.disabled =
                                            true;

                                    }
                                );


                            setTimeout(
                                () => {

                                    test.current++;

                                    renderChapterTest();

                                },
                                800
                            );

                        }
                    );

                }
            );

    } else {

        const submit =
            document.getElementById(
                "submitTextAnswer"
            );

        if (submit) {

            submit.addEventListener(
                "click",
                () => {

                    const textarea =
                        document.getElementById(
                            "chapterTextAnswer"
                        );

                    const answer =
                        textarea
                            ? textarea.value.trim()
                            : "";

                    if (!answer) {

                        showToast(
                            "Pehle answer likho."
                        );

                        return;

                    }


                    const correct =
                        evaluateTextAnswer(
                            answer,
                            question.answer
                        );


                    if (correct) {

                        test.score++;

                    }


                    test.answers.push({

                        question:
                            question.question,

                        answer,

                        correct

                    });


                    test.current++;

                    renderChapterTest();

                }
            );

        }

    }

}


function evaluateTextAnswer(
    userAnswer,
    expectedAnswer
) {

    const user =
        String(
            userAnswer || ""
        )
            .toLowerCase()
            .split(
                /[^a-z0-9]+/
            )
            .filter(
                word =>
                    word.length > 3
            );

    const expected =
        String(
            expectedAnswer || ""
        )
            .toLowerCase()
            .split(
                /[^a-z0-9]+/
            )
            .filter(
                word =>
                    word.length > 3
            );


    if (
        !user.length ||
        !expected.length
    ) {

        return false;

    }


    const matches =
        expected.filter(
            word =>
                user.includes(
                    word
                )
        ).length;


    return (
        matches /
        expected.length
    ) >= 0.25;

}


function finishChapterTest() {

    const test =
        activeChapterTest;


    if (!test) return;


    const total =
        test.questions.length;


    const percentage =
        Math.round(
            (
                test.score /
                total
            ) * 100
        );


    test.finished = true;


    const key =
        `${studyState.board}|${studyState.className}|${studyState.stream}|${test.subject}|${test.chapter}`;


    data.chapterTests[
        key
    ] = {

        score:
            test.score,

        total,

        percentage,

        date:
            new Date().toISOString()

    };


    if (
        percentage >= 60
    ) {

        const lessons =
            getChapterLessons(
                test.subject,
                test.chapter
            );

        const chapterIndex =
            getCurriculumChapters(
                test.subject
            ).indexOf(
                test.chapter
            );


        if (
            !Array.isArray(
                data.lessonProgress[
                    test.subject
                ]
            )
        ) {

            data.lessonProgress[
                test.subject
            ] = [];

        }


        lessons.forEach(
            (
                _lesson,
                index
            ) => {

                const id =
                    `${test.subject}-${chapterIndex}-${index}`;

                if (
                    !data.lessonProgress[
                        test.subject
                    ].includes(
                        id
                    )
                ) {

                    data.lessonProgress[
                        test.subject
                    ].push(
                        id
                    );

                }

            }
        );


        data.progress[
            normalizeProgressSubject(
                test.subject
            )
        ] =
            calculateLessonProgress(
                test.subject
            );

    }


    saveData();


    const nextChapter =
        getNextCurriculumChapter();


    const area =
        document.getElementById(
            "currentLessonArea"
        );


    if (area) {

        area.innerHTML = `

            <div class="result-card">

                <div class="result-icon">

                    ${
                        percentage >= 60
                            ? "🎉"
                            : "📖"
                    }

                </div>

                <h2>
                    Chapter Test Complete
                </h2>

                <p>
                    ${escapeHTML(
                        test.chapter
                    )}
                </p>

                <div class="result-score">

                    <strong>
                        ${test.score}/${total}
                    </strong>

                    <span>
                        ${percentage}%
                    </span>

                </div>


                <p>

                    ${
                        percentage >= 60
                            ? "Great job! Chapter complete."
                            : "Revise the chapter and try the test again."
                    }

                </p>


                <div class="lesson-actions">

                    <button
                        id="backToStudy"
                        class="btn btn-secondary"
                        type="button">

                        ← Back to Study

                    </button>


                    ${
                        percentage >= 60 &&
                        nextChapter

                            ? `

                                <button
                                    id="nextChapterAfterTest"
                                    class="btn btn-primary"
                                    type="button">

                                    Next Chapter →

                                </button>

                            `

                            : ""

                    }

                </div>

            </div>

        `;


        const nextButton =
            document.getElementById(
                "nextChapterAfterTest"
            );


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                () => {

                    studyState.chapter =
                        nextChapter;

                    studyState.lessonIndex =
                        0;

                    activeChapterTest =
                        null;

                    saveStudyState();

                    renderStudy();

                    setTimeout(
                        scrollToCurrentLesson,
                        100
                    );

                }
            );

        }


        const backButton =
            document.getElementById(
                "backToStudy"
            );


        if (backButton) {

            backButton.addEventListener(
                "click",
                () => {

                    activeChapterTest =
                        null;

                    renderStudy();

                }
            );

        }

    }

}


/* ============================================================
   NEXT CHAPTER
   ============================================================ */

function getNextCurriculumChapter() {

    const chapters =
        getCurriculumChapters(
            studyState.subject
        );


    const index =
        chapters.indexOf(
            studyState.chapter
        );


    if (
        index < 0 ||
        index >=
        chapters.length - 1
    ) {

        return null;

    }


    return chapters[
        index + 1
    ];

}


/* ============================================================
   AI STUDY GENERATOR
   ============================================================ */

async function generateCurrentAIStudy() {

    const area =
        document.getElementById(
            "currentLessonArea"
        );

    if (!area) return;


    area.innerHTML = `

        <div class="loading-state">

            <div class="spinner"></div>

            <h3>
                🤖 BharatBuddy AI is preparing your lesson...
            </h3>

            <p>
                Please wait.
            </p>

        </div>

    `;


    try {

        const prompt = `

You are BharatBuddy AI, an Indian school education tutor.

Create a complete study lesson for:

Board: ${studyState.board}
Class: ${studyState.className}
Stream: ${studyState.stream}
Subject: ${studyState.subject}
Chapter: ${studyState.chapter}

Return clear student-friendly study material with:

1. Chapter overview
2. Important concepts
3. Definitions
4. Detailed explanation
5. Examples
6. Important formulas if applicable
7. Common mistakes
8. Exam-focused points
9. Quick revision

Do not invent textbook page numbers.
Use simple language.
Keep the content educational and accurate.

        `;


        const answer =
            await askAI(
                prompt
            );


        area.innerHTML = `

            <div class="ai-study-result">

                <div class="lesson-header">

                    <div>

                        <span class="lesson-label">
                            AI Generated Study
                        </span>

                        <h2>
                            ${escapeHTML(
                                studyState.chapter
                            )}
                        </h2>

                    </div>

                </div>

                <div class="lesson-content">

                    ${formatAIText(
                        answer
                    )}

                </div>

                <div class="lesson-actions">

                    <button
                        id="backGeneratedStudy"
                        class="btn btn-secondary"
                        type="button">

                        ← Back to Lesson

                    </button>

                </div>

            </div>

        `;


        const back =
            document.getElementById(
                "backGeneratedStudy"
            );

        if (back) {

            back.addEventListener(
                "click",
                renderCurrentLesson
            );

        }


    } catch (error) {

        area.innerHTML = `

            <div class="empty-state">

                <h3>
                    ⚠️ AI Study unavailable
                </h3>

                <p>
                    ${escapeHTML(
                        error.message
                    )}
                </p>

                <button
                    id="retryAIStudy"
                    class="btn btn-primary"
                    type="button">

                    Try Again

                </button>

            </div>

        `;


        const retry =
            document.getElementById(
                "retryAIStudy"
            );

        if (retry) {

            retry.addEventListener(
                "click",
                generateCurrentAIStudy
            );

        }

    }

}


/* ============================================================
   PRACTICE
   ============================================================ */

function renderPractice() {

    pageContent.innerHTML = `

        <section class="page-header">

            <h1>
                🧠 Practice
            </h1>

            <p>
                Generate AI-powered quizzes and test yourself.
            </p>

        </section>


        <section class="card">

            <div class="study-select-grid">

                <label>

                    <span>
                        Subject
                    </span>

                    <select id="quizSubject">

                        ${Object.keys(
                            lessonData
                        )
                            .map(
                                subject => `

                                    <option value="${escapeHTML(
                                        subject
                                    )}">

                                        ${escapeHTML(
                                            subject
                                        )}

                                    </option>

                                `
                            )
                            .join("")}

                    </select>

                </label>


                <label>

                    <span>
                        Difficulty
                    </span>

                    <select id="quizDifficulty">

                        <option value="easy">
                            Easy
                        </option>

                        <option value="medium" selected>
                            Medium
                        </option>

                        <option value="hard">
                            Hard
                        </option>

                    </select>

                </label>

            </div>


            <button
                id="generateQuizBtn"
                class="btn btn-primary"
                type="button">

                🤖 Generate AI Quiz

            </button>

        </section>


        <section
            id="quizArea"
            class="card">

            <div class="empty-state">

                <div>
                    📝
                </div>

                <h3>
                    Ready for a challenge?
                </h3>

                <p>
                    Generate a quiz to begin.
                </p>

            </div>

        </section>


        <section class="card">

            <div class="section-heading">

                <h2>
                    📜 Quiz History
                </h2>

            </div>

            <div id="quizHistory">

            </div>

        </section>

    `;


    const generate =
        document.getElementById(
            "generateQuizBtn"
        );

    if (generate) {

        generate.addEventListener(
            "click",
            generateQuiz
        );

    }


    renderQuizHistory();

}


async function generateQuiz() {

    const subject =
        document.getElementById(
            "quizSubject"
        )?.value ||
        "Physics";

    const difficulty =
        document.getElementById(
            "quizDifficulty"
        )?.value ||
        "medium";


    const area =
        document.getElementById(
            "quizArea"
        );

    if (!area) return;


    area.innerHTML = `

        <div class="loading-state">

            <div class="spinner"></div>

            <h3>
                🤖 Creating your quiz...
            </h3>

        </div>

    `;


    try {

        const prompt = `

Create exactly 5 multiple-choice questions for a school student.

Subject: ${subject}
Difficulty: ${difficulty}

Return ONLY valid JSON in this format:

[
  {
    "question": "Question",
    "options": ["A","B","C","D"],
    "answer": 0
  }
]

Rules:
- exactly 5 questions
- exactly 4 options each
- answer must be 0, 1, 2 or 3
- no markdown
- no explanation outside JSON

        `;


        const answer =
            await askAI(
                prompt
            );


        const questions =
            parseQuizJSON(
                answer
            );


        validateQuiz(
            questions
        );


        startQuiz(
            questions,
            subject,
            difficulty
        );


    } catch (error) {

        area.innerHTML = `

            <div class="empty-state">

                <h3>
                    ⚠️ Quiz generation failed
                </h3>

                <p>
                    ${escapeHTML(
                        error.message
                    )}
                </p>

            </div>

        `;

    }

}


function parseQuizJSON(
    text
) {

    let clean =
        String(
            text || ""
        ).trim();


    clean =
        clean.replace(
            /^```json/i,
            ""
        )
        .replace(
            /^```/i,
            ""
        )
        .replace(
            /```$/i,
            ""
        )
        .trim();


    const first =
        clean.indexOf(
            "["
        );

    const last =
        clean.lastIndexOf(
            "]"
        );


    if (
        first >= 0 &&
        last > first
    ) {

        clean =
            clean.slice(
                first,
                last + 1
            );

    }


    return JSON.parse(
        clean
    );

}


function validateQuiz(
    questions
) {

    if (
        !Array.isArray(
            questions
        ) ||
        questions.length !== 5
    ) {

        throw new Error(
            "AI quiz format invalid."
        );

    }


    questions.forEach(
        question => {

            if (
                !question ||
                typeof question.question !==
                "string" ||
                !Array.isArray(
                    question.options
                ) ||
                question.options.length !==
                4 ||
                !Number.isInteger(
                    question.answer
                ) ||
                question.answer < 0 ||
                question.answer > 3
            ) {

                throw new Error(
                    "AI quiz question format invalid."
                );

            }

        }
    );

}


function startQuiz(
    questions,
    subject,
    difficulty
) {

    activeQuiz = {

        questions,

        subject,

        difficulty,

        current: 0,

        score: 0,

        answers: [],

        remaining:
            QUIZ_TIME

    };


    renderQuizQuestion();

    startQuizTimer();

}


function startQuizTimer() {

    clearInterval(
        quizTimer
    );


    quizTimer =
        setInterval(
            () => {

                if (!activeQuiz) {

                    clearInterval(
                        quizTimer
                    );

                    return;

                }


                activeQuiz.remaining--;


                const timer =
                    document.getElementById(
                        "quizTimer"
                    );

                if (timer) {

                    timer.textContent =
                        formatQuizTime(
                            activeQuiz.remaining
                        );

                }


                if (
                    activeQuiz.remaining <=
                    0
                ) {

                    clearInterval(
                        quizTimer
                    );

                    finishQuiz();

                }

            },
            1000
        );

}


function formatQuizTime(
    seconds
) {

    const mins =
        Math.floor(
            seconds / 60
        );

    const secs =
        seconds % 60;

    return `${String(
        mins
    ).padStart(
        2,
        "0"
    )}:${String(
        secs
    ).padStart(
        2,
        "0"
    )}`;

}


function renderQuizQuestion() {

    const area =
        document.getElementById(
            "quizArea"
        );


    if (
        !area ||
        !activeQuiz
    ) {

        return;

    }


    if (
        activeQuiz.current >=
        activeQuiz.questions.length
    ) {

        finishQuiz();

        return;

    }


    const question =
        activeQuiz.questions[
            activeQuiz.current
        ];


    area.innerHTML = `

        <div class="quiz-top">

            <div>

                <span>
                    Question
                    ${activeQuiz.current + 1}
                    /
                    ${activeQuiz.questions.length}
                </span>

                <h2>
                    ${escapeHTML(
                        question.question
                    )}
                </h2>

            </div>

            <strong id="quizTimer">
                ${formatQuizTime(
                    activeQuiz.remaining
                )}
            </strong>

        </div>


        <div class="quiz-options">

            ${question.options
                .map(
                    (
                        option,
                        index
                    ) => `

                        <button
                            type="button"
                            class="quiz-option"
                            data-quiz-answer="${index}">

                            <span>
                                ${
                                    String.fromCharCode(
                                        65 +
                                        index
                                    )
                                }
                            </span>

                            ${escapeHTML(
                                option
                            )}

                        </button>

                    `
                )
                .join("")}

        </div>

    `;


    document
        .querySelectorAll(
            "[data-quiz-answer]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        handleQuizAnswer(
                            Number(
                                button.dataset.quizAnswer
                            )
                        );

                    }
                );

            }
        );

}


function handleQuizAnswer(
    selected
) {

    if (
        !activeQuiz
    ) {

        return;

    }


    const question =
        activeQuiz.questions[
            activeQuiz.current
        ];


    const correct =
        selected ===
        question.answer;


    if (correct) {

        activeQuiz.score++;

    }


    activeQuiz.answers.push({

        question:
            question.question,

        selected,

        correct:
            question.answer

    });


    activeQuiz.current++;

    renderQuizQuestion();

}


function finishQuiz() {

    if (
        !activeQuiz
    ) {

        return;

    }


    clearInterval(
        quizTimer
    );


    const quiz =
        activeQuiz;


    const total =
        quiz.questions.length;


    const percentage =
        Math.round(
            (
                quiz.score /
                total
            ) * 100
        );


    data.quizHistory.unshift({

        subject:
            quiz.subject,

        difficulty:
            quiz.difficulty,

        score:
            quiz.score,

        total,

        percentage,

        date:
            new Date().toISOString()

    });


    data.quizHistory =
        data.quizHistory.slice(
            0,
            50
        );


    data.stats.quizzes =
        Number(
            data.stats.quizzes || 0
        ) + 1;


    data.dailyGoal =
        Math.min(
            data.dailyGoalTarget || 5,
            Number(
                data.dailyGoal || 0
            ) + 1
        );


    saveData();


    const area =
        document.getElementById(
            "quizArea"
        );


    if (area) {

        area.innerHTML = `

            <div class="result-card">

                <div class="result-icon">
                    ${
                        percentage >= 80
                            ? "🏆"
                            : percentage >= 60
                                ? "🎉"
                                : "📚"
                    }
                </div>

                <h2>
                    Quiz Complete
                </h2>

                <div class="result-score">

                    <strong>
                        ${quiz.score}/${total}
                    </strong>

                    <span>
                        ${percentage}%
                    </span>

                </div>

                <p>
                    ${
                        percentage >= 80
                            ? "Excellent work!"
                            : percentage >= 60
                                ? "Good job! Keep practising."
                                : "Revise the topic and try again."
                    }
                </p>

                <button
                    id="newQuizBtn"
                    class="btn btn-primary"
                    type="button">

                    🔄 New Quiz

                </button>

            </div>

        `;


        const newQuiz =
            document.getElementById(
                "newQuizBtn"
            );

        if (newQuiz) {

            newQuiz.addEventListener(
                "click",
                generateQuiz
            );

        }

    }


    activeQuiz =
        null;

    renderQuizHistory();

}


function renderQuizHistory() {

    const box =
        document.getElementById(
            "quizHistory"
        );


    if (!box) return;


    if (
        !data.quizHistory.length
    ) {

        box.innerHTML = `

            <div class="empty-state">

                <p>
                    No quiz attempts yet.
                </p>

            </div>

        `;

        return;

    }


    box.innerHTML =
        data.quizHistory
            .map(
                quiz => `

                    <div class="history-item">

                        <div>

                            <strong>
                                ${escapeHTML(
                                    quiz.subject
                                )}
                            </strong>

                            <small>
                                ${escapeHTML(
                                    quiz.difficulty
                                )}
                            </small>

                        </div>

                        <div>

                            <strong>
                                ${quiz.score}/${quiz.total}
                            </strong>

                            <small>
                                ${quiz.percentage}%
                            </small>

                        </div>

                    </div>

                `
            )
            .join("");

}


/* ============================================================
   END PART 1
   ============================================================ */
   function evaluateTextAnswer(
    userAnswer,
    expectedAnswer
) {

    const userWords =
        String(userAnswer)
            .toLowerCase()
            .split(/\W+/)
            .filter(word => word.length > 3);

    const expectedWords =
        String(expectedAnswer)
            .toLowerCase()
            .split(/\W+/)
            .filter(word => word.length > 3);

    if (
        !userWords.length ||
        !expectedWords.length
    ) {
        return 0;
    }

    let matches = 0;

    userWords.forEach(word => {

        if (
            expectedWords.includes(word)
        ) {
            matches++;
        }

    });

    const ratio =
        matches /
        Math.min(
            userWords.length,
            expectedWords.length
        );

    return ratio >= 0.25 ? 1 : 0;

}


/* ============================================================
   FINISH CHAPTER TEST
   ============================================================ */

function finishChapterTest() {

    const test =
        activeChapterTest;

    if (!test) {
        return;
    }

    test.finished = true;

    const total =
        test.questions.length;

    const percentage =
        total > 0
            ? Math.round(
                (test.score / total) * 100
            )
            : 0;


    /*
     * Save chapter test result
     */

    if (!Array.isArray(
        data.chapterTests
    )) {

        data.chapterTests = [];

    }


    data.chapterTests.push({

        board:
            studyState.board,

        className:
            studyState.className,

        stream:
            studyState.stream,

        subject:
            test.subject,

        chapter:
            test.chapter,

        score:
            test.score,

        total,

        percentage,

        date:
            new Date().toISOString()

    });


    /*
     * Keep history manageable
     */

    data.chapterTests =
        data.chapterTests.slice(-100);


    /*
     * If student gets 60% or more,
     * complete the chapter lessons.
     */

    if (percentage >= 60) {

        const lessons =
            getChapterLessons(
                test.subject,
                test.chapter
            );


        const chapterIndex =
            getCurriculumChapters(
                test.subject
            ).indexOf(
                test.chapter
            );


        if (!Array.isArray(
            data.lessonProgress[
                test.subject
            ]
        )) {

            data.lessonProgress[
                test.subject
            ] = [];

        }


        lessons.forEach(
            (lesson, index) => {

                const lessonId =
                    `${studyState.board}-${studyState.className}-${studyState.stream}-${test.subject}-${chapterIndex}-${index}`;


                if (
                    !data.lessonProgress[
                        test.subject
                    ].includes(
                        lessonId
                    )
                ) {

                    data.lessonProgress[
                        test.subject
                    ].push(
                        lessonId
                    );

                }

            }
        );


        data.progress[
            normalizeProgressSubject(
                test.subject
            )
        ] =
            calculateLessonProgress(
                test.subject
            );

    }


    saveData();


    /*
     * Render result
     */

    const area =
        document.getElementById(
            "currentLessonArea"
        );


    if (!area) {

        activeChapterTest = null;

        return;

    }


    const nextChapter =
        getNextCurriculumChapter();


    const hasNextChapter =
        Boolean(nextChapter);


    area.innerHTML = `

        <div class="card chapter-result-card">

            <div
                style="
                    text-align:center;
                    padding:20px;
                ">

                <div
                    style="
                        font-size:52px;
                        margin-bottom:10px;
                    ">

                    ${
                        percentage >= 60
                            ? "🎉"
                            : "📖"
                    }

                </div>


                <h2>
                    Chapter Test Complete
                </h2>


                <p
                    style="
                        font-size:18px;
                        margin:12px 0;
                    ">

                    ${escapeHTML(
                        test.chapter
                    )}

                </p>


                <div
                    style="
                        font-size:32px;
                        font-weight:700;
                        margin:18px 0;
                    ">

                    ${test.score}
                    /
                    ${total}

                </div>


                <p>

                    Score:
                    <strong>
                        ${percentage}%
                    </strong>

                </p>


                ${
                    percentage >= 60

                        ? `
                            <div
                                class="success-message"
                                style="
                                    margin-top:16px;
                                ">

                                ✅ Chapter completed!
                                Great work.

                            </div>
                        `

                        : `
                            <div
                                class="warning-message"
                                style="
                                    margin-top:16px;
                                ">

                                📚 Score 60% se kam hai.
                                Chapter ko revise karke
                                dobara test do.

                            </div>
                        `
                }


                <div
                    style="
                        display:flex;
                        gap:10px;
                        justify-content:center;
                        flex-wrap:wrap;
                        margin-top:22px;
                    ">


                    ${
                        percentage >= 60 &&
                        hasNextChapter

                            ? `
                                <button
                                    class="btn btn-primary"
                                    id="nextChapterAfterTest"
                                    type="button">

                                    Next Chapter →

                                </button>
                            `

                            : ""
                    }


                    ${
                        percentage < 60

                            ? `
                                <button
                                    class="btn btn-primary"
                                    id="retryChapterTest"
                                    type="button">

                                    🔄 Retry Test

                                </button>
                            `

                            : ""
                    }


                    <button
                        class="btn btn-secondary"
                        id="backToStudy"
                        type="button">

                        ← Back to Study

                    </button>

                </div>

            </div>

        </div>

    `;


    /*
     * Next chapter
     */

    const nextButton =
        document.getElementById(
            "nextChapterAfterTest"
        );


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                studyState.chapter =
                    nextChapter;

                studyState.lessonIndex =
                    0;

                activeChapterTest =
                    null;

                renderStudy();

                setTimeout(
                    scrollToCurrentLesson,
                    100
                );

            }
        );

    }


    /*
     * Retry test
     */

    const retryButton =
        document.getElementById(
            "retryChapterTest"
        );


    if (retryButton) {

        retryButton.addEventListener(
            "click",
            () => {

                activeChapterTest =
                    null;

                startChapterTest();

            }
        );

    }


    /*
     * Back to study
     */

    const backButton =
        document.getElementById(
            "backToStudy"
        );


    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                activeChapterTest =
                    null;

                renderStudy();

            }
        );

    }


    /*
     * Update general statistics
     */

    updateStats(
        "chapterTests"
    );

    saveData();

}


/* ============================================================
   COMPLETE CURRENT LESSON
   ============================================================ */

function completeCurrentLesson() {

    const subject =
        studyState.subject;

    const chapter =
        studyState.chapter;

    const lessons =
        getChapterLessons(
            subject,
            chapter
        );


    if (!lessons.length) {

        showToast(
            "Is chapter me koi lesson nahi mila."
        );

        return;

    }


    const lessonIndex =
        Math.max(
            0,
            Math.min(
                studyState.lessonIndex,
                lessons.length - 1
            )
        );


    const chapterIndex =
        getCurriculumChapters(
            subject
        ).indexOf(
            chapter
        );


    const lessonId =
        `${studyState.board}-${studyState.className}-${studyState.stream}-${subject}-${chapterIndex}-${lessonIndex}`;


    if (!Array.isArray(
        data.lessonProgress[subject]
    )) {

        data.lessonProgress[subject] =
            [];

    }


    /*
     * Mark current lesson complete
     */

    if (
        !data.lessonProgress[
            subject
        ].includes(
            lessonId
        )
    ) {

        data.lessonProgress[
            subject
        ].push(
            lessonId
        );

        updateStats(
            "lessons"
        );

        showToast(
            "✅ Lesson complete!"
        );

    } else {

        showToast(
            "Ye lesson already complete hai."
        );

    }


    /*
     * Update subject progress
     */

    data.progress[
        normalizeProgressSubject(
            subject
        )
    ] =
        calculateLessonProgress(
            subject
        );


    saveData();


    /*
     * More lessons available
     */

    if (
        lessonIndex <
        lessons.length - 1
    ) {

        studyState.lessonIndex =
            lessonIndex + 1;

        renderStudy();

        setTimeout(
            scrollToCurrentLesson,
            100
        );

        return;

    }


    /*
     * Last lesson of chapter
     */

    showToast(
        "🎯 Chapter lessons complete! Ab Chapter Test do."
    );


    setTimeout(
        () => {

            startChapterTest();

        },
        300
    );

}


/* ============================================================
   CURRENT LESSON RENDER
   ============================================================ */

function renderCurrentLesson() {

    const area =
        document.getElementById(
            "currentLessonArea"
        );


    if (!area) {
        return;
    }


    /*
     * If chapter test is active,
     * don't replace its UI.
     */

    if (activeChapterTest) {

        renderChapterTest();

        return;

    }


    const subject =
        studyState.subject;

    const chapter =
        studyState.chapter;


    if (!subject || !chapter) {

        area.innerHTML = `

            <div class="card">

                <h3>
                    📚 Select a chapter
                </h3>

                <p>
                    Subject aur chapter select
                    karke learning start karo.
                </p>

            </div>

        `;

        return;

    }


    const lessons =
        getChapterLessons(
            subject,
            chapter
        );


    if (!lessons.length) {

        area.innerHTML = `

            <div class="card">

                <h3>
                    Lesson unavailable
                </h3>

                <p>
                    Is chapter ka lesson
                    abhi available nahi hai.
                </p>

            </div>

        `;

        return;

    }


    const index =
        Math.max(
            0,
            Math.min(
                studyState.lessonIndex,
                lessons.length - 1
            )
        );


    studyState.lessonIndex =
        index;


    const lesson =
        lessons[index];


    const chapterIndex =
        getCurriculumChapters(
            subject
        ).indexOf(
            chapter
        );


    const lessonId =
        `${studyState.board}-${studyState.className}-${studyState.stream}-${subject}-${chapterIndex}-${index}`;


    const completed =
        Array.isArray(
            data.lessonProgress[
                subject
            ]
        )
            ? data.lessonProgress[
                subject
            ].includes(
                lessonId
            )
            : false;


    const progress =
        lessons.length
            ? Math.round(
                (
                    lessons.filter(
                        (_, lessonNo) =>
                            Array.isArray(
                                data.lessonProgress[
                                    subject
                                ]
                            ) &&
                            data.lessonProgress[
                                subject
                            ].includes(
                                `${studyState.board}-${studyState.className}-${studyState.stream}-${subject}-${chapterIndex}-${lessonNo}`
                            )
                    ).length /
                    lessons.length
                ) * 100
            )
            : 0;


    area.innerHTML = `

        <div class="lesson-card">

            <div
                class="lesson-header">

                <div>

                    <span
                        class="lesson-label">

                        Lesson
                        ${index + 1}
                        /
                        ${lessons.length}

                    </span>


                    <h2>
                        ${escapeHTML(
                            lesson.title ||
                            `Lesson ${index + 1}`
                        )}
                    </h2>

                </div>


                <div
                    class="lesson-status">

                    ${
                        completed
                            ? "✅ Completed"
                            : `${progress}% complete`
                    }

                </div>

            </div>


            <div
                class="lesson-progress">

                <div
                    class="progress">

                    <div
                        class="progress-bar"
                        style="
                            width:${progress}%;
                        ">
                    </div>

                </div>

            </div>


            <div
                class="lesson-content">

                ${formatAIText(
                    lesson.content ||
                    "Lesson content available soon."
                )}

            </div>


            ${
                lesson.example

                    ? `
                        <div
                            class="lesson-example">

                            <h3>
                                💡 Example
                            </h3>

                            <div>

                                ${formatAIText(
                                    lesson.example
                                )}

                            </div>

                        </div>
                    `

                    : ""
            }


            <div
                class="lesson-actions">

                <button
                    class="btn btn-secondary"
                    id="previousLesson"
                    type="button"
                    ${
                        index === 0
                            ? "disabled"
                            : ""
                    }>

                    ← Previous

                </button>


                <button
                    class="btn btn-primary"
                    id="completeLessonBtn"
                    type="button">

                    ${
                        completed
                            ? "✓ Completed"
                            : "Mark Lesson Complete"
                    }

                </button>


                <button
                    class="btn btn-secondary"
                    id="nextLesson"
                    type="button"
                    ${
                        index >=
                        lessons.length - 1
                            ? "disabled"
                            : ""
                    }>

                    Next →

                </button>

            </div>


            <div
                class="lesson-footer">

                <span>
                    Chapter:
                    ${escapeHTML(
                        chapter
                    )}
                </span>

                <button
                    class="btn btn-outline"
                    id="chapterTestBtn"
                    type="button">

                    📝 Chapter Test

                </button>

            </div>

        </div>

    `;


    const completeButton =
        document.getElementById(
            "completeLessonBtn"
        );


    if (completeButton) {

        completeButton.addEventListener(
            "click",
            () => {

                completeCurrentLesson();

            }
        );

    }


    const previousButton =
        document.getElementById(
            "previousLesson"
        );


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            () => {

                if (
                    studyState.lessonIndex >
                    0
                ) {

                    studyState.lessonIndex--;

                    renderCurrentLesson();

                    scrollToCurrentLesson();

                }

            }
        );

    }


    const nextButton =
        document.getElementById(
            "nextLesson"
        );


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                if (
                    studyState.lessonIndex <
                    lessons.length - 1
                ) {

                    studyState.lessonIndex++;

                    renderCurrentLesson();

                    scrollToCurrentLesson();

                }

            }
        );

    }


    const testButton =
        document.getElementById(
            "chapterTestBtn"
        );


    if (testButton) {

        testButton.addEventListener(
            "click",
            () => {

                startChapterTest();

            }
        );

    }

}


/* ============================================================
   AI PRACTICE / QUIZ
   ============================================================ */

function renderPractice() {

    const content =
        document.getElementById(
            "pageContent"
        );


    if (!content) {
        return;
    }


    const history =
        Array.isArray(
            data.quizHistory
        )
            ? data.quizHistory
            : [];


    content.innerHTML = `

        <section class="page-section">

            <div class="section-header">

                <div>

                    <span
                        class="eyebrow">

                        PRACTICE

                    </span>

                    <h1>
                        AI Quiz
                    </h1>

                    <p>
                        Apne level ke questions
                        generate karke practice karo.
                    </p>

                </div>

            </div>


            <div class="card quiz-generator">

                <div
                    class="form-grid">

                    <div
                        class="form-group">

                        <label>
                            Subject
                        </label>

                        <select
                            id="quizSubject"
                            class="form-select">

                            ${getCurriculumSubjects()
                                .map(
                                    subject => `

                                        <option
                                            value="${escapeHTML(
                                                subject
                                            )}"
                                            ${
                                                subject ===
                                                studyState.subject
                                                    ? "selected"
                                                    : ""
                                            }>

                                            ${escapeHTML(
                                                subject
                                            )}

                                        </option>

                                    `
                                )
                                .join("")}

                        </select>

                    </div>


                    <div
                        class="form-group">

                        <label>
                            Difficulty
                        </label>

                        <select
                            id="quizDifficulty"
                            class="form-select">

                            <option value="easy">
                                Easy
                            </option>

                            <option
                                value="medium"
                                selected>

                                Medium

                            </option>

                            <option value="hard">
                                Hard
                            </option>

                        </select>

                    </div>

                </div>


                <button
                    class="btn btn-primary"
                    id="generateQuizBtn"
                    type="button">

                    🤖 Generate AI Quiz

                </button>


                <div
                    id="quizArea"
                    style="margin-top:20px;">

                    ${
                        activeQuiz
                            ? ""
                            : `
                                <div
                                    class="empty-state">

                                    <div
                                        class="empty-icon">

                                        📝

                                    </div>

                                    <h3>
                                        Ready to Practice?
                                    </h3>

                                    <p>
                                        Generate a 5-question
                                        AI quiz.
                                    </p>

                                </div>
                            `
                    }

                </div>

            </div>


            <div class="card">

                <div class="card-header">

                    <div>

                        <h3>
                            📚 Quiz History
                        </h3>

                        <p>
                            Tumhare previous quiz results.
                        </p>

                    </div>


                    ${
                        history.length
                            ? `
                                <button
                                    class="btn btn-secondary"
                                    id="clearQuizHistoryBtn"
                                    type="button">

                                    Clear History

                                </button>
                            `
                            : ""
                    }

                </div>


                <div
                    id="quizHistoryList">

                    ${renderQuizHistoryHTML(
                        history
                    )}

                </div>

            </div>

        </section>

    `;


    attachQuizEvents();


    if (activeQuiz) {

        renderQuizQuestion();

    }

}


/* ============================================================
   QUIZ EVENTS
   ============================================================ */

function attachQuizEvents() {

    const generateButton =
        document.getElementById(
            "generateQuizBtn"
        );


    if (generateButton) {

        generateButton.addEventListener(
            "click",
            generateQuiz
        );

    }


    const clearButton =
        document.getElementById(
            "clearQuizHistoryBtn"
        );


    if (clearButton) {

        clearButton.addEventListener(
            "click",
            clearQuizHistory
        );

    }

}


async function generateQuiz() {

    const subject =
        document.getElementById(
            "quizSubject"
        )?.value ||
        studyState.subject;


    const difficulty =
        document.getElementById(
            "quizDifficulty"
        )?.value ||
        "medium";


    const button =
        document.getElementById(
            "generateQuizBtn"
        );


    if (button) {

        button.disabled = true;

        button.textContent =
            "Generating...";

    }


    try {

        const prompt = `

Create a school-level multiple choice quiz.

Subject:
${subject}

Class:
${studyState.className}

Board:
${studyState.board}

Stream:
${studyState.stream}

Difficulty:
${difficulty}

Create exactly 5 questions.

Return ONLY valid JSON.

Format:

{
  "questions": [
    {
      "question": "Question",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 0
    }
  ]
}

Rules:

- answer must be 0, 1, 2 or 3
- exactly four options
- no markdown
- no explanation outside JSON
- questions must match the class level

`;


        const response =
            await askAI(
                prompt
            );


        const parsed =
            parseQuizJSON(
                response
            );


        if (
            !validateQuiz(
                parsed
            )
        ) {

            throw new Error(
                "AI ne valid quiz format nahi diya."
            );

        }


        startQuiz(
            parsed.questions,
            subject,
            difficulty
        );


    } catch (error) {

        showToast(
            error.message ||
            "Quiz generate nahi ho saka."
        );


    } finally {

        if (button) {

            button.disabled = false;

            button.textContent =
                "🤖 Generate AI Quiz";

        }

    }

}


function parseQuizJSON(
    text
) {

    let clean =
        String(text)
            .trim();


    clean =
        clean.replace(
            /^```json\s*/i,
            ""
        );


    clean =
        clean.replace(
            /^```\s*/i,
            ""
        );


    clean =
        clean.replace(
            /\s*```$/i,
            ""
        );


    try {

        return JSON.parse(
            clean
        );

    } catch {

        const start =
            clean.indexOf(
                "{"
            );

        const end =
            clean.lastIndexOf(
                "}"
            );


        if (
            start !== -1 &&
            end !== -1 &&
            end > start
        ) {

            return JSON.parse(
                clean.slice(
                    start,
                    end + 1
                )
            );

        }

        throw new Error(
            "Quiz JSON parse nahi hua."
        );

    }

}


function validateQuiz(
    quiz
) {

    if (
        !quiz ||
        !Array.isArray(
            quiz.questions
        )
    ) {

        return false;

    }


    if (
        quiz.questions.length !== 5
    ) {

        return false;

    }


    return quiz.questions.every(
        question => {

            return (
                typeof question.question ===
                    "string" &&

                Array.isArray(
                    question.options
                ) &&

                question.options.length ===
                    4 &&

                question.options.every(
                    option =>
                        typeof option ===
                        "string"
                ) &&

                Number.isInteger(
                    question.answer
                ) &&

                question.answer >= 0 &&
                question.answer <= 3

            );

        }
    );

}


function startQuiz(
    questions,
    subject,
    difficulty
) {

    activeQuiz = {

        questions,

        subject,

        difficulty,

        current: 0,

        score: 0,

        answers: [],

        startedAt:
            Date.now(),

        timeLeft:
            QUIZ_TIME

    };


    renderQuizQuestion();

    startQuizTimer();

}


function startQuizTimer() {

    clearInterval(
        quizTimer
    );


    quizTimer =
        setInterval(
            () => {

                if (
                    !activeQuiz
                ) {

                    clearInterval(
                        quizTimer
                    );

                    return;

                }


                activeQuiz.timeLeft--;


                const timer =
                    document.getElementById(
                        "quizTimer"
                    );


                if (timer) {

                    timer.textContent =
                        formatTime(
                            activeQuiz.timeLeft
                        );

                }


                if (
                    activeQuiz.timeLeft <=
                    0
                ) {

                    clearInterval(
                        quizTimer
                    );

                    finishQuiz();

                }

            },
            1000
        );

}


function formatTime(
    seconds
) {

    const safe =
        Math.max(
            0,
            Number(seconds) || 0
        );


    const minutes =
        Math.floor(
            safe / 60
        );


    const secs =
        safe % 60;


    return `${String(
        minutes
    ).padStart(2, "0")}:${String(
        secs
    ).padStart(2, "0")}`;

}
function updateQuizTimerUI() {

    const timer =
        document.getElementById(
            "quizTimer"
        );

    if (
        !timer ||
        !activeQuiz
    ) {
        return;
    }

    timer.textContent =
        `⏱️ ${formatTime(
            activeQuiz.timeLeft
        )}`;

    timer.style.fontWeight =
        activeQuiz.timeLeft <= 10
            ? "800"
            : "700";
}


/* ============================================================
   RENDER QUIZ QUESTION
   ============================================================ */

function renderQuizQuestion() {

    if (!activeQuiz) {
        return;
    }

    const area =
        document.getElementById(
            "quizArea"
        );

    if (!area) {
        return;
    }

    const questions =
        activeQuiz.questions;

    const current =
        activeQuiz.current;

    if (
        current >=
        questions.length
    ) {

        finishQuiz();

        return;
    }

    const q =
        questions[current];

    const progress =
        (
            (
                current + 1
            ) /
            questions.length
        ) * 100;

    area.innerHTML = `

        <div class="quiz-card">

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:12px;
                    margin-bottom:15px;
                    flex-wrap:wrap;
                ">

                <div class="quiz-progress">

                    Question
                    ${current + 1}
                    /
                    ${questions.length}

                </div>

                <div
                    id="quizTimer"
                    style="
                        font-weight:700;
                        padding:8px 12px;
                        border-radius:10px;
                        background:rgba(37,99,235,.10);
                    ">

                    ⏱️
                    ${formatTime(
                        activeQuiz.timeLeft
                    )}

                </div>

            </div>

            <div class="progress">

                <div
                    class="progress-bar"
                    style="width:${progress}%">
                </div>

            </div>

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    margin:12px 0;
                    font-size:13px;
                    opacity:.75;
                ">

                <span>
                    ${escapeHTML(
                        activeQuiz.subject
                    )}
                </span>

                <span>
                    ${escapeHTML(
                        activeQuiz.difficulty
                    )}
                </span>

            </div>

            <div class="quiz-question">

                ${escapeHTML(
                    q.question
                )}

            </div>

            <div class="quiz-options">

                ${q.options
                    .map(
                        (
                            option,
                            index
                        ) => `

                            <button
                                class="quiz-option"
                                data-index="${index}"
                                type="button">

                                ${escapeHTML(
                                    option
                                )}

                            </button>

                        `
                    )
                    .join("")}

            </div>

            <div
                id="quizExplanation"
                style="margin-top:16px;">

            </div>

        </div>

    `;

    document
        .querySelectorAll(
            ".quiz-option"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        handleQuizAnswer(
                            Number(
                                button.dataset.index
                            )
                        );

                    }
                );

            }
        );

    updateQuizTimerUI();

}


/* ============================================================
   HANDLE QUIZ ANSWER
   ============================================================ */

function handleQuizAnswer(
    selected
) {

    if (
        !activeQuiz ||
        activeQuiz.finished
    ) {
        return;
    }

    const current =
        activeQuiz.current;

    const q =
        activeQuiz.questions[
            current
        ];

    if (!q) {
        return;
    }

    if (
        activeQuiz.selectedAnswers[
            current
        ] !== undefined
    ) {
        return;
    }

    const correct =
        Number(
            q.answer
        );

    activeQuiz.selectedAnswers[
        current
    ] =
        selected;

    activeQuiz.answered++;

    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );

    buttons.forEach(
        button => {

            button.disabled =
                true;

            const index =
                Number(
                    button.dataset.index
                );

            if (
                index ===
                correct
            ) {

                button.classList.add(
                    "correct"
                );

            }

            if (
                index === selected &&
                index !== correct
            ) {

                button.classList.add(
                    "wrong"
                );

            }

        }
    );

    const isCorrect =
        selected ===
        correct;

    if (isCorrect) {

        activeQuiz.score++;

        showToast(
            "✅ Correct answer!"
        );

    } else {

        showToast(
            "❌ Incorrect answer."
        );

    }

    const explanation =
        document.getElementById(
            "quizExplanation"
        );

    if (explanation) {

        explanation.innerHTML = `

            <div
                style="
                    padding:12px;
                    border-radius:10px;
                    background:rgba(
                        37,
                        99,
                        235,
                        .08
                    );
                ">

                ${
                    isCorrect
                        ? "🎯 Excellent! Correct answer."
                        : `Correct answer:
                           <strong>
                               ${escapeHTML(
                                   q.options[
                                       correct
                                   ]
                               )}
                           </strong>`
                }

            </div>

        `;

    }

    setTimeout(
        () => {

            if (!activeQuiz) {
                return;
            }

            activeQuiz.current++;

            renderQuizQuestion();

        },
        800
    );

}


/* ============================================================
   FINISH AI QUIZ
   ============================================================ */

function finishQuiz() {

    if (!activeQuiz) {
        return;
    }

    clearInterval(
        quizTimer
    );

    quizTimer = null;

    activeQuiz.finished =
        true;

    const quiz =
        activeQuiz;

    const total =
        quiz.questions.length;

    const percentage =
        total
            ? Math.round(
                (
                    quiz.score /
                    total
                ) * 100
            )
            : 0;


    if (!Array.isArray(
        data.quizHistory
    )) {

        data.quizHistory = [];

    }


    data.quizHistory.push({

        subject:
            quiz.subject,

        difficulty:
            quiz.difficulty,

        score:
            quiz.score,

        total,

        percentage,

        date:
            new Date().toISOString()

    });


    data.quizHistory =
        data.quizHistory.slice(
            -100
        );


    updateStats(
        "quizzes"
    );


    /*
     * Daily goal
     */

    if (
        data.dailyGoals &&
        typeof data.dailyGoals ===
            "object"
    ) {

        data.dailyGoals.quizzes =
            Number(
                data.dailyGoals.quizzes ||
                0
            ) + 1;

    }


    updateQuizSubjectProgress(
        quiz.subject,
        percentage
    );


    saveData();


    const area =
        document.getElementById(
            "quizArea"
        );


    if (area) {

        area.innerHTML = `

            <div
                class="quiz-result"
                style="
                    text-align:center;
                    padding:25px;
                ">

                <div
                    style="
                        font-size:54px;
                        margin-bottom:10px;
                    ">

                    ${
                        percentage >= 80
                            ? "🏆"
                            : percentage >= 60
                                ? "🎉"
                                : "📚"
                    }

                </div>

                <h2>
                    Quiz Complete!
                </h2>

                <p>

                    ${escapeHTML(
                        quiz.subject
                    )}

                </p>

                <div
                    style="
                        font-size:34px;
                        font-weight:800;
                        margin:18px 0;
                    ">

                    ${quiz.score}
                    /
                    ${total}

                </div>

                <p>

                    Score:
                    <strong>
                        ${percentage}%
                    </strong>

                </p>

                <button
                    class="btn btn-primary"
                    id="newQuizBtn"
                    type="button"
                    style="margin-top:18px;">

                    🔄 New Quiz

                </button>

            </div>

        `;


        const newQuizButton =
            document.getElementById(
                "newQuizBtn"
            );


        if (newQuizButton) {

            newQuizButton.addEventListener(
                "click",
                () => {

                    activeQuiz =
                        null;

                    renderPractice();

                }
            );

        }

    }


    activeQuiz = null;

    updateStats();

}


/* ============================================================
   QUIZ SUBJECT PROGRESS
   ============================================================ */

function updateQuizSubjectProgress(
    subject,
    percentage
) {

    if (!data.quizSubjectProgress) {

        data.quizSubjectProgress =
            {};

    }


    const current =
        Number(
            data.quizSubjectProgress[
                subject
            ] || 0
        );


    data.quizSubjectProgress[
        subject
    ] =
        Math.max(
            current,
            percentage
        );


    /*
     * Also update normal progress
     */

    const normalized =
        normalizeProgressSubject(
            subject
        );


    if (!data.progress) {

        data.progress = {};

    }


    if (
        data.progress[
            normalized
        ] === undefined
    ) {

        data.progress[
            normalized
        ] = 0;

    }

}


/* ============================================================
   QUIZ HISTORY HTML
   ============================================================ */

function renderQuizHistoryHTML(
    history
) {

    if (
        !Array.isArray(history) ||
        !history.length
    ) {

        return `

            <div class="empty-state">

                <div class="empty-icon">
                    📝
                </div>

                <h3>
                    No quiz history yet
                </h3>

                <p>
                    Apna pehla AI quiz generate karo.
                </p>

            </div>

        `;

    }


    return `

        <div class="quiz-history-list">

            ${history
                .slice()
                .reverse()
                .map(
                    item => `

                        <div
                            class="history-item">

                            <div>

                                <strong>
                                    ${escapeHTML(
                                        item.subject ||
                                        "Quiz"
                                    )}
                                </strong>

                                <div
                                    style="
                                        font-size:13px;
                                        opacity:.7;
                                        margin-top:4px;
                                    ">

                                    ${escapeHTML(
                                        item.difficulty ||
                                        "medium"
                                    )}

                                    •
                                    ${formatQuizDate(
                                        item.date
                                    )}

                                </div>

                            </div>


                            <div
                                style="
                                    text-align:right;
                                ">

                                <strong>
                                    ${
                                        Number(
                                            item.score
                                        ) || 0
                                    }/
                                    ${
                                        Number(
                                            item.total
                                        ) || 0
                                    }
                                </strong>

                                <div
                                    style="
                                        font-size:13px;
                                        opacity:.7;
                                    ">

                                    ${
                                        Number(
                                            item.percentage
                                        ) || 0
                                    }%

                                </div>

                            </div>

                        </div>

                    `
                )
                .join("")}

        </div>

    `;

}


/* ============================================================
   QUIZ DATE
   ============================================================ */

function formatQuizDate(
    value
) {

    if (!value) {
        return "Unknown date";
    }

    const date =
        new Date(value);

    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return "Unknown date";

    }

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* ============================================================
   CLEAR QUIZ HISTORY
   ============================================================ */

function clearQuizHistory() {

    if (
        !confirm(
            "Kya tum quiz history clear karna chahte ho?"
        )
    ) {

        return;

    }


    data.quizHistory =
        [];


    saveData();

    showToast(
        "🗑️ Quiz history cleared."
    );


    renderPractice();

}
/* ============================================================
   CODING LAB
   ============================================================ */

function renderCoding() {

    pageContent.innerHTML = `

        <div class="page-header">

            <h1>💻 Coding Lab</h1>

            <p>
                Write HTML, CSS and JavaScript
                and run your project instantly.
            </p>

        </div>

        <div class="code-editor">

            <div class="code-tabs">

                <button
                    class="code-tab active"
                    data-code-tab="html">

                    HTML

                </button>

                <button
                    class="code-tab"
                    data-code-tab="css">

                    CSS

                </button>

                <button
                    class="code-tab"
                    data-code-tab="js">

                    JavaScript

                </button>

            </div>

            <textarea
                id="codeEditor"
                class="code-textarea"
                spellcheck="false"></textarea>

        </div>

        <div class="code-actions">

            <button
                class="btn btn-primary"
                id="runCode">

                ▶ Run

            </button>

            <button
                class="btn btn-secondary"
                id="saveCode">

                💾 Save

            </button>

            <button
                class="btn btn-secondary"
                id="resetCode">

                ↩ Reset

            </button>

        </div>

        <div class="code-output">

            <iframe
                id="codeOutput"
                sandbox="allow-scripts">
            </iframe>

        </div>

    `;

    currentCodeTab = "html";

    loadCodeEditor();

    attachCodingEvents();

}


function loadCodeEditor() {

    const editor =
        document.getElementById(
            "codeEditor"
        );

    if (!editor) {
        return;
    }

    editor.value =
        data.coding[
            currentCodeTab
        ] || "";

}


function attachCodingEvents() {

    document
        .querySelectorAll(
            ".code-tab"
        )
        .forEach(
            tab => {

                tab.addEventListener(
                    "click",
                    () => {

                        const editor =
                            document.getElementById(
                                "codeEditor"
                            );

                        if (editor) {

                            data.coding[
                                currentCodeTab
                            ] =
                                editor.value;

                        }

                        currentCodeTab =
                            tab.dataset.codeTab;

                        document
                            .querySelectorAll(
                                ".code-tab"
                            )
                            .forEach(
                                item => {

                                    item.classList.toggle(
                                        "active",
                                        item === tab
                                    );

                                }
                            );

                        loadCodeEditor();

                    }
                );

            }
        );


    document
        .getElementById(
            "runCode"
        )
        ?.addEventListener(
            "click",
            runCode
        );


    document
        .getElementById(
            "saveCode"
        )
        ?.addEventListener(
            "click",
            saveCode
        );


    document
        .getElementById(
            "resetCode"
        )
        ?.addEventListener(
            "click",
            resetCode
        );


    const editor =
        document.getElementById(
            "codeEditor"
        );

    if (editor) {

        editor.addEventListener(
            "input",
            () => {

                data.coding[
                    currentCodeTab
                ] =
                    editor.value;

            }
        );

    }

}


function runCode() {

    const editor =
        document.getElementById(
            "codeEditor"
        );

    if (!editor) {
        return;
    }

    data.coding[
        currentCodeTab
    ] =
        editor.value;

    saveData();

    const html =
        data.coding.html || "";

    const css =
        data.coding.css || "";

    const js =
        data.coding.js || "";

    const output =
        document.getElementById(
            "codeOutput"
        );

    if (!output) {
        return;
    }

    output.srcdoc = `

        <!DOCTYPE html>

        <html>

        <head>

            <meta charset="UTF-8">

            <style>
                ${css}
            </style>

        </head>

        <body>

            ${html}

            <script>
                ${js}
            <\/script>

        </body>

        </html>

    `;

    updateStats(
        "codingProjects"
    );

    showToast(
        "Code run successfully ▶️"
    );

}


function saveCode() {

    const editor =
        document.getElementById(
            "codeEditor"
        );

    if (!editor) {
        return;
    }

    data.coding[
        currentCodeTab
    ] =
        editor.value;

    saveData();

    showToast(
        "Code saved 💾"
    );

}


function resetCode() {

    if (
        !confirm(
            "Current coding project reset karna hai?"
        )
    ) {
        return;
    }

    data.coding =
        structuredClone(
            defaultData.coding
        );

    saveData();

    currentCodeTab =
        "html";

    renderCoding();

    showToast(
        "Coding project reset ho gaya."
    );

}


/* ============================================================
   CAREER
   ============================================================ */

function renderCareer() {

    pageContent.innerHTML = `

        <div class="page-header">

            <h1>🎯 Career Roadmap</h1>

            <p>
                Tell BharatBuddy what you want
                to become and get an AI roadmap.
            </p>

        </div>

        <div class="card">

            <div class="form-group">

                <label class="form-label">
                    Your Career Goal
                </label>

                <input
                    id="careerGoal"
                    class="form-input"
                    placeholder="Example: Software Developer">

            </div>

            <div class="form-group">

                <label class="form-label">
                    Your Current Level
                </label>

                <select
                    id="careerLevel"
                    class="form-select">

                    <option>
                        Beginner
                    </option>

                    <option>
                        Intermediate
                    </option>

                    <option>
                        Advanced
                    </option>

                </select>

            </div>

            <button
                class="btn btn-primary"
                id="careerGenerate">

                🤖 Generate My Roadmap

            </button>

        </div>

        <div
            id="careerResult"
            style="margin-top:18px;">
        </div>

    `;

    document
        .getElementById(
            "careerGenerate"
        )
        ?.addEventListener(
            "click",
            generateCareerRoadmap
        );

}


async function generateCareerRoadmap() {

    const goalInput =
        document.getElementById(
            "careerGoal"
        );

    const levelInput =
        document.getElementById(
            "careerLevel"
        );

    const result =
        document.getElementById(
            "careerResult"
        );

    const button =
        document.getElementById(
            "careerGenerate"
        );

    if (
        !goalInput ||
        !levelInput ||
        !result ||
        !button
    ) {
        return;
    }

    const goal =
        goalInput.value.trim();

    const level =
        levelInput.value;

    if (!goal) {

        showToast(
            "Please enter your career goal."
        );

        return;

    }

    button.disabled = true;

    button.textContent =
        "Creating roadmap...";

    result.innerHTML = `

        <div class="card">

            🤖 AI is preparing your roadmap...

        </div>

    `;

    try {

        const prompt = `

Create a practical career roadmap for an Indian student.

Career goal: ${goal}

Current level: ${level}

Include:

1. Skills to learn
2. Subjects to focus on
3. Projects to build
4. Free/low-cost learning approach
5. Portfolio advice
6. Internship preparation
7. Interview preparation
8. A realistic step-by-step timeline

Use simple language.

`;

        const answer =
            await askAI(
                prompt
            );

        result.innerHTML = `

            <div class="career-card">

                <h3>
                    🚀 ${escapeHTML(
                        goal
                    )} Roadmap
                </h3>

                <div
                    style="margin-top:12px;">

                    ${formatAIText(
                        answer
                    )}

                </div>

            </div>

        `;

    } catch (error) {

        result.innerHTML = `

            <div class="card">

                ❌ Roadmap generate nahi ho paya.

                <br><br>

                ${escapeHTML(
                    error.message
                )}

            </div>

        `;

    } finally {

        button.disabled = false;

        button.textContent =
            "🤖 Generate My Roadmap";

    }

}


/* ============================================================
   ENGLISH PRACTICE
   ============================================================ */

function renderEnglish() {

    pageContent.innerHTML = `

        <div class="page-header">

            <h1>🗣️ English Practice</h1>

            <p>
                Improve grammar, vocabulary,
                speaking and interview communication.
            </p>

        </div>

        <div class="practice-panel">

            <div class="practice-buttons">

                <button
                    class="practice-btn"
                    data-english="conversation">

                    <strong>
                        💬 Conversation
                    </strong>

                    <small>
                        Practice everyday English.
                    </small>

                </button>

                <button
                    class="practice-btn"
                    data-english="grammar">

                    <strong>
                        📖 Grammar
                    </strong>

                    <small>
                        Improve sentence structure.
                    </small>

                </button>

                <button
                    class="practice-btn"
                    data-english="vocabulary">

                    <strong>
                        📚 Vocabulary
                    </strong>

                    <small>
                        Learn useful new words.
                    </small>

                </button>

                <button
                    class="practice-btn"
                    data-english="interview">

                    <strong>
                        🎤 Interview
                    </strong>

                    <small>
                        Practice interview communication.
                    </small>

                </button>

            </div>

        </div>

        <div
            id="englishResult"
            style="margin-top:18px;">
        </div>

    `;

    document
        .querySelectorAll(
            ".practice-btn"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        startEnglishPractice(
                            button.dataset.english
                        );

                    }
                );

            }
        );

}


async function startEnglishPractice(
    type
) {

    const result =
        document.getElementById(
            "englishResult"
        );

    if (!result) {
        return;
    }

    const prompts = {

        conversation:
            "Create a simple English conversation practice for a school student. Give one question at a time and encourage the student to answer in English.",

        grammar:
            "Create a short English grammar practice exercise for a school student. Give 5 questions and explain the answers simply.",

        vocabulary:
            "Create a useful English vocabulary practice for a school student. Give 10 words with simple meanings, examples and a short quiz.",

        interview:
            "Create a beginner-friendly interview practice for a student. Ask common questions one at a time and give useful feedback."

    };

    const prompt =
        prompts[type] ||
        prompts.conversation;

    result.innerHTML = `

        <div class="card">

            🤖 Preparing English practice...

        </div>

    `;

    try {

        const answer =
            await askAI(
                prompt
            );

        result.innerHTML = `

            <div class="english-result card">

                <div
                    class="ai-response">

                    ${formatAIText(
                        answer
                    )}

                </div>

            </div>

        `;

        updateStats(
            "englishPractice"
        );

        saveData();

    } catch (error) {

        result.innerHTML = `

            <div class="card">

                ❌ Practice load nahi ho payi.

                <br><br>

                ${escapeHTML(
                    error.message
                )}

            </div>

        `;

    }

}


/* ============================================================
   PROGRESS PAGE
   ============================================================ */

function renderProgress() {

    pageContent.innerHTML = `

        <div class="page-header">

            <h1>📊 Your Progress</h1>

            <p>
                Track your learning progress
                across BharatBuddy.
            </p>

        </div>

        <div
            class="stats-grid">

            <div class="stat-card">

                <span class="stat-icon">
                    📚
                </span>

                <strong>
                    ${
                        Number(
                            data.stats.lessons || 0
                        )
                    }
                </strong>

                <span>
                    Lessons
                </span>

            </div>

            <div class="stat-card">

                <span class="stat-icon">
                    📝
                </span>

                <strong>
                    ${
                        Number(
                            data.stats.quizzes || 0
                        )
                    }
                </strong>

                <span>
                    Quizzes
                </span>

            </div>

            <div class="stat-card">

                <span class="stat-icon">
                    ❓
                </span>

                <strong>
                    ${
                        Number(
                            data.stats.questions || 0
                        )
                    }
                </strong>

                <span>
                    AI Questions
                </span>

            </div>

            <div class="stat-card">

                <span class="stat-icon">
                    💻
                </span>

                <strong>
                    ${
                        Number(
                            data.stats.codingProjects || 0
                        )
                    }
                </strong>

                <span>
                    Coding Runs
                </span>

            </div>

        </div>


        <div class="card">

            <div class="card-header">

                <div>

                    <h3>
                        📚 Subject Progress
                    </h3>

                    <p>
                        Your current course completion.
                    </p>

                </div>

            </div>

            <div
                class="subject-progress-list">

                ${getCurriculumSubjects()
                    .map(
                        subject => {

                            const progress =
                                calculateLessonProgress(
                                    subject
                                );

                            return `

                                <div
                                    class="subject-progress-item">

                                    <div
                                        style="
                                            display:flex;
                                            justify-content:space-between;
                                            gap:10px;
                                        ">

                                        <strong>
                                            ${escapeHTML(
                                                subject
                                            )}
                                        </strong>

                                        <span>
                                            ${progress}%
                                        </span>

                                    </div>

                                    <div
                                        class="progress"
                                        style="
                                            margin-top:8px;
                                        ">

                                        <div
                                            class="progress-bar"
                                            style="
                                                width:${progress}%;
                                            ">
                                        </div>

                                    </div>

                                </div>

                            `;

                        }
                    )
                    .join("")}

            </div>

        </div>


        <div class="card">

            <h3>
                🎯 Overall Course Completion
            </h3>

            <div
                style="
                    font-size:32px;
                    font-weight:800;
                    margin:15px 0;
                ">

                ${calculateOverallProgress()}%

            </div>

            <div class="progress">

                <div
                    class="progress-bar"
                    style="
                        width:${calculateOverallProgress()}%;
                    ">
                </div>

            </div>

        </div>

    `;

}


function calculateOverallProgress() {

    const subjects =
        getCurriculumSubjects();

    if (!subjects.length) {
        return 0;
    }

    const values =
        subjects.map(
            subject =>
                calculateLessonProgress(
                    subject
                )
        );

    const total =
        values.reduce(
            (
                sum,
                value
            ) =>
                sum + value,
            0
        );

    return Math.round(
        total /
        values.length
    );

}
/* ============================================================
   ACHIEVEMENTS
   ============================================================ */

function renderAchievements() {

    const stats =
        data.stats || {};

    const lessons =
        Number(
            stats.lessons || 0
        );

    const quizzes =
        Number(
            stats.quizzes || 0
        );

    const questions =
        Number(
            stats.questions || 0
        );

    const codingProjects =
        Number(
            stats.codingProjects || 0
        );

    const englishPractice =
        Number(
            stats.englishPractice || 0
        );

    const streak =
        Number(
            data.streak || 0
        );


    const achievements = [

        {
            icon: "🔥",
            title: "First Streak",
            description:
                "Start your learning streak.",
            unlocked:
                streak >= 1
        },

        {
            icon: "🔥",
            title: "7 Day Streak",
            description:
                "Study for 7 days.",
            unlocked:
                streak >= 7
        },

        {
            icon: "❓",
            title: "AI Explorer",
            description:
                "Ask 10 AI questions.",
            unlocked:
                questions >= 10
        },

        {
            icon: "📝",
            title: "Quiz Starter",
            description:
                "Complete your first quiz.",
            unlocked:
                quizzes >= 1
        },

        {
            icon: "🏆",
            title: "Quiz Master",
            description:
                "Complete 10 quizzes.",
            unlocked:
                quizzes >= 10
        },

        {
            icon: "📚",
            title: "Lesson Starter",
            description:
                "Complete your first lesson.",
            unlocked:
                lessons >= 1
        },

        {
            icon: "📖",
            title: "10 Lessons",
            description:
                "Complete 10 lessons.",
            unlocked:
                lessons >= 10
        },

        {
            icon: "💻",
            title: "Coder",
            description:
                "Run your first coding project.",
            unlocked:
                codingProjects >= 1
        },

        {
            icon: "🗣️",
            title: "English Learner",
            description:
                "Complete English practice.",
            unlocked:
                englishPractice >= 1
        },

        {
            icon: "🚀",
            title: "Learning Machine",
            description:
                "Complete 25 lessons.",
            unlocked:
                lessons >= 25
        }

    ];


    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                🏆 Achievements
            </h1>

            <p>
                Keep learning and unlock
                new achievements.
            </p>

        </div>


        <div
            class="achievement-grid">

            ${achievements
                .map(
                    achievement => `

                        <div
                            class="
                                achievement-card
                                ${
                                    achievement.unlocked
                                        ? "unlocked"
                                        : "locked"
                                }
                            ">

                            <div
                                class="achievement-icon">

                                ${
                                    achievement.unlocked
                                        ? achievement.icon
                                        : "🔒"
                                }

                            </div>

                            <div>

                                <h3>
                                    ${escapeHTML(
                                        achievement.title
                                    )}
                                </h3>

                                <p>
                                    ${escapeHTML(
                                        achievement.description
                                    )}
                                </p>

                            </div>

                        </div>

                    `
                )
                .join("")}

        </div>

    `;

}


/* ============================================================
   PROFILE
   ============================================================ */

function renderProfile() {

    const profile =
        data.profile || {};


    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                👤 Profile
            </h1>

            <p>
                Apni learning profile update karo.
            </p>

        </div>


        <div class="card profile-card">

            <div
                class="profile-avatar-large">

                ${
                    escapeHTML(
                        (
                            profile.name ||
                            "Student"
                        )
                            .charAt(0)
                            .toUpperCase()
                    )
                }

            </div>


            <div
                class="form-grid">

                <div
                    class="form-group">

                    <label
                        class="form-label">

                        Name

                    </label>

                    <input
                        id="profileName"
                        class="form-input"
                        value="${escapeHTML(
                            profile.name ||
                            ""
                        )}"
                        placeholder="Your name">

                </div>


                <div
                    class="form-group">

                    <label
                        class="form-label">

                        Class

                    </label>

                    <select
                        id="profileClass"
                        class="form-select">

                        ${[
                            "Class 9",
                            "Class 10",
                            "Class 11",
                            "Class 12"
                        ]
                            .map(
                                className => `

                                    <option
                                        value="${className}"
                                        ${
                                            profile.className ===
                                            className
                                                ? "selected"
                                                : ""
                                        }>

                                        ${className}

                                    </option>

                                `
                            )
                            .join("")}

                    </select>

                </div>


                <div
                    class="form-group">

                    <label
                        class="form-label">

                        Stream

                    </label>

                    <select
                        id="profileStream"
                        class="form-select">

                        <option
                            value="PCM"
                            ${
                                profile.stream ===
                                "PCM"
                                    ? "selected"
                                    : ""
                            }>

                            Science - PCM

                        </option>

                        <option
                            value="PCB"
                            ${
                                profile.stream ===
                                "PCB"
                                    ? "selected"
                                    : ""
                            }>

                            Science - PCB

                        </option>

                        <option
                            value="Commerce"
                            ${
                                profile.stream ===
                                "Commerce"
                                    ? "selected"
                                    : ""
                            }>

                            Commerce

                        </option>

                        <option
                            value="Arts"
                            ${
                                profile.stream ===
                                "Arts"
                                    ? "selected"
                                    : ""
                            }>

                            Arts

                        </option>

                    </select>

                </div>


                <div
                    class="form-group">

                    <label
                        class="form-label">

                        Career Goal

                    </label>

                    <input
                        id="profileCareer"
                        class="form-input"
                        value="${escapeHTML(
                            profile.careerGoal ||
                            ""
                        )}"
                        placeholder="Example: Software Developer">

                </div>

            </div>


            <button
                class="btn btn-primary"
                id="saveProfileBtn"
                type="button">

                💾 Save Profile

            </button>

        </div>

    `;


    document
        .getElementById(
            "saveProfileBtn"
        )
        ?.addEventListener(
            "click",
            saveProfile
        );

}


function saveProfile() {

    const name =
        document.getElementById(
            "profileName"
        )?.value.trim();


    const className =
        document.getElementById(
            "profileClass"
        )?.value ||
        "Class 11";


    const stream =
        document.getElementById(
            "profileStream"
        )?.value ||
        "PCM";


    const careerGoal =
        document.getElementById(
            "profileCareer"
        )?.value.trim();


    data.profile = {

        ...data.profile,

        name:
            name ||
            "Student",

        className,

        stream,

        careerGoal

    };


    studyState.className =
        className;

    studyState.stream =
        stream;


    saveData();

    updateProfileUI();

    showToast(
        "✅ Profile updated!"
    );


    /*
     * Re-render study curriculum
     * according to new profile.
     */

    setTimeout(
        () => {

            try {

                applyFinalCurriculum();

            } catch (error) {

                console.warn(
                    "Curriculum refresh error:",
                    error
                );

            }

        },
        50
    );

}


/* ============================================================
   SETTINGS
   ============================================================ */

function renderSettings() {

    const settings =
        data.settings || {};


    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                ⚙️ Settings
            </h1>

            <p>
                BharatBuddy ko apni preference
                ke according customize karo.
            </p>

        </div>


        <div class="card settings-card">

            <div
                class="setting-row">

                <div>

                    <strong>
                        🌙 Dark Mode
                    </strong>

                    <p>
                        Dark theme enable/disable karo.
                    </p>

                </div>

                <label
                    class="switch">

                    <input
                        type="checkbox"
                        id="darkModeToggle"
                        ${
                            settings.darkMode
                                ? "checked"
                                : ""
                        }>

                    <span
                        class="slider">
                    </span>

                </label>

            </div>


            <div
                class="setting-row">

                <div>

                    <strong>
                        📐 Compact Mode
                    </strong>

                    <p>
                        Interface ko compact banao.
                    </p>

                </div>

                <label
                    class="switch">

                    <input
                        type="checkbox"
                        id="compactModeToggle"
                        ${
                            settings.compactMode
                                ? "checked"
                                : ""
                        }>

                    <span
                        class="slider">
                    </span>

                </label>

            </div>


            <div
                class="settings-actions">

                <button
                    class="btn btn-secondary"
                    id="clearChatBtn">

                    🗑️ Clear Chat

                </button>

                <button
                    class="btn btn-secondary"
                    id="clearQuizBtn">

                    🗑️ Clear Quiz History

                </button>

                <button
                    class="btn btn-danger"
                    id="resetAppBtn">

                    ⚠️ Reset App Data

                </button>

            </div>

        </div>


        <div class="card">

            <h3>
                ✨ BharatBuddy
            </h3>

            <p>
                Study smarter, practice better
                and build your future.
            </p>

            <button
                class="btn btn-primary"
                id="premiumBtn"
                type="button">

                ⭐ Explore Premium

            </button>

        </div>

    `;


    document
        .getElementById(
            "darkModeToggle"
        )
        ?.addEventListener(
            "change",
            toggleDarkMode
        );


    document
        .getElementById(
            "compactModeToggle"
        )
        ?.addEventListener(
            "change",
            toggleCompactMode
        );


    document
        .getElementById(
            "clearChatBtn"
        )
        ?.addEventListener(
            "click",
            clearChat
        );


    document
        .getElementById(
            "clearQuizBtn"
        )
        ?.addEventListener(
            "click",
            clearQuizHistory
        );


    document
        .getElementById(
            "resetAppBtn"
        )
        ?.addEventListener(
            "click",
            resetApp
        );


    document
        .getElementById(
            "premiumBtn"
        )
        ?.addEventListener(
            "click",
            () => {

                showToast(
                    "⭐ Premium features coming soon!"
                );

            }
        );

}


function toggleDarkMode(
    event
) {

    if (!data.settings) {

        data.settings = {};

    }


    data.settings.darkMode =
        Boolean(
            event.target.checked
        );


    document.body.classList.toggle(
        "dark-mode",
        data.settings.darkMode
    );


    saveData();

}


function toggleCompactMode(
    event
) {

    if (!data.settings) {

        data.settings = {};

    }


    data.settings.compactMode =
        Boolean(
            event.target.checked
        );


    document.body.classList.toggle(
        "compact-mode",
        data.settings.compactMode
    );


    saveData();

}


function clearChat() {

    if (
        !confirm(
            "Kya tum AI chat history clear karna chahte ho?"
        )
    ) {

        return;

    }


    data.chatHistory =
        [];


    saveData();

    showToast(
        "🗑️ Chat history cleared."
    );

}


/* ============================================================
   RESET APP
   ============================================================ */

function resetApp() {

    if (
        !confirm(
            "WARNING: Isse BharatBuddy ka saved app data reset ho jayega. Continue?"
        )
    ) {

        return;

    }


    localStorage.removeItem(
        STORAGE_KEY
    );


    /*
     * Reloading is safer than trying
     * to manually rebuild every state.
     */

    location.reload();

}


/* ============================================================
   APPLY SAVED SETTINGS
   ============================================================ */

function applySavedSettings() {

    const settings =
        data.settings || {};


    document.body.classList.toggle(
        "dark-mode",
        Boolean(
            settings.darkMode
        )
    );


    document.body.classList.toggle(
        "compact-mode",
        Boolean(
            settings.compactMode
        )
    );

}


/* ============================================================
   DAILY STREAK
   ============================================================ */

function updateDailyStreak() {

    const today =
        new Date()
            .toISOString()
            .slice(
                0,
                10
            );


    const lastActive =
        data.lastActiveDate ||
        "";


    if (
        lastActive ===
        today
    ) {

        return;

    }


    if (!lastActive) {

        data.streak =
            1;

    } else {

        const previous =
            new Date(
                `${lastActive}T00:00:00`
            );


        const current =
            new Date(
                `${today}T00:00:00`
            );


        const diff =
            Math.round(
                (
                    current -
                    previous
                ) /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );


        if (
            diff === 1
        ) {

            data.streak =
                Number(
                    data.streak || 0
                ) + 1;

        } else {

            data.streak =
                1;

        }

    }


    data.lastActiveDate =
        today;


    saveData();

}


/* ============================================================
   GLOBAL CLICK HELPERS
   ============================================================ */

document.addEventListener(
    "click",
    event => {

        const target =
            event.target.closest(
                "[data-action]"
            );


        if (!target) {
            return;
        }


        const action =
            target.dataset.action;


        if (
            action ===
            "open-study"
        ) {

            openPage(
                "study"
            );

        }


        if (
            action ===
            "open-practice"
        ) {

            openPage(
                "practice"
            );

        }


        if (
            action ===
            "open-tutor"
        ) {

            openPage(
                "tutor"
            );

        }


        if (
            action ===
            "open-coding"
        ) {

            openPage(
                "coding"
            );

        }

    }
);


/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */

document.addEventListener(
    "keydown",
    event => {

        /*
         * Ctrl + K
         * opens AI Tutor.
         */

        if (
            event.ctrlKey &&
            event.key.toLowerCase() ===
                "k"
        ) {

            event.preventDefault();

            openPage(
                "tutor"
            );

            setTimeout(
                () => {

                    document
                        .getElementById(
                            "tutorInput"
                        )
                        ?.focus();

                },
                100
            );

        }

    }
);


/* ============================================================
   FINAL INITIALIZATION
   ============================================================ */

function initializeApp() {

    try {

        ensureStudyProgress();

    } catch (error) {

        console.warn(
            "Study progress initialization failed:",
            error
        );

    }


    applySavedSettings();

    updateDailyStreak();

    updateProfileUI();

    updateStats();

    /*
     * Open home page only after
     * all base state has loaded.
     */

    openPage(
        "home"
    );

}


/*
 * Start application.
 */

initializeApp();


/* ============================================================
   FINAL CLASS-AWARE STUDY PATCH
   ============================================================ */

(function () {

    "use strict";


    /*
     * This is the single final curriculum layer.
     *
     * It replaces the older duplicated
     * NCERT/lesson selector systems.
     */


    const BB_FINAL_CATALOG = {

        "Class 9": {

            "PCM": {

                "Science": [
                    "Matter in Our Surroundings",
                    "Is Matter Around Us Pure",
                    "Atoms and Molecules",
                    "Structure of the Atom",
                    "The Fundamental Unit of Life",
                    "Tissues",
                    "Motion",
                    "Force and Laws of Motion",
                    "Gravitation",
                    "Work and Energy",
                    "Sound",
                    "Why Do We Fall Ill",
                    "Natural Resources",
                    "Improvement in Food Resources"
                ],

                "Mathematics": [
                    "Number Systems",
                    "Polynomials",
                    "Coordinate Geometry",
                    "Linear Equations in Two Variables",
                    "Introduction to Euclid's Geometry",
                    "Lines and Angles",
                    "Triangles",
                    "Quadrilaterals",
                    "Areas of Parallelograms and Triangles",
                    "Circles",
                    "Constructions",
                    "Heron's Formula",
                    "Surface Areas and Volumes",
                    "Statistics",
                    "Probability"
                ],

                "English": [
                    "The Fun They Had",
                    "The Sound of Music",
                    "The Little Girl",
                    "A Truly Beautiful Mind",
                    "The Snake and the Mirror",
                    "My Childhood",
                    "Reach for the Top",
                    "Kathmandu",
                    "If I Were You"
                ],

                "Social Science": [
                    "The French Revolution",
                    "Socialism in Europe and the Russian Revolution",
                    "Nazism and the Rise of Hitler",
                    "Forest Society and Colonialism",
                    "Pastoralists in the Modern World",
                    "India – Size and Location",
                    "Physical Features of India",
                    "Drainage",
                    "Climate",
                    "Natural Vegetation and Wildlife",
                    "Population",
                    "What is Democracy",
                    "Constitutional Design",
                    "Electoral Politics",
                    "Working of Institutions",
                    "Democratic Rights",
                    "The Story of Village Palampur",
                    "People as Resource",
                    "Poverty as a Challenge",
                    "Food Security in India"
                ]

            },


            "PCB": {},

            "Commerce": {},

            "Arts": {}

        },


        "Class 10": {

            "PCM": {

                "Science": [
                    "Chemical Reactions and Equations",
                    "Acids, Bases and Salts",
                    "Metals and Non-metals",
                    "Carbon and Its Compounds",
                    "Life Processes",
                    "Control and Coordination",
                    "How do Organisms Reproduce",
                    "Heredity",
                    "Light – Reflection and Refraction",
                    "Human Eye and Colourful World",
                    "Electricity",
                    "Magnetic Effects of Electric Current",
                    "Our Environment"
                ],

                "Mathematics": [
                    "Real Numbers",
                    "Polynomials",
                    "Pair of Linear Equations in Two Variables",
                    "Quadratic Equations",
                    "Arithmetic Progressions",
                    "Triangles",
                    "Coordinate Geometry",
                    "Introduction to Trigonometry",
                    "Some Applications of Trigonometry",
                    "Circles",
                    "Areas Related to Circles",
                    "Surface Areas and Volumes",
                    "Statistics",
                    "Probability"
                ],

                "English": [
                    "A Letter to God",
                    "Nelson Mandela",
                    "Two Stories About Flying",
                    "From the Diary of Anne Frank",
                    "Glimpses of India",
                    "Mijbil the Otter",
                    "Madam Rides the Bus",
                    "The Sermon at Benares",
                    "The Proposal"
                ],

                "Social Science": [
                    "The Rise of Nationalism in Europe",
                    "Nationalism in India",
                    "The Making of a Global World",
                    "The Age of Industrialisation",
                    "Print Culture and the Modern World",
                    "Resources and Development",
                    "Forest and Wildlife Resources",
                    "Water Resources",
                    "Agriculture",
                    "Minerals and Energy Resources",
                    "Manufacturing Industries",
                    "Lifelines of National Economy",
                    "Power Sharing",
                    "Federalism",
                    "Gender, Religion and Caste",
                    "Political Parties",
                    "Outcomes of Democracy",
                    "Development",
                    "Sectors of the Indian Economy",
                    "Money and Credit",
                    "Globalisation and the Indian Economy",
                    "Consumer Rights"
                ]

            },


            "PCB": {},

            "Commerce": {},

            "Arts": {}

        },


        "Class 11": {

            "PCM": {

                "Physics": [
                    "Units and Measurements",
                    "Motion in a Straight Line",
                    "Motion in a Plane",
                    "Laws of Motion",
                    "Work, Energy and Power",
                    "System of Particles and Rotational Motion",
                    "Gravitation",
                    "Mechanical Properties of Solids",
                    "Mechanical Properties of Fluids",
                    "Thermal Properties of Matter",
                    "Thermodynamics",
                    "Kinetic Theory",
                    "Oscillations",
                    "Waves"
                ],

                "Chemistry": [
                    "Some Basic Concepts of Chemistry",
                    "Structure of Atom",
                    "Classification of Elements and Periodicity in Properties",
                    "Chemical Bonding and Molecular Structure",
                    "Thermodynamics",
                    "Equilibrium",
                    "Redox Reactions",
                    "Organic Chemistry – Some Basic Principles and Techniques",
                    "Hydrocarbons"
                ],

                "Mathematics": [
                    "Sets",
                    "Relations and Functions",
                    "Trigonometric Functions",
                    "Complex Numbers and Quadratic Equations",
                    "Linear Inequalities",
                    "Permutations and Combinations",
                    "Binomial Theorem",
                    "Sequences and Series",
                    "Straight Lines",
                    "Conic Sections",
                    "Introduction to Three Dimensional Geometry",
                    "Limits and Derivatives",
                    "Statistics",
                    "Probability"
                ]

            },


            "PCB": {

                "Physics": [
                    "Units and Measurements",
                    "Motion in a Straight Line",
                    "Motion in a Plane",
                    "Laws of Motion",
                    "Work, Energy and Power",
                    "System of Particles and Rotational Motion",
                    "Gravitation",
                    "Mechanical Properties of Solids",
                    "Mechanical Properties of Fluids",
                    "Thermal Properties of Matter",
                    "Thermodynamics",
                    "Kinetic Theory",
                    "Oscillations",
                    "Waves"
                ],

                "Chemistry": [
                    "Some Basic Concepts of Chemistry",
                    "Structure of Atom",
                    "Classification of Elements and Periodicity in Properties",
                    "Chemical Bonding and Molecular Structure",
                    "Thermodynamics",
                    "Equilibrium",
                    "Redox Reactions",
                    "Organic Chemistry – Some Basic Principles and Techniques",
                    "Hydrocarbons"
                ],

                "Biology": [
                    "The Living World",
                    "Biological Classification",
                    "Plant Kingdom",
                    "Animal Kingdom",
                    "Morphology of Flowering Plants",
                    "Anatomy of Flowering Plants",
                    "Structural Organisation in Animals",
                    "Cell: The Unit of Life",
                    "Biomolecules",
                    "Cell Cycle and Cell Division",
                    "Transport in Plants",
                    "Mineral Nutrition",
                    "Photosynthesis in Higher Plants",
                    "Respiration in Plants",
                    "Plant Growth and Development",
                    "Digestion and Absorption",
                    "Breathing and Exchange of Gases",
                    "Body Fluids and Circulation",
                    "Excretory Products and their Elimination",
                    "Locomotion and Movement",
                    "Neural Control and Coordination",
                    "Chemical Coordination and Integration"
                ]

            },


            "Commerce": {

                "Accountancy": [
                    "Introduction to Accounting",
                    "Theory Base of Accounting",
                    "Recording of Transactions",
                    "Bank Reconciliation Statement",
                    "Trial Balance and Rectification of Errors",
                    "Depreciation, Provisions and Reserves",
                    "Bills of Exchange",
                    "Financial Statements",
                    "Accounts from Incomplete Records"
                ],

                "Business Studies": [
                    "Nature and Purpose of Business",
                    "Forms of Business Organisation",
                    "Private, Public and Global Enterprises",
                    "Business Services",
                    "Emerging Modes of Business",
                    "Social Responsibility of Business",
                    "Formation of a Company",
                    "Sources of Business Finance",
                    "Small Business",
                    "Internal Trade",
                    "International Business"
                ],

                "Economics": [
                    "Introduction to Micro Economics",
                    "Consumer's Equilibrium",
                    "Demand",
                    "Elasticity of Demand",
                    "Production",
                    "Cost",
                    "Perfect Competition",
                    "Market Equilibrium"
                ],

                "Mathematics": [
                    "Sets",
                    "Relations and Functions",
                    "Trigonometric Functions",
                    "Complex Numbers and Quadratic Equations",
                    "Linear Inequalities",
                    "Permutations and Combinations",
                    "Binomial Theorem",
                    "Sequences and Series",
                    "Straight Lines",
                    "Conic Sections",
                    "Limits and Derivatives",
                    "Statistics",
                    "Probability"
                ]

            },


            "Arts": {

                "History": [
                    "Writing and City Life",
                    "An Empire Across Three Continents",
                    "Nomadic Empires",
                    "The Three Orders",
                    "Changing Cultural Traditions",
                    "Displacing Indigenous Peoples",
                    "Paths to Modernisation"
                ],

                "Political Science": [
                    "Constitution: Why and How",
                    "Rights in the Indian Constitution",
                    "Election and Representation",
                    "Executive",
                    "Legislature",
                    "Judiciary",
                    "Federalism",
                    "Local Governments",
                    "Constitution as a Living Document",
                    "Philosophy of the Constitution"
                ],

                "Geography": [
                    "Geography as a Discipline",
                    "The Origin and Evolution of the Earth",
                    "Interior of the Earth",
                    "Distribution of Oceans and Continents",
                    "Minerals and Rocks",
                    "Geomorphic Processes",
                    "Landforms and their Evolution",
                    "Composition and Structure of Atmosphere",
                    "Solar Radiation",
                    "Water in the Atmosphere",
                    "World Climate and Climate Change",
                    "Water",
                    "Natural Vegetation",
                    "Natural Hazards and Disasters"
                ],

                "Economics": [
                    "Introduction to Economics",
                    "Theory of Consumer Behaviour",
                    "Production and Costs",
                    "The Theory of Firm",
                    "Market Equilibrium",
                    "Non-Competitive Markets",
                    "Statistics for Economics",
                    "Collection of Data",
                    "Organisation of Data",
                    "Presentation of Data",
                    "Measures of Central Tendency"
                ]

            }

        },


        "Class 12": {

            "PCM": {

                "Physics": [
                    "Electric Charges and Fields",
                    "Electrostatic Potential and Capacitance",
                    "Current Electricity",
                    "Moving Charges and Magnetism",
                    "Magnetism and Matter",
                    "Electromagnetic Induction",
                    "Alternating Current",
                    "Electromagnetic Waves",
                    "Ray Optics and Optical Instruments",
                    "Wave Optics",
                    "Dual Nature of Radiation and Matter",
                    "Atoms",
                    "Nuclei",
                    "Semiconductor Electronics"
                ],

                "Chemistry": [
                    "Solutions",
                    "Electrochemistry",
                    "Chemical Kinetics",
                    "d and f Block Elements",
                    "Coordination Compounds",
                    "Haloalkanes and Haloarenes",
                    "Alcohols, Phenols and Ethers",
                    "Aldehydes, Ketones and Carboxylic Acids",
                    "Amines",
                    "Biomolecules"
                ],

                "Mathematics": [
                    "Relations and Functions",
                    "Inverse Trigonometric Functions",
                    "Matrices",
                    "Determinants",
                    "Continuity and Differentiability",
                    "Applications of Derivatives",
                    "Integrals",
                    "Applications of Integrals",
                    "Differential Equations",
                    "Vector Algebra",
                    "Three Dimensional Geometry",
                    "Linear Programming",
                    "Probability"
                ]

            },


            "PCB": {

                "Physics": [
                    "Electric Charges and Fields",
                    "Electrostatic Potential and Capacitance",
                    "Current Electricity",
                    "Moving Charges and Magnetism",
                    "Magnetism and Matter",
                    "Electromagnetic Induction",
                    "Alternating Current",
                    "Electromagnetic Waves",
                    "Ray Optics and Optical Instruments",
                    "Wave Optics",
                    "Dual Nature of Radiation and Matter",
                    "Atoms",
                    "Nuclei",
                    "Semiconductor Electronics"
                ],

                "Chemistry": [
                    "Solutions",
                    "Electrochemistry",
                    "Chemical Kinetics",
                    "d and f Block Elements",
                    "Coordination Compounds",
                    "Haloalkanes and Haloarenes",
                    "Alcohols, Phenols and Ethers",
                    "Aldehydes, Ketones and Carboxylic Acids",
                    "Amines",
                    "Biomolecules"
                ],

                "Biology": [
                    "Sexual Reproduction in Flowering Plants",
                    "Human Reproduction",
                    "Reproductive Health",
                    "Principles of Inheritance and Variation",
                    "Molecular Basis of Inheritance",
                    "Evolution",
                    "Human Health and Disease",
                    "Microbes in Human Welfare",
                    "Biotechnology: Principles and Processes",
                    "Biotechnology and its Applications",
                    "Organisms and Populations",
                    "Ecosystem",
                    "Biodiversity and Conservation",
                    "Environmental Issues"
                ]

            },


            "Commerce": {

                "Accountancy": [
                    "Accounting for Partnership Firms",
                    "Reconstitution of Partnership",
                    "Dissolution of Partnership Firm",
                    "Accounting for Share Capital",
                    "Issue and Redemption of Debentures",
                    "Financial Statements of Companies",
                    "Analysis of Financial Statements",
                    "Cash Flow Statement"
                ],

                "Business Studies": [
                    "Nature and Significance of Management",
                    "Principles of Management",
                    "Business Environment",
                    "Planning",
                    "Organising",
                    "Staffing",
                    "Directing",
                    "Controlling",
                    "Financial Management",
                    "Financial Markets",
                    "Marketing Management",
                    "Consumer Protection"
                ],

                "Economics": [
                    "Introduction to Macroeconomics",
                    "National Income Accounting",
                    "Money and Banking",
                    "Determination of Income and Employment",
                    "Government Budget",
                    "Balance of Payments",
                    "Indian Economy on the Eve of Independence",
                    "Indian Economy 1950–1990",
                    "Liberalisation, Privatisation and Globalisation",
                    "Human Capital Formation",
                    "Rural Development",
                    "Employment",
                    "Infrastructure",
                    "Environment and Sustainable Development"
                ],

                "Mathematics": [
                    "Relations and Functions",
                    "Inverse Trigonometric Functions",
                    "Matrices",
                    "Determinants",
                    "Continuity and Differentiability",
                    "Applications of Derivatives",
                    "Integrals",
                    "Differential Equations",
                    "Vector Algebra",
                    "Three Dimensional Geometry",
                    "Linear Programming",
                    "Probability"
                ]

            },


            "Arts": {

                "History": [
                    "Bricks, Beads and Bones",
                    "Kings, Farmers and Towns",
                    "Kinship, Caste and Class",
                    "Thinkers, Beliefs and Buildings",
                    "Through the Eyes of Travellers",
                    "Bhakti-Sufi Traditions",
                    "An Imperial Capital",
                    "Peasants, Zamindars and the State",
                    "Colonialism and the Countryside",
                    "Rebels and the Raj",
                    "Mahatma Gandhi and the Nationalist Movement",
                    "Framing the Constitution"
                ],

                "Political Science": [
                    "The End of Bipolarity",
                    "Contemporary Centres of Power",
                    "Contemporary South Asia",
                    "International Organisations",
                    "Security in the Contemporary World",
                    "Environment and Natural Resources",
                    "Globalisation",
                    "Challenges of Nation-Building",
                    "Era of One-Party Dominance",
                    "Politics of Planned Development",
                    "India's External Relations",
                    "Challenges to and Restoration of the Congress System",
                    "The Crisis of Democratic Order",
                    "Regional Aspirations",
                    "Recent Developments in Indian Politics"
                ]

            }

        }

    };


    /*
     * Common subject groups for classes 9 and 10.
     */

    if (
        BB_FINAL_CATALOG[
            "Class 9"
        ]
    ) {

        BB_FINAL_CATALOG[
            "Class 9"
        ].PCB =
            BB_FINAL_CATALOG[
                "Class 9"
            ].PCM;

        BB_FINAL_CATALOG[
            "Class 9"
        ].Commerce =
            BB_FINAL_CATALOG[
                "Class 9"
            ].PCM;

        BB_FINAL_CATALOG[
            "Class 9"
        ].Arts =
            BB_FINAL_CATALOG[
                "Class 9"
            ].PCM;

    }


    if (
        BB_FINAL_CATALOG[
            "Class 10"
        ]
    ) {

        BB_FINAL_CATALOG[
            "Class 10"
        ].PCB =
            BB_FINAL_CATALOG[
                "Class 10"
            ].PCM;

        BB_FINAL_CATALOG[
            "Class 10"
        ].Commerce =
            BB_FINAL_CATALOG[
                "Class 10"
            ].PCM;

        BB_FINAL_CATALOG[
            "Class 10"
        ].Arts =
            BB_FINAL_CATALOG[
                "Class 10"
            ].PCM;

    }


    /*
     * Computer Science is available
     * for senior classes.
     */

    BB_FINAL_CATALOG[
        "Class 11"
    ].PCM[
        "Computer Science"
    ] = [
        "Computer Systems Overview",
        "Python Programming Basics",
        "Data Types and Operators",
        "Conditional Statements",
        "Loops",
        "Strings",
        "Lists",
        "Tuples and Dictionaries",
        "Functions",
        "Introduction to Data Handling"
    ];


    BB_FINAL_CATALOG[
        "Class 12"
    ].PCM[
        "Computer Science"
    ] = [
        "Python Revision Tour",
        "Functions",
        "File Handling",
        "Data Structures",
        "Computer Networks",
        "Database Concepts",
        "SQL",
        "Cyber Safety"
    ];


    /*
     * Capture original lesson data before
     * applying the final catalog.
     */

    const BB_ORIGINAL_LESSON_DATA = {};


    Object.keys(
        lessonData || {}
    ).forEach(
        subject => {

            BB_ORIGINAL_LESSON_DATA[
                subject
            ] = {
                ...lessonData[
                    subject
                ]
            };

        }
    );


    function bbProfileFinal() {

        const profile =
            data.profile || {};


        return {

            board:
                profile.board ||
                studyState.board ||
                "CBSE",

            className:
                profile.className ||
                studyState.className ||
                "Class 11",

            stream:
                profile.stream ||
                studyState.stream ||
                "PCM"

        };

    }


    function bbCatalogForProfile() {

        const profile =
            bbProfileFinal();


        const classCatalog =
            BB_FINAL_CATALOG[
                profile.className
            ];


        if (!classCatalog) {

            return {};

        }


        return (
            classCatalog[
                profile.stream
            ] ||
            classCatalog.PCM ||
            {}
        );

    }


    function bbChapterAlias(
        subject,
        chapter
    ) {

        const aliases = {

            "Some Basic Concepts of Chemistry":
                [
                    "Some Basic Concepts",
                    "Some Basic Concepts of Chemistry"
                ],

            "Chemical Bonding and Molecular Structure":
                [
                    "Chemical Bonding",
                    "Chemical Bonding and Molecular Structure"
                ],

            "Complex Numbers and Quadratic Equations":
                [
                    "Complex Numbers",
                    "Complex Numbers and Quadratic Equations"
                ],

            "Work, Energy and Power":
                [
                    "Work Energy Power",
                    "Work, Energy and Power"
                ]

        };


        const list =
            aliases[
                chapter
            ] || [];


        if (
            BB_ORIGINAL_LESSON_DATA[
                subject
            ]?.[chapter]
        ) {

            return chapter;

        }


        for (
            const candidate of list
        ) {

            if (
                BB_ORIGINAL_LESSON_DATA[
                    subject
                ]?.[candidate]
            ) {

                return candidate;

            }

        }


        return null;

    }


    function bbMakeLesson(
        subject,
        chapter,
        index
    ) {

        const originalChapter =
            bbChapterAlias(
                subject,
                chapter
            );


        const originalLessons =
            originalChapter
                ? BB_ORIGINAL_LESSON_DATA[
                    subject
                ][
                    originalChapter
                ]
                : null;


        if (
            Array.isArray(
                originalLessons
            ) &&
            originalLessons.length
        ) {

            const original =
                originalLessons[
                    index %
                    originalLessons.length
                ];


            return {

                title:
                    original.title ||
                    `Lesson ${index + 1}`,

                content:
                    original.content ||
                    `Study ${chapter}`,

                example:
                    original.example ||
                    ""

            };

        }


        const lessonNumber =
            index + 1;


        return {

            title:
                `${chapter} — Lesson ${lessonNumber}`,

            content:
                `
                <h3>
                    ${escapeHTML(
                        chapter
                    )}
                </h3>

                <p>
                    Is lesson me
                    <strong>
                        ${escapeHTML(
                            chapter
                        )}
                    </strong>
                    ke important concepts
                    systematically cover kiye jayenge.
                </p>

                <p>
                    BharatBuddy AI se is chapter
                    ko simple language me samjho,
                    examples dekho aur chapter test
                    ke liye prepare karo.
                </p>

                <h4>
                    What to learn
                </h4>

                <ul>
                    <li>
                        Core concepts
                    </li>

                    <li>
                        Important definitions
                    </li>

                    <li>
                        Examples and applications
                    </li>

                    <li>
                        Exam-focused revision
                    </li>
                </ul>
                `,

            example:
                `Example-based explanation for ${chapter}.`

        };

    }


    function bbApplyFinalCurriculum() {

        const catalog =
            bbCatalogForProfile();


        const newLessonData =
            {};


        Object.keys(
            catalog
        ).forEach(
            subject => {

                const chapters =
                    Array.isArray(
                        catalog[
                            subject
                        ]
                    )
                        ? catalog[
                            subject
                        ]
                        : [];


                newLessonData[
                    subject
                ] = {};


                chapters.forEach(
                    (
                        chapter,
                        chapterIndex
                    ) => {

                        const lessonCount =
                            3;


                        newLessonData[
                            subject
                        ][
                            chapter
                        ] =
                            Array.from(
                                {
                                    length:
                                        lessonCount
                                },
                                (
                                    _,
                                    index
                                ) =>
                                    bbMakeLesson(
                                        subject,
                                        chapter,
                                        index
                                    )
                            );

                    }
                );

            }
        );


        lessonData =
            newLessonData;


        const subjects =
            Object.keys(
                lessonData
            );


        if (
            !subjects.length
        ) {

            return;

        }


        if (
            !subjects.includes(
                studyState.subject
            )
        ) {

            studyState.subject =
                subjects[0];

        }


        const chapters =
            Object.keys(
                lessonData[
                    studyState.subject
                ] || {}
            );


        if (
            !chapters.includes(
                studyState.chapter
            )
        ) {

            studyState.chapter =
                chapters[0] ||
                "";

        }


        studyState.lessonIndex =
            Math.max(
                0,
                Math.min(
                    Number(
                        studyState.lessonIndex
                    ) || 0,
                    Math.max(
                        0,
                        (
                            lessonData[
                                studyState.subject
                            ]?.[
                                studyState.chapter
                            ]?.length ||
                            1
                        ) - 1
                    )
                )
            );


        const profile =
            bbProfileFinal();


        studyState.board =
            profile.board;

        studyState.className =
            profile.className;

        studyState.stream =
            profile.stream;


        ensureStudyProgress();

    }


    /*
     * Expose the catalog for other BharatBuddy
     * modules without creating another Study system.
     */

    window.BharatBuddyFinalCatalog =
        BB_FINAL_CATALOG;


    window.BharatBuddyApplyCurriculum =
        bbApplyFinalCurriculum;


    /*
     * Keep a safe global alias used by saveProfile().
     */

    window.applyFinalCurriculum =
        bbApplyFinalCurriculum;


    /*
     * Apply once immediately.
     */

    try {

        bbApplyFinalCurriculum();

    } catch (error) {

        console.warn(
            "Final curriculum initialization failed:",
            error
        );

    }

})();
/* ============================================================
   END OF FINAL CURRICULUM PATCH
   ============================================================ */


/*
 * Safety helpers for pages that may be opened
 * before the final curriculum is applied.
 */

function refreshCurrentStudyPage() {

    try {

        if (
            typeof applyFinalCurriculum ===
            "function"
        ) {

            applyFinalCurriculum();

        }

        if (
            typeof renderStudy ===
            "function"
        ) {

            renderStudy();

        }

    } catch (error) {

        console.warn(
            "Study page refresh failed:",
            error
        );

    }

}


/* ============================================================
   PROFILE CHANGE WATCHER
   ============================================================ */

(function setupProfileWatcher() {

    let lastProfile =
        JSON.stringify(
            data.profile || {}
        );


    setInterval(
        () => {

            const currentProfile =
                JSON.stringify(
                    data.profile || {}
                );


            if (
                currentProfile ===
                lastProfile
            ) {

                return;

            }


            lastProfile =
                currentProfile;


            try {

                applyFinalCurriculum();

            } catch (error) {

                console.warn(
                    "Profile curriculum update failed:",
                    error
                );

            }

        },
        1000
    );

})();


/* ============================================================
   FINAL STUDY NAVIGATION PROTECTION
   ============================================================ */

document.addEventListener(
    "click",
    event => {

        const studyLink =
            event.target.closest(
                '[data-page="study"]'
            );


        if (!studyLink) {
            return;
        }


        /*
         * Let the normal navigation system
         * handle the page.
         *
         * The small delay ensures the final
         * curriculum has already been applied.
         */

        setTimeout(
            () => {

                try {

                    applyFinalCurriculum();

                } catch (error) {

                    console.warn(
                        "Study curriculum refresh failed:",
                        error
                    );

                }

            },
            50
        );

    }
);


/* ============================================================
   SAVE PROFILE COMPATIBILITY
   ============================================================ */

(function patchProfileSave() {

    const originalSaveProfile =
        window.saveProfile;


    if (
        typeof originalSaveProfile !==
        "function"
    ) {

        return;

    }


    /*
     * Prevent duplicate wrapping.
     */

    if (
        originalSaveProfile.__bbPatched
    ) {

        return;

    }


    function patchedSaveProfile() {

        originalSaveProfile.apply(
            this,
            arguments
        );


        setTimeout(
            () => {

                try {

                    applyFinalCurriculum();

                } catch (error) {

                    console.warn(
                        "Profile curriculum patch failed:",
                        error
                    );

                }

            },
            100
        );

    }


    patchedSaveProfile.__bbPatched =
        true;


    /*
     * Keep the function globally accessible.
     */

    window.saveProfile =
        patchedSaveProfile;

})();


/* ============================================================
   WINDOW ERROR PROTECTION
   ============================================================ */

window.addEventListener(
    "error",
    event => {

        /*
         * Do not interrupt the entire app
         * because of a non-critical Study UI error.
         */

        if (
            event.error
        ) {

            console.warn(
                "BharatBuddy runtime warning:",
                event.error
            );

        }

    }
);


/* ============================================================
   UNHANDLED PROMISE PROTECTION
   ============================================================ */

window.addEventListener(
    "unhandledrejection",
    event => {

        console.warn(
            "BharatBuddy async warning:",
            event.reason
        );

    }
);


/* ============================================================
   FINAL DATA NORMALIZATION
   ============================================================ */

(function normalizeAppData() {

    if (
        !data ||
        typeof data !==
            "object"
    ) {

        return;

    }


    if (
        !data.profile ||
        typeof data.profile !==
            "object"
    ) {

        data.profile = {
            ...defaultData.profile
        };

    }


    if (
        !data.settings ||
        typeof data.settings !==
            "object"
    ) {

        data.settings = {
            ...defaultData.settings
        };

    }


    if (
        !data.stats ||
        typeof data.stats !==
            "object"
    ) {

        data.stats = {
            ...defaultData.stats
        };

    }


    if (
        !data.progress ||
        typeof data.progress !==
            "object"
    ) {

        data.progress = {};

    }


    if (
        !data.lessonProgress ||
        typeof data.lessonProgress !==
            "object"
    ) {

        data.lessonProgress = {};

    }


    if (
        !Array.isArray(
            data.chatHistory
        )
    ) {

        data.chatHistory = [];

    }


    if (
        !Array.isArray(
            data.quizHistory
        )
    ) {

        data.quizHistory = [];

    }


    if (
        !Array.isArray(
            data.chapterTests
        )
    ) {

        data.chapterTests = [];

    }


    if (
        !data.coding ||
        typeof data.coding !==
            "object"
    ) {

        data.coding = {
            html: "",
            css: "",
            js: ""
        };

    }


    if (
        typeof data.streak !==
            "number"
    ) {

        data.streak =
            Number(
                data.streak || 0
            );

    }


    saveData();

})();


/* ============================================================
   FINAL PROFILE DEFAULTS
   ============================================================ */

(function ensureProfileDefaults() {

    if (
        !data.profile
    ) {

        data.profile = {};

    }


    if (
        !data.profile.name
    ) {

        data.profile.name =
            "Student";

    }


    if (
        !data.profile.className
    ) {

        data.profile.className =
            "Class 11";

    }


    if (
        !data.profile.stream
    ) {

        data.profile.stream =
            "PCM";

    }


    if (
        !data.profile.board
    ) {

        data.profile.board =
            "CBSE";

    }


    if (
        !data.profile.careerGoal
    ) {

        data.profile.careerGoal =
            "";

    }


    studyState.board =
        data.profile.board;

    studyState.className =
        data.profile.className;

    studyState.stream =
        data.profile.stream;


    saveData();

})();


/* ============================================================
   FINAL CURRICULUM RE-APPLY
   ============================================================ */

setTimeout(
    () => {

        try {

            applyFinalCurriculum();

        } catch (error) {

            console.warn(
                "Final curriculum apply error:",
                error
            );

        }

    },
    150
);


/* ============================================================
   BHARATBUDDY GLOBAL API
   ============================================================ */

window.BharatBuddy = {

    version:
        "1.0.0",

    openPage,

    askAI,

    showToast,

    saveData,

    renderStudy,

    renderPractice,

    renderTutor,

    renderCoding,

    renderCareer,

    renderEnglish,

    renderProgress,

    renderAchievements,

    renderProfile,

    renderSettings,

    startChapterTest,

    completeCurrentLesson,

    generateQuiz,

    saveProfile

};


/* ============================================================
   FINAL READY EVENT
   ============================================================ */

document.dispatchEvent(
    new CustomEvent(
        "bharatbuddy:ready"
    )
);
