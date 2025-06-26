document.addEventListener("DOMContentLoaded", () => {
    const pane = document.getElementById("preview-pane");
    const closeBtn = document.getElementById("preview-close");
    const titleEl = document.getElementById("preview-title");
    const descEl = document.getElementById("preview-description");
    const imgEl = document.getElementById("preview-image");
    const techEl = document.getElementById("preview-tech");
    const techsubEl = document.getElementById("preview-tech__sub");

    const contentMap = {
        "Orbispec": {
            title: "Orbispec",
            description: "This Flask web application integrates with TensorFlow to perform image classification and object detection. It uses a pre-trained Faster R-CNN model hosted via TensorFlow Serving. Users can upload images, which will then be processed by the model, and the results (including bounding boxes and classified labels) will be displayed.",
            tech: "Technology Stack",
            techsub: "Flask\u00A0 | \u00A0TensorFlow\u00A0 | \u00A0Triton Serving\u00A0 | \u00A0Docker\u00A0 | \u00A0gRPC",
            image: "img/fifthpage.png"
        },
        "CropLabs": {
            title: "CropLabs",
            description: "CropLabs is a digital platform that solves three major problems in farming: waste from unused crop leftovers, the difficulty small businesses face in finding raw materials, and the lack of easy access to expert farming advice. It connects farmers with industries that can reuse agricultural by-products, which reduces waste and creates new income for farmers. It also includes a chatbot called CropLabs AI, which gives useful farming advice like how to manage pests, plan crops, or take care of soil. The platform was built using ReactJS for the user interface, Node.js and Express.js for the backend, and MongoDB for storing data. The AI chatbot was made using PyTorch and Transformers and was trained on farming-related data.",
            tech: "Technology Stack",
            techsub: "React.js\u00A0 | \u00A0Transformers\u00A0 | \u00A0PyTorch\u00A0 | \u00A0JWT\u00A0 | \u00A0FastAPI",
            image: "img/vertical1.png"
        },
        "GNNLDA": {
            title: "GNNLDA",
            description: "GNNLDA is a deep learning project that predicts links between small RNA molecules called miRNAs, drugs, and diseases. It uses a graph-based model to understand how different biological elements are connected. The model brings together data from eight types of biomolecules to form a large network, then uses a graph transformer to learn patterns and make accurate predictions. This helps in finding possible disease treatments by showing how certain miRNAs and drugs may be related to specific diseases.",
            tech: "Technology Stack",
            techsub: "Python \u00A0|\u00A0 React.js \u00A0|\u00A0 Scikit-learn \u00A0|\u00A0 torch-geometric \u00A0|\u00A0 GraphSAGE",
            image: "img/vertical2.png"
        },
        "RNAlyze": {
            title: "RNAlyze",
            description: "This project focuses on classifying RNA sequences as either coding or noncoding using machine learning algorithms. It uses RNA data from humans, collected from the GENCODE and NONCODE databases. Each RNA sequence is processed to extract important features such as ORF length, GC content, codon bias, stop codon frequency, molecular weight, and several other biological properties. The cleaned data is then split into training and testing sets. Multiple machine learning models including Logistic Regression, Support Vector Machine, Naive Bayes, and Random Forest are trained on this data to accurately predict the type of RNA. The goal is to help better understand gene expression by identifying which RNA sequences can code for proteins.",
            tech: "Technology Stack",
            techsub: "Python \u00A0|\u00A0 NumPy \u00A0|\u00A0 Pandas \u00A0|\u00A0 Scikit-learn \u00A0|\u00A0 Matplotlib",
            image: "img/thirdpage.png"
        },
        "Vastumex": {
            title: "Vastumex",
            description: "Vastumex is an AI-based platform designed to support industrial symbiosis by matching industries with complementary resource needs and waste outputs. The platform allows users to enter the materials they require and the waste they generate. It then uses a custom AI algorithm to suggest ideal matches with other industries that can either supply needed resources or repurpose waste. This helps reduce environmental impact, improve resource efficiency, and cut costs. SynerG was built with a focus on real-world data, validation systems to ensure input accuracy, and algorithms that consider logistics, regulations, and sustainability when recommending matches.",
            tech: "Technology Stack",
            techsub: "Python \u00A0|\u00A0 Pandas \u00A0|\u00A0 HTML/CSS/JS \u00A0|\u00A0 K-NN \u00A0|\u00A0 XGBoost",
            image: "img/fourthpage.png"
        },
        "Urha": {
            title: "Urha",
            description: "This is a simple and effective educational app built using ReactJS for the frontend and Flask for the backend. It is connected to Firebase to store and manage the questions and answers. The app does not require users to sign up or log in. Instead it allows anyone to access the content freely and choose their preferred language between English and Malayalam. The purpose of the app is to support learning by providing clear and organized question answer sets that users can go through at their own pace. It is designed to help learners revise and understand key topics without the pressure of formal testing.",
            tech: "Technology Stack",
            techsub: "Python \u00A0|\u00A0 Flask \u00A0|\u00A0 React.js \u00A0|\u00A0 Firebase ",
            image: "img/sixthpage.png"
        }
    };

    document.querySelectorAll(".menu__item-link").forEach(link => {
        link.addEventListener("click", () => {
            const label = link.textContent.trim();
            const content = contentMap[label];

            if (content) {
                titleEl.textContent = content.title;
                descEl.textContent = content.description;
                techEl.textContent = content.tech;
                techsubEl.textContent = content.techsub;
                imgEl.src = content.image;
                imgEl.alt = content.title;
                pane.classList.add("open");
            }
        });
    });

    closeBtn.addEventListener("click", () => {
        pane.classList.remove("open");
    });
});
