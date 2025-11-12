const agentsData = {
    "tools": [
        "Gem",
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
        "Gamma",
        "n8n",
        "Userled"
    ],
    "phases": [
        {
            "name": "Marketing",
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
                    "name": "1:1 ABM Agent",
                    "tasks": [
                        {
                            "name": "Account Research",
                            "description": "",
                            "tools": ["Copy.ai"],
                            "status": "released"
                        },
                        {
                            "name": "Landing page copy",
                            "description": "",
                            "tools": ["Copy.ai"],
                            "status": "released"
                        },
                        {
                            "name": "Ad creatives and copy",
                            "description": "",
                            "tools": ["Copy.ai"],
                            "status": "released"
                        },
                        {
                            "name": "Email copy generation for outreach",
                            "description": "",
                            "tools": ["Copy.ai"],
                            "status": "released"
                        },
                        {
                            "name": "Deal expert",
                            "description": "",
                            "tools": ["Gem"],
                            "status": "released"
                        },
                        {
                            "name": "Landing page generation",
                            "description": "",
                            "tools": ["Userled"],
                            "status": "released"
                        },
                        {
                            "name": "LinkedIn campaign & ad creation",
                            "description": "",
                            "tools": ["Userled"],
                            "status": "released"
                        }
                    ]
                },
                {
                    "name": "Post-webinar Agent",
                    "tasks": [
                        {
                            "name": "Summarize webinar takeaways and next steps from transcripts",
                            "description": "",
                            "tools": ["Copy.ai"],
                            "status": "released"
                        },
                        {
                            "name": "Append to contact records in Hubspot for AI follow up",
                            "description": "",
                            "tools": ["Copy.ai"],
                            "status": "released"
                        }
                    ]
                },
                {
                    "name": "Organic Lead Agent",
                    "tasks": [
                        {
                            "name": "Blog Post Generator",
                            "description": "",
                            "tools": ["n8n"],
                            "status": "released"
                        },
                        {
                            "name": "Article Updater",
                            "description": "",
                            "tools": ["n8n"],
                            "status": "released"
                        },
                        {
                            "name": "Internal Link Finder",
                            "description": "",
                            "tools": ["n8n"],
                            "status": "released"
                        },
                        {
                            "name": "Content Prioritiser",
                            "description": "",
                            "tools": ["n8n"],
                            "status": "released"
                        },
                        {
                            "name": "Keyword Finder",
                            "description": "",
                            "tools": ["n8n"],
                            "status": "released"
                        },
                        {
                            "name": "Use Case Creator",
                            "description": "",
                            "tools": ["n8n"],
                            "status": "roadmap"
                        },
                        {
                            "name": "FAQ Optimiser",
                            "description": "",
                            "tools": ["n8n"],
                            "status": "released"
                        },
                        {
                            "name": "LLM Query Monitor",
                            "description": "",
                            "tools": ["n8n"],
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
                            "description": "",
                            "tools": ["Clay"],
                            "status": "roadmap"
                        },
                        {
                            "name": "ICP scoring",
                            "description": "",
                            "tools": ["n8n"],
                            "status": "roadmap"
                        },
                        {
                            "name": "Marketing qualification agent",
                            "description": "",
                            "tools": ["n8n"],
                            "status": "roadmap"
                        },
                        {
                            "name": "Contact enrichment | social",
                            "description": "",
                            "tools": ["n8n"],
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
                            "tools": ["Clay"],
                            "status": "roadmap"
                        },
                        {
                            "name": "Pre-discovery coach",
                            "description": "Discovery techniques to focus on based on your past discoveries and what worked well (or not)",
                            "tools": ["Gem"],
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
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Post-discovery coach",
                            "description": "Feedback on the discovery based on the sales techniques expected at this stage",
                            "tools": ["Gem"],
                            "status": "released"
                        },
                        {
                            "name": "Landing page generator",
                            "description": "Generate a customer & marketer/merchandiser story-focused landing page, specific to the brand and their pain points",
                            "tools": ["Gem"],
                            "status": "released"
                        }
                    ]
                },
                {
                    "name": "Qualification agent",
                    "tasks": [
                        {
                            "name": "ICP qualification",
                            "description": "Auto-qualify >= 80, auto-disqualify <= 40, ping SDR/AE for scores in between",
                            "tools": ["Clay","Rattle"],
                            "status": "roadmap"
                        },
                        {
                            "name": "Deal qualification",
                            "description": "Auto-qualify >= 80, auto-disqualify <= 40, ping AE for scores in between",
                            "tools": ["Rattle"],
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
                            "tools": ["Gem","Gamma"],
                            "status": "released"
                        }
                    ]
                },
                {
                    "name": "Sales deck generator",
                    "tasks": [
                        {
                            "name": "Situation summary",
                            "description": "What we heard so far",
                            "tools": ["Gem"],
                            "status": "released"
                        },
                        {
                            "name": "Mutual plan",
                            "description": "Mutual close plan with key dates and timelines",
                            "tools": ["Gem"],
                            "status": "released"
                        },
                        {
                            "name": "ROI calculation",
                            "description": "ROI calculation coming from agreed use cases",
                            "tools": ["Gem","Glean"],
                            "status": "roadmap"
                        },
                        {
                            "name": "Case study curation",
                            "description": "Most relevant case studies to the prospect's pain points",
                            "tools": ["Gem"],
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
                            "tools": ["Forge"],
                            "status": "released"
                        },
                        {
                            "name": "Customer journey generator",
                            "description": "Generate various customer journeys that the prospect would see among their customers",
                            "tools": ["Forge"],
                            "status": "released"
                        },
                        {
                            "name": "Cust. data generator",
                            "description": "Generate fake customer data and import into Bloomreach environment",
                            "tools": ["Forge"],
                            "status": "released"
                        },
                        {
                            "name": "Demo asset generator",
                            "description": "Generate marketing assets (scenarios, weblayers, segmentations) specific to the brand and their industry",
                            "tools": ["Forge"],
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
                            "tools": [""],
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
                            "tools": ["Gem"],
                            "status": "released"
                        },
                        {
                            "name": "Sales deck generator",
                            "description": "Create an external-facing deal deck, including Situation Slide, Mutual Plan Slide, ROI, relevant case studies, and relevant logos",
                            "tools": ["Gem"],
                            "status": "released"
                        },
                        {
                            "name": "Pre-demo coach",
                            "description": "Demo techniques to focus on based on your past demos and what worked well (or not)",
                            "tools": ["Gem"],
                            "status": "roadmap"
                        },
                        {
                            "name": "Forge (demo prep agent)",
                            "description": "Prepare assets for the upcoming demo (ping human confirmation)",
                            "tools": ["Forge"],
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
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Post-demo coach",
                            "description": "Feedback on the demo based on the sales techniques expected at this stage",
                            "tools": ["Gem"],
                            "status": "released"
                        },
                        {
                            "name": "Dealroom generator",
                            "description": "Automatically generate/update the dealroom to align with the prospect and influence their decision.",
                            "tools": [""],
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
                            "tools": ["Rattle"],
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
                            "tools": ["Rattle"],
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
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Automatically assign AE/SC/GIST",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Answer questions",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Ping for review",
                            "description": "",
                            "tools": [""],
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
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Generate scope draft",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Generate partnership deck",
                            "description": "",
                            "tools": [""],
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
                            "tools": ["Rattle"],
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
                            "tools": ["Rattle"],
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
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Prepare deck with proposal",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Prepare order form",
                            "description": "",
                            "tools": [""],
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
                            "tools": [""],
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
                            "tools": ["Gem"],
                            "status": "released"
                        },
                        {
                            "name": "Curate logos",
                            "description": "Curate relevant logos based on the industry/region of the prospect",
                            "tools": ["Gem"],
                            "status": "roadmap"
                        },
                        {
                            "name": "Build deck slides",
                            "description": "Build deck slides with the stated case studies and logos",
                            "tools": ["Gem"],
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
                            "tools": [""],
                            "status": "roadmap"
                        }
                    ]
                },
                {
                    "name": "GTM Brain ingestion",
                    "tasks": [
                        {
                            "name": "Calls",
                            "description": "Automatically store & vectorize when a call completes",
                            "tools": ["GTM Brain"],
                            "status": "released"
                        },
                        {
                            "name": "Emails",
                            "description": "Automatically store & vectorize when an inboud email is received",
                            "tools": ["GTM Brain"],
                            "status": "released"
                        },
                        {
                            "name": "SF notes",
                            "description": "Automatically store & vectorize when a Salesforce opp is updated",
                            "tools": ["GTM Brain"],
                            "status": "released"
                        },
                        {
                            "name": "Case studies",
                            "description": "Automatically store & vectorize case studies when they're published on our website",
                            "tools": ["GTM Brain"],
                            "status": "released"
                        },
                        {
                            "name": "RFPs",
                            "description": "Automatically store & vectorize RFPs when we receive them from the prospect",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "LinkedIn",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Site actions",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Dealroom actions",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Email engagement",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Platform usage",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Analyst Rel. database",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Comp intel",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Market intel",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        },
                        {
                            "name": "Brand intel",
                            "description": "",
                            "tools": [""],
                            "status": "roadmap"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Account Management",
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
            "name": "Customer Success",
            "agents": [
                {
                    "name": "AE to AM/CSM handover",
                    "tasks": []
                }
            ]
        }
    ]
};