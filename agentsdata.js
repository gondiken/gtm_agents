const agentsData = {
    "tools": [
        "Gem (GTM assistant)",
        "Forge",
        "Commonroom",
        "Outreach",
        "GTM Brain",
        "Peel",
        "Aidvize",
        "Staircase",
        "Clay",
        "Rattle",
        "Qualified",
        "Glean",
        "Copy.ai",
        "Gamma"
    ],
    "phases": [
        {
            "name": "Pre-S0",
            "agents": [
                {
                    "name": "Website - Meeting agent",
                    "tasks": []
                },
                {
                    "name": "Inbound - AI SDR",
                    "tasks": []
                },
                {
                    "name": "Organic Lead Agent",
                    "tasks": [
                        {
                            "name": "Blog Post Generator",
                            "description": "",
                            "status": "released"
                        },
                        {
                            "name": "Article Updater",
                            "description": "",
                            "status": "released"
                        },
                        {
                            "name": "Internal Link Finder",
                            "description": "",
                            "status": "released"
                        },
                        {
                            "name": "Content Prioritiser",
                            "description": "",
                            "status": "released"
                        },
                        {
                            "name": "Keyword Finder",
                            "description": "",
                            "status": "released"
                        },
                        {
                            "name": "Use Case Creator",
                            "description": "",
                            "status": "roadmap"
                        },
                        {
                            "name": "FAQ Optimiser",
                            "description": "",
                            "status": "released"
                        },
                        {
                            "name": "LLM Query Monitor",
                            "description": "",
                            "status": "released"
                        }
                    ]
                },
                {
                    "name": "PMM - User questions",
                    "tasks": []
                },
                {
                    "name": "PMM - WinLoss",
                    "tasks": []
                },
                {
                    "name": "GTM Brain ingestion",
                    "tasks": [
                        {
                            "name": "Account enrichment",
                            "status": "roadmap"
                        },
                        {
                            "name": "ICP scoring",
                            "status": "roadmap"
                        },
                        {
                            "name": "Marketing qualification agent",
                            "status": "roadmap"
                        },
                        {
                            "name": "Contact enrichment | social",
                            "status": "roadmap"
                        }
                    ]
                }
            ]
        },
        {
            "name": "New Business",
            "agents": [
                {
                    "name": "Pre-discovery agent",
                    "tasks": [
                        {
                            "name": "Pre-discovery research",
                            "description": "Company and contact intel",
                            "status": "roadmap"
                        },
                        {
                            "name": "Pre-discovery coach",
                            "description": "Discovery techniques to focus on based on your past discoveries and what worked well (or not)",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "Post-discovery agent",
                    "tasks": [
                        {
                            "name": "Email follow-up drafter",
                            "description": "Draft the follow-up email, ping the AE, have it ready to send",
                            "status": "roadmap"
                        },
                        {
                            "name": "Post-discovery coach",
                            "description": "Feedback on the discovery based on the sales techniques expected at this stage",
                            "status": "released"
                        },
                        {
                            "name": "Landing page generator",
                            "description": "Generate a customer & marketer/merchandiser story-focused landing page, specific to the brand and their pain points",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "Qualification agent",
                    "tasks": [
                        {
                            "name": "ICP qualification",
                            "description": "Auto-qualify >= 80, auto-disqualify <= 40, ping SDR/AE for scores in between",
                            "status": "roadmap"
                        },
                        {
                            "name": "Deal qualification",
                            "description": "Auto-qualify >= 80, auto-disqualify <= 40, ping AE for scores in between",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "Landing page generator",
                    "tasks": [
                        {
                            "name": "Generate landing page",
                            "description": "Generate landing page for the opp demonstrating Bloomreach value",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "Sales deck generator",
                    "tasks": [
                        {
                            "name": "Situation summary",
                            "description": "What we heard so far",
                            "status": "released"
                        },
                        {
                            "name": "Mutual plan",
                            "description": "Mutual close plan with key dates and timelines",
                            "status": "released"
                        },
                        {
                            "name": "ROI calculation",
                            "description": "ROI calculation coming from agreed use cases",
                            "status": "roadmap"
                        },
                        {
                            "name": "Case study curation",
                            "description": "Most relevant case studies to the prospect's pain points",
                            "status": "released"
                        }
                    ]
                },
                {
                    "name": "Forge (demo prep agent)",
                    "tasks": [
                        {
                            "name": "Catalog generator",
                            "description": "Generate real product catalog data on the brand",
                            "status": "released"
                        },
                        {
                            "name": "Customer journey generator",
                            "description": "Generate various customer journeys that the prospect would see among their customers",
                            "status": "released"
                        },
                        {
                            "name": "Cust. data generator",
                            "description": "Generate fake customer data and import into Bloomreach environment",
                            "status": "released"
                        },
                        {
                            "name": "Demo asset generator",
                            "description": "Generate marketing assets (scenarios, weblayers, segmentations) specific to the brand and their industry",
                            "status": "released"
                        }
                    ]
                },
                {
                    "name": "Dealroom generator",
                    "tasks": [
                        {
                            "name": "Generate dealroom",
                            "description": "Generate dealroom to align with the prospect",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "Pre-demo agent",
                    "tasks": [
                        {
                            "name": "SC handover brief",
                            "description": "Bring context relevant to the upcoming demo for the SC",
                            "status": "released"
                        },
                        {
                            "name": "Sales deck generator",
                            "description": "Create an external-facing deal deck, including Situation Slide, Mutual Plan Slide, ROI, relevant case studies, and relevant logos",
                            "status": "released"
                        },
                        {
                            "name": "Pre-demo coach",
                            "description": "Demo techniques to focus on based on your past demos and what worked well (or not)",
                            "status": "roadmap"
                        },
                        {
                            "name": "Forge (demo prep agent)",
                            "description": "Prepare assets for the upcoming demo (ping human confirmation)",
                            "status": "released"
                        }
                    ]
                },
                {
                    "name": "Post-demo agent",
                    "tasks": [
                        {
                            "name": "Email follow-up drafter",
                            "description": "Draft the follow-up email, ping the AE, have it ready to send",
                            "status": "roadmap"
                        },
                        {
                            "name": "Post-demo coach",
                            "description": "Feedback on the demo based on the sales techniques expected at this stage",
                            "status": "released"
                        },
                        {
                            "name": "Dealroom generator",
                            "description": "",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "Deal forecaster",
                    "tasks": [
                        {
                            "name": "Forecast deal close probability",
                            "description": "",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "Partnership detector",
                    "tasks": [
                        {
                            "name": "Detect partnership need",
                            "description": "Detect whether we should involve partner, when, and which partner",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "RFI/RFP agent",
                    "tasks": [
                        {
                            "name": "Ingest RFI/RFP",
                            "description": "",
                            "status": "roadmap"
                        },
                        {
                            "name": "Automatically assign AE/SC/GIST",
                            "description": "",
                            "status": "roadmap"
                        },
                        {
                            "name": "Answer questions",
                            "description": "",
                            "status": "roadmap"
                        },
                        {
                            "name": "Ping for review",
                            "description": "",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "Scoping agent",
                    "tasks": [
                        {
                            "name": "Generate pre-scoping doc",
                            "description": "",
                            "status": "roadmap"
                        },
                        {
                            "name": "Generate scope draft",
                            "description": "",
                            "status": "roadmap"
                        },
                        {
                            "name": "Generate partnership deck",
                            "description": "",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "Risk alert",
                    "tasks": [
                        {
                            "name": "Highlight deal risks",
                            "description": "Highlight any risks associated with the deal if the risk level increases to HIGH",
                            "status": "released"
                        }
                    ]
                },
                {
                    "name": "Manager rundown",
                    "tasks": [
                        {
                            "name": "Weekly manager rundown",
                            "description": "Add S3+ opps into weekly manager rundown between AE and manager and highlight any actions need to be taken",
                            "status": "released"
                        }
                    ]
                },
                {
                    "name": "Quote assistant",
                    "tasks": [
                        {
                            "name": "Help build a quote",
                            "description": "",
                            "status": "roadmap"
                        },
                        {
                            "name": "Prepare deck with proposal",
                            "description": "",
                            "status": "roadmap"
                        },
                        {
                            "name": "Prepare order form",
                            "description": "",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "Legal assistant",
                    "tasks": [
                        {
                            "name": "Speed up legal processes",
                            "description": "",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "Case study / logo curator",
                    "tasks": [
                        {
                            "name": "Curate case studies",
                            "description": "Curate relevant case studies based on the pain points raised by the prospect",
                            "status": "released"
                        },
                        {
                            "name": "Curate logos",
                            "description": "Curate relevant logos based on the industry/region of the prospect",
                            "status": "roadmap"
                        },
                        {
                            "name": "Build deck slides",
                            "description": "Build deck slides with the stated case studies and logos",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "Proposal generator",
                    "tasks": [
                        {
                            "name": "Generate proposal page",
                            "description": "Generate standardized sales proposal based on SF and CPQ data",
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "🧠 GTM Brain ingestion",
                    "tasks": [
                        {
                            "name": "Calls",
                            "status": "released"
                        },
                        {
                            "name": "Emails",
                            "status": "released"
                        },
                        {
                            "name": "SF notes",
                            "status": "released"
                        },
                        {
                            "name": "Case studies",
                            "status": "released"
                        },
                        {
                            "name": "RFPs",
                            "status": "roadmap"
                        },
                        {
                            "name": "LinkedIn",
                            "status": "roadmap"
                        },
                        {
                            "name": "Site actions",
                            "status": "roadmap"
                        },
                        {
                            "name": "Dealroom actions",
                            "status": "roadmap"
                        },
                        {
                            "name": "Email engagement",
                            "status": "roadmap"
                        },
                        {
                            "name": "Platform usage",
                            "status": "roadmap"
                        },
                        {
                            "name": "Analyst Rel. database",
                            "status": "roadmap"
                        },
                        {
                            "name": "Comp intel",
                            "status": "roadmap"
                        },
                        {
                            "name": "Market intel",
                            "status": "roadmap"
                        },
                        {
                            "name": "Brand intel",
                            "status": "roadmap"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Renewal",
            "agents": [
                {
                    "name": "360 view",
                    "tasks": []
                },
                {
                    "name": "Contract history",
                    "tasks": []
                }
            ]
        },
        {
            "name": "Upsell",
            "agents": []
        },
        {
            "name": "Customer Success",
            "agents": [
                {
                    "name": "AE to SC handover",
                    "tasks": []
                }
            ]
        }
    ]
};