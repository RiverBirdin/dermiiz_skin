const fs = require('fs');
const path = require('path');

const servicesData = [
    // ==========================================
    // SKIN SERVICES (18)
    // ==========================================
    {
        slug: 'acne-treatment',
        title: 'Acne Treatment',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Acne Treatment in Trichy | Clinical Dermatology | Dermiiz',
        metaDesc: 'Evidence-based acne treatments at Dermiiz Skin and Hair Clinic. Custom dermatologist protocols targeting blackheads, inflammatory acne, and cystic lesions.',
        heroImg: '../assets/images/about_facial_therapy.png',
        benefitsImg: '../assets/images/Doctor_clinic_1.png',
        introP1: 'Acne is one of the most common dermatological concerns and can appear at different stages of life. Breakouts emerge due to follicular occlusion, oil overproduction, bacterial proliferation, and localized inflammation.',
        introP2: 'At Dermiiz, we believe in root-cause identification rather than temporary, superficial fixes. Our dermatologists customize each protocol to treat active breakouts, soothe inflammation, clear congested pores, and restore healthy epidermal barrier function without excessive dryness.',
        typesTitle: 'Types of acne we treat',
        typesSubtext: 'Acne can appear in different forms, and each type requires a different approach. Our specialists assess your skin type to determine the most effective, targeted solution for your condition.',
        types: [
            {
                title: 'Comedonal Acne',
                desc: 'Characterized by blackheads and whiteheads caused by clogged pores and keratin accumulation.'
            },
            {
                title: 'Inflammatory Acne',
                desc: 'Red, tender bumps or pus-filled papules and pustules caused by bacteria and inflammation.'
            },
            {
                title: 'Cystic & Nodular Acne',
                desc: 'Deeper, painful lesions beneath the skin that require specialized clinical dermatological management.'
            },
            {
                title: 'Persistent & Recurring Acne',
                desc: 'Chronic or adult-onset breakouts requiring targeted, long-term medical therapies and barrier repair.'
            }
        ],
        benefitsTitle: 'Benefits of acne treatment',
        benefitsSubtext: 'Professional acne treatment focuses on managing breakouts while supporting healthier skin over time.',
        benefitCardTitle: 'Clearer-Looking Skin',
        benefitCardDesc: 'Formulated treatments that help reduce active blemishes and support a more balanced, even-looking complexion.',
        benefitChecks: [
            'Reduces excess sebum and unclogs pores to prevent further breakouts.',
            'Improves overall skin texture and tone for a refreshed, healthier appearance.',
            'Prevents scarring and skin damage with early, targeted clinical interventions.'
        ],
        faqs: [
            {
                q: 'How do I know which acne treatment is right for me?',
                a: 'During your initial consultation, our dermatologists perform a detailed skin diagnostic to analyze lesion types, oil secretion levels, hormonal patterns, and skin sensitivity before designing a personalized treatment protocol.'
            },
            {
                q: 'Can acne be completely cured?',
                a: 'While acne can be effectively controlled and cleared, recurring breakouts can be influenced by hormones, diet, and lifestyle. Our treatments focus on clearing active acne, preventing recurrences, and maintaining long-term skin health.'
            },
            {
                q: 'How long does acne treatment take?',
                a: 'Noticeable reduction in active inflammation is typically observed within 2 to 4 weeks. A complete treatment regimen usually spans 8 to 12 weeks depending on severity and skin cycle turnaround.'
            },
            {
                q: 'Can acne treatment prevent acne scars?',
                a: 'Yes. Treating active cysts and inflammatory lesions early prevents collagen degradation and post-inflammatory tissue damage, which are the primary causes of permanent atrophic and pitted scars.'
            },
            {
                q: 'Can I continue using my current skincare products?',
                a: 'We evaluate your daily skincare routine during consultation. Non-comedogenic gentle cleansers and oil-free sunscreens are encouraged, while harsh exfoliants or comedogenic formulas may be paused.'
            }
        ]
    },
    {
        slug: 'acne-scars-treatment',
        title: 'Acne Scars Treatment',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Acne Scars Treatment in Trichy | Fractional & Subcision | Dermiiz',
        metaDesc: 'Advanced acne scar treatments at Dermiiz Clinic. Targeted solutions including fractional lasers, subcision, microneedling RF, and chemical peels for smooth skin.',
        heroImg: '../assets/images/doctor-patient_laser_treatment.png',
        benefitsImg: '../assets/images/doctor-patient_skin_analyze.png',
        introP1: 'Acne scars develop when severe inflammation damages the skin’s dermal collagen network, leaving behind stubborn depressions, uneven texture, or tethered fibrous bands beneath the epidermis.',
        introP2: 'At Dermiiz, we utilize advanced multi-modality scar revision protocols. By combining fractional resurfacing, targeted subcision, and regenerative collagen induction, we lift atrophic depressions and remodel skin texture for lasting smoothness.',
        typesTitle: 'Types of acne scars we treat',
        typesSubtext: 'Different scar types originate at varying dermal depths. Our dermatologists map your scar patterns to create a comprehensive, multi-layer treatment strategy.',
        types: [
            {
                title: 'Ice Pick Scars',
                desc: 'Deep, narrow columns extending into the deep dermis that respond exceptionally well to TCA CROSS.'
            },
            {
                title: 'Boxcar Scars',
                desc: 'Angular, round depressions with sharply defined edges treated with fractional laser resurfacing.'
            },
            {
                title: 'Rolling Scars',
                desc: 'Broad, shallow depressions caused by fibrotic bands pulling down the epidermis, ideal for subcision.'
            },
            {
                title: 'Post-Inflammatory Erythema',
                desc: 'Stubborn red or purplish macules left behind after active blemishes resolve, treated with laser toning.'
            }
        ],
        benefitsTitle: 'Benefits of acne scar treatment',
        benefitsSubtext: 'Our multi-layer remodeling techniques restore dermal volume and smoothen uneven skin contours.',
        benefitCardTitle: 'Restored Dermal Texture',
        benefitCardDesc: 'Rebuilds natural collagen and elastin frameworks to elevate depressions and harmonize skin surface contour.',
        benefitChecks: [
            'Noticeably softens depth and sharp margins of atrophic acne depressions.',
            'Promotes progressive, continuous collagen remodeling over several months.',
            'Minimally invasive options with optimized recovery and downtime.'
        ],
        faqs: [
            {
                q: 'How many sessions are required for acne scars?',
                a: 'Most patients achieve optimal results over 4 to 6 sessions spaced 4 weeks apart, allowing the skin adequate time for neo-collagenesis and epidermal renewal.'
            },
            {
                q: 'Are acne scar treatments painful?',
                a: 'We apply medical-grade topical anesthetic cream before energy-based or subcision procedures to ensure patient comfort throughout the session.'
            },
            {
                q: 'Are acne scar results permanent?',
                a: 'Yes. Collagen stimulated through fractional lasers and subcision provides permanent structural remodeling, provided new severe cystic acne is prevented.'
            },
            {
                q: 'What is the recovery downtime after laser scar treatment?',
                a: 'Mild erythema and micro-crusting typically last 3 to 5 days, during which skin-calming moisturizers and broad-spectrum sunscreen are prescribed.'
            },
            {
                q: 'Can active acne and scars be treated simultaneously?',
                a: 'We generally stabilize active inflammatory breakouts first to avoid spreading bacteria, before initiating intensive dermal scar revision.'
            }
        ]
    },
    {
        slug: 'pigmentation-treatment',
        title: 'Pigmentation / Melasma',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Pigmentation & Melasma Treatment in Trichy | Dermiiz Clinic',
        metaDesc: 'Specialized clinical treatments for melasma, freckles, sunspots, and hyperpigmentation at Dermiiz. Advanced laser toning and dermatological peels.',
        heroImg: '../assets/images/Skin_Patient_1.png',
        benefitsImg: '../assets/images/doctor_treatment_ouraprooch_section.png',
        introP1: 'Hyperpigmentation and melasma occur when melanocytes overproduce pigment due to UV radiation, hormonal fluctuations, inflammation, or genetic predisposition.',
        introP2: 'At Dermiiz, we take an integrative approach that regulates tyrosinase activity, breaks down existing epidermal and dermal pigment clusters, and reinforces cellular UV defense to prevent rebound hyperpigmentation.',
        typesTitle: 'Types of pigmentation we treat',
        typesSubtext: 'Understanding whether pigmentation is epidermal, dermal, or mixed is essential for selecting the correct clinical treatment modality.',
        types: [
            {
                title: 'Melasma',
                desc: 'Symmetrical brown or grey-brown patches typically appearing on cheeks, forehead, and bridge of the nose.'
            },
            {
                title: 'Post-Inflammatory Hyperpigmentation',
                desc: 'Darkened spots that develop after acne, burns, eczema, or clinical inflammation.'
            },
            {
                title: 'Solar Lentigines (Sun Spots)',
                desc: 'Localized flat brown spots caused by accumulated chronic ultraviolet sun exposure.'
            },
            {
                title: 'Periorbital & Perioral Darkening',
                desc: 'Focal pigmentation around the mouth and eyes linked to friction, genetic traits, and barrier fatigue.'
            }
        ],
        benefitsTitle: 'Benefits of pigmentation treatment',
        benefitsSubtext: 'Targeted pigment correction delivers uniform clarity and restores natural skin radiance.',
        benefitCardTitle: 'Uniform & Radiant Skin Tone',
        benefitCardDesc: 'Selectively clears excess melanin deposits while protecting surrounding healthy skin tissue.',
        benefitChecks: [
            'Visibly reduces stubborn melasma patches and sun-induced dark spots.',
            'Inhibits excessive melanin production at the cellular melanocyte level.',
            'Enhances overall skin luminosity and natural light reflection.'
        ],
        faqs: [
            {
                q: 'Why does melasma recur and how does Dermiiz manage it?',
                a: 'Melasma is hormonally and thermally sensitive. We combine low-fluence laser toning with strict UV/blue-light barriers and pigment suppressors to prevent rebound flares.'
            },
            {
                q: 'How many sessions of laser toning are recommended?',
                a: 'A typical protocol involves 6 to 8 sessions scheduled at bi-weekly intervals for gentle, progressive pigment clearance.'
            },
            {
                q: 'Is there any downtime with pigmentation peels?',
                a: 'Modern clinical peels feature zero-to-mild flaking over 2-3 days, allowing immediate resumption of work and routine daily activities.'
            },
            {
                q: 'Can pigmentation be treated during summer?',
                a: 'Yes, provided rigorous broad-spectrum SPF 50+ sunscreen application and sun-protective measures are maintained.'
            },
            {
                q: 'Are over-the-counter brightening creams safe?',
                a: 'Many OTC creams contain unauthorized steroids or high-concentration hydroquinone which can lead to ochronosis. Dermatologist guidance is essential.'
            }
        ]
    },
    {
        slug: 'anti-aging-treatment',
        title: 'Anti-Aging & Wrinkle',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Anti-Aging & Wrinkle Treatments in Trichy | Dermiiz Clinic',
        metaDesc: 'Reverse fine lines and restore youthful skin firmness with dermatologist-curated anti-aging treatments, collagen induction, and dermal therapies at Dermiiz.',
        heroImg: '../assets/images/doctor_skin_analyze.png',
        benefitsImg: '../assets/images/happy_patient.png',
        introP1: 'As the skin matures, intrinsic collagen synthesis decreases while environmental stressors accelerate elastin breakdown, leading to fine lines, volume loss, and skin laxity.',
        introP2: 'At Dermiiz, our anti-aging protocols combine deep tissue dermal stimulation, micro-infusions of biomimetic peptides, and cellular revitalization to firm skin architecture naturally without an unnatural appearance.',
        typesTitle: 'Aging signs we target',
        typesSubtext: 'We target both superficial epidermal fine lines and deep structural laxity to deliver balanced rejuvenation.',
        types: [
            {
                title: 'Dynamic Expression Lines',
                desc: 'Crow’s feet, forehead lines, and frown furrows accentuated by repetitive facial muscle movement.'
            },
            {
                title: 'Static Wrinkles & Crepey Skin',
                desc: 'Fine lines visible at rest caused by loss of dermal elasticity and natural hydration loss.'
            },
            {
                title: 'Midface Volume Depletion',
                desc: 'Hollowing in tear troughs and flattening of cheek contours due to structural fat pad shifts.'
            },
            {
                title: 'Jawline & Neck Laxity',
                desc: 'Loss of mandibular definition and subtle sagging addressed through targeted skin tightening.'
            }
        ],
        benefitsTitle: 'Benefits of anti-aging therapy',
        benefitsSubtext: 'Scientifically validated rejuvenation that enhances your natural facial vitality and skin resilience.',
        benefitCardTitle: 'Firm & Plumper Complexion',
        benefitCardDesc: 'Stimulates native fibroblasts to generate fresh, dense collagen bundles for long-lasting firmness.',
        benefitChecks: [
            'Smoothens fine lines and reduces the depth of visible wrinkles.',
            'Improves dermal elasticity, hydration retention, and skin bounce.',
            'Restores fresh, naturally rested facial contours without artificial tightness.'
        ],
        faqs: [
            {
                q: 'When should one begin preventive anti-aging treatments?',
                a: 'Dermal collagen production naturally starts declining around age 25. Starting preventive therapies in the late 20s or early 30s preserves tissue integrity.'
            },
            {
                q: 'Are anti-aging treatments safe for sensitive skin?',
                a: 'Yes. Every treatment plan is calibrated to your skin barrier threshold, utilizing calming actives and controlled energy levels.'
            },
            {
                q: 'How long do anti-aging results last?',
                a: 'Collagen stimulated by clinical treatments lasts 12 to 18 months, supported by healthy lifestyle and periodic maintenance sessions.'
            },
            {
                q: 'Do these procedures look natural?',
                a: 'Our clinical philosophy emphasizes subtle, elegant enhancement that respects your natural facial expressions and features.'
            },
            {
                q: 'What is the difference between topical serums and clinic treatments?',
                a: 'Topical skincare primarily hydrates the epidermis, while clinical modalities penetrate deep into the dermis where collagen remodeling occurs.'
            }
        ]
    },
    {
        slug: 'chemical-peels',
        title: 'Chemical Peels',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Dermatological Chemical Peels in Trichy | Dermiiz Clinic',
        metaDesc: 'Medical-grade chemical peels for glowing, blemish-free skin. Formulated with glycolic, salicylic, lactic, and mandelic acids for controlled cellular renewal.',
        heroImg: '../assets/images/about_skin_treatment_mission.png',
        benefitsImg: '../assets/images/doctor-patient_treatement.png',
        introP1: 'Chemical peels utilize bio-compatible hydroxy acids to dissolve intercellular desmosomes, gently exfoliating damaged outer epidermal layers and prompting cellular turnover.',
        introP2: 'At Dermiiz, we select precise acid concentrations and pH balances tailored to your skin indication—from gentle lunchtime enzyme peels to medium-depth multi-acid solutions for deep pigment and texture correction.',
        typesTitle: 'Types of peels we offer',
        typesSubtext: 'Every peel formulation is selected based on your skin type, sensitivity, and clinical treatment objectives.',
        types: [
            {
                title: 'Salicylic Acid Peels',
                desc: 'Lipophilic beta-hydroxy acid that penetrates oily pores to dissolve sebum and treat active acne.'
            },
            {
                title: 'Glycolic & Lactic Peels',
                desc: 'Alpha-hydroxy acids that gently loosen dead cells to restore dull skin and boost hydration.'
            },
            {
                title: 'Mandelic & Ferulic Peels',
                desc: 'Gentle, large-molecule peels designed specifically for sensitive or rosacea-prone skin types.'
            },
            {
                title: 'Combination TCA & Jessner Peels',
                desc: 'Advanced multi-action peels targeting stubborn sun damage, fine lines, and moderate scarring.'
            }
        ],
        benefitsTitle: 'Benefits of chemical peels',
        benefitsSubtext: 'Controlled clinical exfoliation uncovers radiant, velvety-soft skin while stimulating renewal.',
        benefitCardTitle: 'Rapid Cellular Renewal',
        benefitCardDesc: 'Accelerates epidermal regeneration, sloughing away dull cells to reveal fresh, luminous skin.',
        benefitChecks: [
            'Refines coarse skin texture and unclogs congested, enlarged pores.',
            'Fades superficial pigment spots, post-acne marks, and sun freckles.',
            'Enhances absorption and efficacy of your daily medical skincare products.'
        ],
        faqs: [
            {
                q: 'Will my skin peel excessively after a chemical peel?',
                a: 'Modern chemical peels are formulated with soothing buffers. Most superficial peels produce subtle micro-exfoliation without visible sheet-peeling.'
            },
            {
                q: 'How often can I get a chemical peel?',
                a: 'Superficial peels can be performed every 3 to 4 weeks, matching your natural 28-day epidermal renewal cycle.'
            },
            {
                q: 'Is a chemical peel painful?',
                a: 'Patients typically feel a mild tingling or warm sensation for 3 to 5 minutes, which completely subsides once the neutralizing solution is applied.'
            },
            {
                q: 'Can chemical peels be done before a special event?',
                a: 'Yes! Mild glow peels can be done 5 to 7 days before an event to achieve optimal radiance and a flawless makeup base.'
            },
            {
                q: 'What aftercare is required following a peel?',
                a: 'Keep the skin hydrated with a ceramide cream, avoid direct sun exposure, do not pick flaking skin, and wear SPF 50+ daily.'
            }
        ]
    },
    {
        slug: 'laser-toning',
        title: 'Laser Toning',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Laser Toning Treatment in Trichy | Q-Switched Nd:YAG | Dermiiz',
        metaDesc: 'Non-invasive Q-Switched laser toning for skin rejuvenation, pore reduction, and pigment clearing. Zero downtime treatment at Dermiiz Clinic.',
        heroImg: '../assets/images/doctor-patient_laser_treatment.png',
        benefitsImg: '../assets/images/Doctor_clinic_2.png',
        introP1: 'Laser Toning employs ultra-short nanosecond pulses of light to selectively shatter dermal pigment particles via acoustic shockwaves, without heating the surrounding skin.',
        introP2: 'At Dermiiz, our US FDA-approved laser technology allows safe, non-ablative rejuvenation for all skin phototypes. It gently clears deep-seated pigment, shrinks enlarged pores, and stimulates subdermal collagen with zero recovery downtime.',
        typesTitle: 'Indications treated by laser toning',
        typesSubtext: 'Versatile photo-acoustic laser technology designed for comprehensive skin tone and texture enhancement.',
        types: [
            {
                title: 'Deep Dermal Melasma',
                desc: 'Shatters resistant pigment granules located deep in the dermal layer without heat-induced rebound.'
            },
            {
                title: 'Enlarged Facial Pores',
                desc: 'Stimulates thermal contraction in the collagen sheath surrounding pores, visibly tightening them.'
            },
            {
                title: 'Dull & Weathered Complexion',
                desc: 'Removes micro-imperfections and stimulates microcirculation for an instant luminosity boost.'
            },
            {
                title: 'Post-Inflammatory Redness & Marks',
                desc: 'Helps fade vascular erythema and uneven post-blemish discoloration for an even complexion.'
            }
        ],
        benefitsTitle: 'Benefits of laser toning',
        benefitsSubtext: 'Gentle, photo-acoustic precision that delivers bright, refreshed skin with complete safety.',
        benefitCardTitle: 'Zero Downtime Rejuvenation',
        benefitCardDesc: 'Walk in and walk out with instantaneous radiance, making it ideal for busy professionals.',
        benefitChecks: [
            'Breakthrough photo-acoustic technology eliminates risk of thermal burns.',
            'Promotes natural collagen remodeling for smoother, firmer skin.',
            'Safe for all skin types, including sensitive and melanin-rich complexions.'
        ],
        faqs: [
            {
                q: 'How does laser toning differ from ablative lasers?',
                a: 'Ablative lasers remove outer skin layers and require days of healing. Laser toning is non-ablative, working beneath the surface with zero peeling or crusting.'
            },
            {
                q: 'Does laser toning cause any pain?',
                a: 'Most patients describe the sensation as a mild warm prickling or tiny rubber band snap. Anesthesia is generally not required.'
            },
            {
                q: 'How many sessions are typically required?',
                a: 'We usually recommend a series of 6 to 8 sessions spaced two weeks apart for cumulative and sustained pigment clearance.'
            },
            {
                q: 'Can I wear makeup after laser toning?',
                a: 'Yes, you can apply mineral makeup immediately after treatment, though applying moisturizer and sunscreen is prioritized.'
            },
            {
                q: 'Are results long-lasting?',
                a: 'Results remain long-lasting when supported by disciplined sun protection and periodic quarterly maintenance sessions.'
            }
        ]
    },
    {
        slug: 'medi-facial',
        title: 'Medi-Facial',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Medical-Grade Medi-Facials in Trichy | Dermiiz Clinic',
        metaDesc: 'Medical facials customized for your unique skin needs. Combines ultrasonic exfoliation, vacuum extraction, peptide infusions, and LED phototherapy.',
        heroImg: '../assets/images/about_facial_therapy.png',
        benefitsImg: '../assets/images/happy_skin_patient_faq.png',
        introP1: 'Unlike salon facials that rely on superficial creams and steam, Medi-Facials at Dermiiz are scientific, dermatologist-designed clinical procedures using medical-grade equipment and active serums.',
        introP2: 'Each Medi-Facial integrates ultrasonic deep cleansing, gentle hydra-dermabrasion, vacuum pore extraction, transdermal sonophoresis infusion, and therapeutic LED light to detoxify, hydrate, and revive fatigued skin.',
        typesTitle: 'Signature medi-facial therapies',
        typesSubtext: 'Customized protocols designed to address specific clinical concerns from dehydration to congested skin.',
        types: [
            {
                title: 'Hydra-Infusion Medi-Facial',
                desc: 'Multi-step vortex deep extraction paired with intense hyaluronic acid and antioxidant infusion.'
            },
            {
                title: 'Clarifying Acne Medi-Facial',
                desc: 'Targeted comedone extraction, anti-bacterial high frequency, and salicylic serum application.'
            },
            {
                title: 'Glow & Brightening Facial',
                desc: 'Vitamin C, glutathione, and arbutin infusion enhanced with LED phototherapy for dull skin.'
            },
            {
                title: 'Barrier Repair & Soothing Facial',
                desc: 'Ceramide and centella asiatica micro-infusion designed to calm rosacea and irritated barriers.'
            }
        ],
        benefitsTitle: 'Benefits of medi-facials',
        benefitsSubtext: 'Clinical-grade detoxification and nutrient delivery for immediate and long-term skin health.',
        benefitCardTitle: 'Intensive Deep Hydration',
        benefitCardDesc: 'Drives bio-nutrients deep past the stratum corneum for intense, lasting moisture saturation.',
        benefitChecks: [
            'Gently extracts blackheads and debris without manual squeezing trauma.',
            'Immediately restores radiant glow and velvety-smooth skin texture.',
            'Calms redness and inflammation using medical-grade LED phototherapy.'
        ],
        faqs: [
            {
                q: 'How is a Medi-Facial different from a salon facial?',
                a: 'Salon facials use generic cosmetic products and manual scrubbing. Medi-Facials utilize clinical equipment, sterile single-use tips, and pharmaceutical-grade active serums.'
            },
            {
                q: 'Is there any redness or downtime after a Medi-Facial?',
                a: 'No, you leave the clinic with calm, deeply hydrated, glowing skin with zero downtime.'
            },
            {
                q: 'How frequently should I get a Medi-Facial?',
                a: 'We recommend one session every 4 to 6 weeks to coincide with your skin’s natural cellular renewal timeline.'
            },
            {
                q: 'Is this suitable for sensitive or acne-prone skin?',
                a: 'Absolutely. We formulate the serums specifically to calm sensitive skin and clear congested pores safely.'
            },
            {
                q: 'Can Medi-Facials be combined with other treatments?',
                a: 'Yes, Medi-Facials serve as an excellent preparatory treatment prior to chemical peels or laser toning sessions.'
            }
        ]
    },
    {
        slug: 'skin-brightening',
        title: 'Skin Brightening',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Clinical Skin Brightening in Trichy | Dermiiz Skin Clinic',
        metaDesc: 'Restore your natural luminous complexion with safe, medically-supervised skin brightening treatments, antioxidant infusions, and clinical therapies.',
        heroImg: '../assets/images/Skin_Patient_1.png',
        benefitsImg: '../assets/images/happy_patient.png',
        introP1: 'Dull, uneven skin often results from oxidative stress, pollution particulate buildup, accumulated dead cellular debris, and unmitigated UV-induced melanin synthesis.',
        introP2: 'At Dermiiz, our Skin Brightening protocols focus on health-first illumination. We utilize clinically proven antioxidant complexes, gentle keratolytic resurfacing, and light therapy to reveal your natural, healthy radiance safely.',
        typesTitle: 'Brightening solutions we offer',
        typesSubtext: 'Comprehensive dermatological treatments tailored to restore vitality and uniform light reflection.',
        types: [
            {
                title: 'Antioxidant Dermal Infusions',
                desc: 'High-potency stabilized Vitamin C and botanical actives delivered deep into the epidermal layers.'
            },
            {
                title: 'Micro-Exfoliation Glow Peels',
                desc: 'Mild alpha-hydroxy formulations that dissolve dulling dead cells without visible peeling.'
            },
            {
                title: 'Photo-Rejuvenation Therapy',
                desc: 'Calibrated wavelengths of light that stimulate microcirculation and enhance cellular turnover.'
            },
            {
                title: 'Customized Home Brightening Regimens',
                desc: 'Prescription-strength tyrosinase inhibitors and barrier serums to sustain clinical results.'
            }
        ],
        benefitsTitle: 'Benefits of clinical brightening',
        benefitsSubtext: 'Safe, ethical dermatological care that enhances your natural, authentic skin beauty.',
        benefitCardTitle: 'Natural Radiant Glow',
        benefitCardDesc: 'Neutralizes free radical damage and evens out tone for a naturally illuminated complexion.',
        benefitChecks: [
            'Clears surface dullness and uneven, patchy skin tone.',
            'Fortifies the skin barrier against environmental pollutants.',
            'Formulated strictly without harmful bleaching agents or harsh mercury.'
        ],
        faqs: [
            {
                q: 'Does skin brightening change my natural skin tone?',
                a: 'No. Our treatments do not artificially bleach or alter your natural skin color; they clear accumulated sun damage and dullness to reveal your healthiest natural tone.'
            },
            {
                q: 'Are these treatments safe for long-term health?',
                a: 'Yes. All our brightening protocols are 100% steroid-free, mercury-free, and overseen by certified dermatologists.'
            },
            {
                q: 'How soon can I expect visible results?',
                a: 'Skin appears visibly fresher and more luminous immediately, with cumulative tone evening observed over 3 to 5 sessions.'
            },
            {
                q: 'Can I do this treatment before my wedding or event?',
                a: 'Yes, our brightening packages are among our most popular bridal and event-readiness therapies.'
            },
            {
                q: 'What should I do to maintain the brightness?',
                a: 'Daily broad-spectrum sunscreen application and dermatologist-prescribed antioxidant skincare are essential to lock in results.'
            }
        ]
    },
    {
        slug: 'psoriasis-treatment',
        title: 'Psoriasis Treatment',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Psoriasis Treatment & Management in Trichy | Dermiiz Clinic',
        metaDesc: 'Comprehensive, empathetic psoriasis care at Dermiiz. Dermatologist-led management plans including topical therapies, phototherapy, and systemic treatments.',
        heroImg: '../assets/images/doctor_consultation_ouraprooch_section.png',
        benefitsImg: '../assets/images/Doctor_clinic_1.png',
        introP1: 'Psoriasis is a chronic, immune-mediated dermatological condition characterized by accelerated keratinocyte proliferation, resulting in erythematous plaques with silvery scales.',
        introP2: 'At Dermiiz, we offer holistic, evidence-based psoriasis management. Our dermatologists customize treatment plans combining target-specific topicals, specialized phototherapy, barrier repair emollient protocols, and systemic immunomodulators to achieve sustained remission.',
        typesTitle: 'Variations of psoriasis we manage',
        typesSubtext: 'Accurate clinical classification ensures the most effective, safe, and targeted treatment approach.',
        types: [
            {
                title: 'Plaque Psoriasis',
                desc: 'The most common form, presenting as raised, inflamed red lesions covered with silvery white scales.'
            },
            {
                title: 'Guttate Psoriasis',
                desc: 'Small, drop-like red spots frequently triggered by bacterial throat infections in younger adults.'
            },
            {
                title: 'Scalp Psoriasis',
                desc: 'Persistent plaque formation and stubborn flaking along the hairline and scalp surface.'
            },
            {
                title: 'Inverse & Flexural Psoriasis',
                desc: 'Smooth, red lesions found in skin folds such as underarms, groin, and under breasts.'
            }
        ],
        benefitsTitle: 'Benefits of specialized psoriasis care',
        benefitsSubtext: 'Long-term disease control, symptom relief, and improved quality of daily life.',
        benefitCardTitle: 'Sustained Plaque Remission',
        benefitCardDesc: 'Slows epidermal cell turnover to relieve itchiness, scaling, and skin tightness effectively.',
        benefitChecks: [
            'Significant reduction in itching, burning, and visible skin scaling.',
            'Medically monitored therapies to ensure long-term organ and liver safety.',
            'Empathetic lifestyle, trigger management, and stress counseling.'
        ],
        faqs: [
            {
                q: 'Is psoriasis contagious?',
                a: 'No. Psoriasis is an autoimmune condition and is completely non-contagious. It cannot be passed from person to person.'
            },
            {
                q: 'Can psoriasis be cured permanently?',
                a: 'While there is currently no permanent cure, modern dermatological treatments can clear lesions completely and maintain long periods of symptom-free remission.'
            },
            {
                q: 'What triggers a psoriasis flare-up?',
                a: 'Common triggers include emotional stress, skin injuries (Koebner phenomenon), cold weather, infections, and certain medications.'
            },
            {
                q: 'How does scalp psoriasis differ from dandruff?',
                a: 'Dandruff produces diffuse, greasy flakes, whereas scalp psoriasis presents with thicker, sharply demarcated plaques with adherent silvery scales.'
            },
            {
                q: 'Are dietary modifications helpful?',
                a: 'An anti-inflammatory Mediterranean diet, limiting alcohol, and maintaining healthy weight have been clinically shown to support treatment response.'
            }
        ]
    },
    {
        slug: 'fungal-skin-infection',
        title: 'Fungal Skin Infection',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Fungal Skin Infection Treatment in Trichy | Dermiiz Clinic',
        metaDesc: 'Definitive cure for stubborn ringworm, tinea versicolor, and candidiasis. Dermatologist-led antifungal regimens to eliminate recurrent fungal infections.',
        heroImg: '../assets/images/doctor_patient_consultation.png',
        benefitsImg: '../assets/images/Doctor_clinic_2.png',
        introP1: 'Superficial fungal dermatophytoses (commonly known as ringworm or tinea) thrive in humid climates and can cause severe pruritus, circular scaling rashes, and persistent discomfort.',
        introP2: 'At Dermiiz, we specialize in eradicating resistant and recurrent fungal infections caused by improper OTC steroid cream usage. Our dermatologists prescribe targeted oral and topical antifungals alongside strict hygiene counseling for definitive clearance.',
        typesTitle: 'Fungal infections we treat',
        typesSubtext: 'Accurate identification through clinical examination ensures complete mycological cure.',
        types: [
            {
                title: 'Tinea Corporis & Cruris (Ringworm)',
                desc: 'Annular, itchy red rings with active scaly borders on the body, groin, or inner thighs.'
            },
            {
                title: 'Tinea Versicolor (Pityriasis)',
                desc: 'Hypo- or hyperpigmented patches on back and chest caused by Malassezia yeast overgrowth.'
            },
            {
                title: 'Tinea Pedis (Athlete’s Foot)',
                desc: 'Macerated, peeling skin and burning sensation between the toes and on soles.'
            },
            {
                title: 'Steroid-Modified Fungal Infections',
                desc: 'Extensive, atypical fungal rashes worsened by OTC combination steroid-antifungal creams.'
            }
        ],
        benefitsTitle: 'Benefits of proper fungal treatment',
        benefitsSubtext: 'Targeted fungal eradication that restores clear skin and prevents recurrent transmission.',
        benefitCardTitle: 'Complete Mycological Clearance',
        benefitCardDesc: 'Eradicates the underlying fungal spores to prevent recurrent outbreaks and permanent scarring.',
        benefitChecks: [
            'Immediate relief from distressing itching and burning sensations.',
            'Steroid-free protocols that restore natural skin barrier resilience.',
            'Clear guidelines to prevent reinfection among household family members.'
        ],
        faqs: [
            {
                q: 'Why does my fungal infection keep coming back?',
                a: 'Recurrence often occurs when treatment is stopped prematurely or when OTC combination steroid creams were used, which suppress immunity rather than killing spores.'
            },
            {
                q: 'How long does fungal treatment take?',
                a: 'A complete course usually takes 3 to 6 weeks. It is vital to continue medication for at least one week after all visual symptoms have resolved.'
            },
            {
                q: 'Can I use over-the-counter itch creams?',
                a: 'Avoid multi-action creams containing clobetasol or betamethasone, as topical steroids cause fungal spread and skin thinning.'
            },
            {
                q: 'How can I prevent reinfection at home?',
                a: 'Wash clothing and bedsheets in warm water, dry clothes in direct sunlight, iron inner garments, and avoid sharing towels.'
            },
            {
                q: 'Will the dark marks left behind after the infection fade?',
                a: 'Yes, post-inflammatory hyperpigmentation gradually fades over time once the active fungal infection is completely resolved.'
            }
        ]
    },
    {
        slug: 'skin-allergy',
        title: 'Skin Allergy',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Skin Allergy & Urticaria Treatment in Trichy | Dermiiz Clinic',
        metaDesc: 'Expert diagnostic allergy care for contact dermatitis, hives (urticaria), eczema, and drug eruptions at Dermiiz Skin and Hair Clinic.',
        heroImg: '../assets/images/doctor-patient_skin_analyze.png',
        benefitsImg: '../assets/images/happy_skin_patient_faq.png',
        introP1: 'Cutaneous allergic reactions occur when the immune system overreacts to specific environmental triggers, allergens, cosmetic ingredients, or systemic compounds.',
        introP2: 'At Dermiiz, our allergy specialists identify the specific allergen trigger through detailed clinical history and diagnostic patch assessments, providing fast-acting symptomatic relief and customized barrier-restoration protocols.',
        typesTitle: 'Common skin allergic conditions',
        typesSubtext: 'From sudden hives to chronic contact rashes, we provide tailored medical interventions.',
        types: [
            {
                title: 'Acute & Chronic Urticaria (Hives)',
                desc: 'Transient itchy wheals that appear suddenly across the body with intense burning.'
            },
            {
                title: 'Allergic Contact Dermatitis',
                desc: 'Localized red, blistering rashes caused by contact with metals, fragrances, or hair dyes.'
            },
            {
                title: 'Atopic Eczema',
                desc: 'Chronic dry, itchy skin flares linked to genetic barrier dysfunction and environmental allergens.'
            },
            {
                title: 'Photodermatitis',
                desc: 'Sun-induced allergic reactions triggered by UV exposure interacting with photosensitizing agents.'
            }
        ],
        benefitsTitle: 'Benefits of allergy management',
        benefitsSubtext: 'Rapid symptom relief combined with long-term preventative allergen avoidance strategies.',
        benefitCardTitle: 'Prompt Itch & Swelling Relief',
        benefitCardDesc: 'Stabilizes mast cells to alleviate intense itching, swelling, and epidermal distress rapidly.',
        benefitChecks: [
            'Accurate identification of specific contact allergens and food triggers.',
            'Non-sedating medical protocols for uninterrupted daily functioning.',
            'Strengthens compromised skin barrier to reduce future sensitivity.'
        ],
        faqs: [
            {
                q: 'How is a skin allergy diagnosed?',
                a: 'We conduct a comprehensive lifestyle history, physical examination, and when indicated, allergen testing or patch testing to isolate the causative agent.'
            },
            {
                q: 'Can sudden hives be life-threatening?',
                a: 'If hives are accompanied by swelling of lips, tongue, or difficulty breathing (anaphylaxis), immediate emergency care is required.'
            },
            {
                q: 'How long does a contact dermatitis flare take to heal?',
                a: 'Once the offending allergen is removed and clinical treatment started, most contact allergic reactions clear within 7 to 14 days.'
            },
            {
                q: 'Can hair dye cause severe skin allergy?',
                a: 'Yes, PPD (paraphenylenediamine) in permanent hair dyes is a frequent cause of contact dermatitis on the scalp, forehead, and eyelids.'
            },
            {
                q: 'What should I do immediately during an allergic flare?',
                a: 'Wash the area with cool water, avoid scrubbing or perfumed soaps, apply cold compresses, and consult a dermatologist promptly.'
            }
        ]
    },
    {
        slug: 'dark-circles',
        title: 'Dark Circles',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Dark Circles Treatment in Trichy | Under-Eye Rejuvenation | Dermiiz',
        metaDesc: 'Revitalize tired-looking eyes with dermatologist-backed under-eye treatments for hollows, hyperpigmentation, and puffiness at Dermiiz Clinic.',
        heroImg: '../assets/images/doctor_patient_face_analyze.png',
        benefitsImg: '../assets/images/happy_patient.png',
        introP1: 'The skin around the eyes is the thinnest on the human body, making it exceptionally vulnerable to visible vascular pooling, pigment accumulation, and age-related volume loss.',
        introP2: 'At Dermiiz, we assess the precise anatomical cause of your under-eye circles—whether structural hollowing (tear trough deformity), hyperpigmentation, or vascular congestion—to deliver a targeted, rejuvenating treatment program.',
        typesTitle: 'Causes of dark circles we address',
        typesSubtext: 'A customized clinical diagnosis determines whether pigment, vascularity, or volume is the key driver.',
        types: [
            {
                title: 'Pigmentary Periorbital Darkening',
                desc: 'Excess melanin deposition around the eye sockets caused by genetics, allergies, or chronic eye rubbing.'
            },
            {
                title: 'Structural Tear Trough Hollowing',
                desc: 'Deep shadows cast under the eyes due to natural fat pad loss and bone remodeling.'
            },
            {
                title: 'Vascular Bluish-Purple Pooling',
                desc: 'Sluggish microcirculation and visible blood vessels showing through delicate, translucent skin.'
            },
            {
                title: 'Under-Eye Fine Lines & Crepiness',
                desc: 'Collagen depletion and dehydration causing fine wrinkling and micro-shadowing.'
            }
        ],
        benefitsTitle: 'Benefits of under-eye rejuvenation',
        benefitsSubtext: 'Brighten, plump, and refresh delicate periorbital skin for a rested and youthful appearance.',
        benefitCardTitle: 'Rested & Bright Eyes',
        benefitCardDesc: 'Rebuilds delicate periorbital collagen while lightening excess melanin deposits.',
        benefitChecks: [
            'Visibly reduces deep hollows and tired-looking under-eye shadows.',
            'Improves dermal thickness to conceal visible microvascular pooling.',
            'Smoothens fine expression lines and periorbital skin texture.'
        ],
        faqs: [
            {
                q: 'Can eye creams alone eliminate dark circles?',
                a: 'Topical eye creams offer gentle hydration, but clinical treatments are necessary to address deep pigment, vascular pooling, or structural hollowing.'
            },
            {
                q: 'What treatments are best for under-eye hollowing?',
                a: 'Tear trough volume correction using hyaluronic dermal boosters or polynucleotide micro-injections effectively restores hollow contours.'
            },
            {
                q: 'Is under-eye laser treatment safe for the eyes?',
                a: 'Yes. We utilize specialized corneal eye shields and precision wavelengths designed specifically for delicate periorbital skin.'
            },
            {
                q: 'How many sessions will I need?',
                a: 'Most patients see significant improvement over 3 to 4 sessions of targeted peels, laser toning, or micro-needling infusions.'
            },
            {
                q: 'Are results permanent?',
                a: 'Results can be maintained long-term with good sleep hygiene, blue light protection, allergy control, and periodic touch-up sessions.'
            }
        ]
    },
    {
        slug: 'warts-moles',
        title: 'Warts / Moles',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Wart & Mole Removal in Trichy | Radiofrequency & Cryo | Dermiiz',
        metaDesc: 'Safe, scar-minimizing wart, mole, and skin tag removal using advanced radiofrequency and electro-cautery at Dermiiz Skin and Hair Clinic.',
        heroImg: '../assets/images/doctor-patient_laser_treatment.png',
        benefitsImg: '../assets/images/Doctor_clinic_1.png',
        introP1: 'Warts, skin tags, and benign moles can cause cosmetic concern, catch on clothing, or spread if virally induced by human papillomavirus (HPV).',
        introP2: 'At Dermiiz, we perform precise, virtually scar-free removals using modern radiofrequency ablation, electro-dessication, and cryotherapy under local anesthesia, ensuring rapid re-epithelialization and smooth healing.',
        typesTitle: 'Lesions we safely remove',
        typesSubtext: 'Every lesion is evaluated clinically with dermoscopy prior to removal to ensure complete safety.',
        types: [
            {
                title: 'Viral Warts (Verrucae)',
                desc: 'Contagious HPV-induced growths on hands, feet (plantar warts), or face requiring definitive ablation.'
            },
            {
                title: 'Acrochordons (Skin Tags)',
                desc: 'Harmless fleshy outgrowths commonly found in friction areas like the neck, underarms, and eyelids.'
            },
            {
                title: 'Benign Melanocytic Moles',
                desc: 'Flat or raised pigmented moles evaluated dermoscopically and removed for cosmetic comfort.'
            },
            {
                title: 'Seborrheic Keratoses & DPNs',
                desc: 'Dark brown raised spots on cheeks and forehead removed precisely with radiofrequency ablation.'
            }
        ],
        benefitsTitle: 'Benefits of clinical removal',
        benefitsSubtext: 'Quick, in-office procedure designed for minimal downtime and optimal cosmetic healing.',
        benefitCardTitle: 'Clean & Scar-Minimizing Results',
        benefitCardDesc: 'High-frequency micro-ablation precisely vaporizes lesion tissue while preserving surrounding skin.',
        benefitChecks: [
            'Performed under topical or local anesthesia for a completely painless experience.',
            'Quick 15 to 30 minute in-office procedure with same-day return to activities.',
            'Dermoscopic verification to confirm benign status before excision.'
        ],
        faqs: [
            {
                q: 'Will the removal leave a scar?',
                a: 'Radiofrequency ablation vaporizes only the target lesion with micro-precision, resulting in minimal micro-crusting that heals smoothly without prominent scarring.'
            },
            {
                q: 'Is the mole or wart removal procedure painful?',
                a: 'No. We apply topical numbing cream or local anesthesia, making the entire procedure completely comfortable.'
            },
            {
                q: 'Can warts grow back after removal?',
                a: 'Because warts are viral, treating them early prevents recurrence. We ensure the entire base of the lesion is cleared to minimize any recurrence risk.'
            },
            {
                q: 'How long does the treated spot take to heal?',
                a: 'A small micro-crust forms within 24 hours and naturally sheds in 5 to 7 days, leaving healthy, fresh pink skin underneath.'
            },
            {
                q: 'Can I shower or wash my face after the procedure?',
                a: 'Yes, you can gently wash the area after 24 hours and apply prescribed antibiotic ointment to support smooth healing.'
            }
        ]
    },
    {
        slug: 'vitiligo-treatment',
        title: 'Vitiligo',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Vitiligo Treatment in Trichy | Phototherapy & Repigmentation | Dermiiz',
        metaDesc: 'Evidence-based vitiligo management at Dermiiz. Targeted phototherapy, topical immunomodulators, and surgical melanocyte grafting for repigmentation.',
        heroImg: '../assets/images/doctor_skin_analyze.png',
        benefitsImg: '../assets/images/doctor-patient_skin_analyze.png',
        introP1: 'Vitiligo is an autoimmune condition where the body’s immune system mistakenly targets melanocytes, resulting in depigmented, macules and patches of skin.',
        introP2: 'At Dermiiz, we approach vitiligo with compassion and cutting-edge science. Our protocols focus on halting active disease progression through targeted immunomodulation, followed by stimulating follicular melanocyte reservoirs using narrow-band UVB and topical therapies.',
        typesTitle: 'Vitiligo presentations we treat',
        typesSubtext: 'Classifying stability and pattern is critical to designing the optimal repigmentation protocol.',
        types: [
            {
                title: 'Non-Segmental Vitiligo',
                desc: 'Symmetrical white patches appearing on hands, feet, wrists, and around body orifices.'
            },
            {
                title: 'Segmental Vitiligo',
                desc: 'Unilateral depigmentation localized to one dermatomal segment, usually in younger individuals.'
            },
            {
                title: 'Focal & Mucosal Vitiligo',
                desc: 'Isolated patches limited to small specific zones or involving lip and oral mucosa.'
            },
            {
                title: 'Stable Vitiligo (Surgical Candidates)',
                desc: 'Inactive patches that have not spread for over one year, ideal for melanocyte grafting.'
            }
        ],
        benefitsTitle: 'Benefits of vitiligo care',
        benefitsSubtext: 'Systematic approach to arrest active spread and restore natural melanocyte pigmentation.',
        benefitCardTitle: 'Targeted Repigmentation',
        benefitCardDesc: 'Stimulates dormant hair follicle melanocytes to migrate outward and re-pigment white patches.',
        benefitChecks: [
            'Stops active disease progression using safe, modern immunomodulators.',
            'Targeted Narrow-Band UVB therapy with minimal exposure to uninvolved skin.',
            'Comprehensive psychological support and guidance on camouflage options.'
        ],
        faqs: [
            {
                q: 'Is vitiligo curable?',
                a: 'Vitiligo can be effectively managed. Modern therapies frequently achieve complete or substantial repigmentation, particularly when treated early.'
            },
            {
                q: 'How does Narrow-Band UVB phototherapy work?',
                a: 'NB-UVB uses a specific 311nm wavelength that dampens local autoimmunity while stimulating melanocyte precursors in hair follicles to produce pigment.'
            },
            {
                q: 'How long does it take to see pigment return?',
                a: 'Initial perifollicular repigmentation typically appears as tiny brown spots within 6 to 8 weeks of consistent therapy.'
            },
            {
                q: 'Is vitiligo related to diet or food combinations?',
                a: 'No. Vitiligo is not caused by food habits or sour foods; it is an immune-mediated condition. A balanced, antioxidant-rich diet supports general health.'
            },
            {
                q: 'Who is a candidate for vitiligo surgery?',
                a: 'Patients with strictly stable vitiligo that has shown no new patches or growth for at least 12 months are eligible for melanocyte transplantation.'
            }
        ]
    },
    {
        slug: 'tattoo-removal',
        title: 'Tattoo Removal',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Laser Tattoo Removal in Trichy | Q-Switched & Picosecond | Dermiiz',
        metaDesc: 'Safe, complete laser tattoo removal at Dermiiz Skin Clinic. Advanced high-power Q-Switched lasers break down ink without scarring.',
        heroImg: '../assets/images/doctor-patient_laser_treatment.png',
        benefitsImg: '../assets/images/Doctor_clinic_2.png',
        introP1: 'Permanent tattoos consist of large ink pigment clusters deposited deep within the dermis, too large for the body’s immune phagocytes to break down naturally.',
        introP2: 'At Dermiiz, we utilize state-of-the-art Q-Switched laser technology that delivers rapid photo-acoustic pulses, shattering dense tattoo ink into microscopic particles that your lymphatic system naturally eliminates over time without scarring.',
        typesTitle: 'Tattoos we safely remove',
        typesSubtext: 'Different ink pigments require specific laser wavelengths for complete, clean clearance.',
        types: [
            {
                title: 'Professional Multi-Colored Tattoos',
                desc: 'Dense, machine-applied pigments across black, blue, green, and red color spectrums.'
            },
            {
                title: 'Amateur & Hand-Poked Tattoos',
                desc: 'Typically carbon or India ink placed at varying dermal depths, clearing in fewer sessions.'
            },
            {
                title: 'Cosmetic Tattoos (Eyebrow / Lip Liner)',
                desc: 'Pigment correction for faded or discolored cosmetic permanent makeup with micro-precision.'
            },
            {
                title: 'Traumatic Tattoos (Gravel / Road Rash)',
                desc: 'Foreign dirt or asphalt embedded beneath the skin following road accidents.'
            }
        ],
        benefitsTitle: 'Benefits of laser tattoo removal',
        benefitsSubtext: 'Dermatologist-administered laser clearance designed for maximum efficacy and zero tissue scarring.',
        benefitCardTitle: 'Ink Clearance Without Scarring',
        benefitCardDesc: 'Selective photothermolysis shatters ink granules while leaving surrounding healthy skin intact.',
        benefitChecks: [
            'Effective on both dark black/blue ink and stubborn colored pigments.',
            'Cooled skin contact and topical anesthesia for optimal procedural comfort.',
            'Clean, progressive fading with each sequential laser session.'
        ],
        faqs: [
            {
                q: 'How many sessions will it take to remove my tattoo?',
                a: 'Most professional tattoos require 6 to 10 sessions spaced 6 to 8 weeks apart, depending on ink density, colors, age, and location.'
            },
            {
                q: 'Does laser tattoo removal cause scarring?',
                a: 'When performed with medical Q-switched lasers by trained dermatologists, the risk of scarring is exceptionally low.'
            },
            {
                q: 'Is tattoo removal painful?',
                a: 'It feels similar to a rubber band snapping against the skin. We apply topical numbing cream and cold air cooling to ensure maximum comfort.'
            },
            {
                q: 'Can cosmetic eyebrow microblading be removed?',
                a: 'Yes, our precision lasers can target and fade unwanted or discolored microblading pigments safely.'
            },
            {
                q: 'What is the aftercare following a laser session?',
                a: 'Keep the area clean and dry for 48 hours, apply prescribed soothing ointment, and avoid sun exposure or swimming pools until healed.'
            }
        ]
    },
    {
        slug: 'laser-hair-removal',
        title: 'Laser Hair Removal',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Laser Hair Removal in Trichy | Painless Diode & Nd:YAG | Dermiiz',
        metaDesc: 'Permanent hair reduction with US FDA-approved laser technology at Dermiiz Clinic. Painless, safe for all Indian skin phototypes with contact cooling.',
        heroImg: '../assets/images/doctor-patient_laser_treatment.png',
        benefitsImg: '../assets/images/Skin_Patient_1.png',
        introP1: 'Traditional hair removal methods like waxing, shaving, and threading provide only temporary relief and frequently lead to ingrown hairs, folliculitis, and hyperpigmentation.',
        introP2: 'At Dermiiz, we utilize gold-standard Diode and Long-Pulsed Nd:YAG laser technology equipped with advanced ice-cool contact chillers. The laser precisely targets hair follicle melanin, disabling the growth center permanently without harming delicate skin.',
        typesTitle: 'Treatment areas we cover',
        typesSubtext: 'From small delicate areas to full-body packages, we provide tailored hair reduction programs.',
        types: [
            {
                title: 'Facial Hair Reduction',
                desc: 'Precision hair removal for upper lip, chin, jawline, sideburns, and PCOS-related facial hirsutism.'
            },
            {
                title: 'Underarms & Bikini Line',
                desc: 'Smooth, blemish-free skin eliminating ingrown hairs and recurrent razor burn.'
            },
            {
                title: 'Full Arms & Legs',
                desc: 'Comprehensive limb packages providing silky, low-maintenance skin year-round.'
            },
            {
                title: 'Men’s Beard Shaping & Chest/Back',
                desc: 'Clean beard line contouring to eliminate shaving rash and smooth reduction of chest and back hair.'
            }
        ],
        benefitsTitle: 'Benefits of laser hair removal',
        benefitsSubtext: 'Permanent freedom from painful waxing, razor burns, and chronic ingrown hair bumps.',
        benefitCardTitle: 'Silky Smooth, Low-Maintenance Skin',
        benefitCardDesc: 'Up to 90% permanent reduction in hair density, thickness, and regrowth velocity.',
        benefitChecks: [
            'Advanced contact cooling tip makes the treatment virtually painless.',
            'Completely eliminates painful ingrown hairs and post-shaving folliculitis.',
            'Safe, US FDA-approved wavelengths specifically calibrated for Indian skin.'
        ],
        faqs: [
            {
                q: 'How many sessions are needed for permanent hair reduction?',
                a: 'Typically 6 to 8 sessions spaced 4 to 6 weeks apart are required to catch all hair follicles in their active (anagen) growth phase.'
            },
            {
                q: 'Is laser hair removal painful?',
                a: 'Our integrated cooling chillers keep the skin surface cool and comfortable, turning what used to be painful into a gentle, tolerable warming sensation.'
            },
            {
                q: 'Can laser hair removal treat hormonal or PCOS hair growth?',
                a: 'Yes. We frequently treat PCOS-related hirsutism, often pairing laser treatments with internal dermatological and endocrinological guidance.'
            },
            {
                q: 'Should I shave before my laser appointment?',
                a: 'Yes, please shave the treatment area 24 hours prior to your session. Avoid waxing or plucking for at least 3 weeks beforehand.'
            },
            {
                q: 'Is it safe for darker skin tones?',
                a: 'Yes. Our clinic utilizes Long-Pulsed Nd:YAG and calibrated Diode lasers, which bypass epidermal melanin safely to reach the hair root.'
            }
        ]
    },
    {
        slug: 'botox-fillers',
        title: 'Botox / Fillers / Boosters',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Botox, Fillers & Skin Boosters in Trichy | Dermiiz Clinic',
        metaDesc: 'Subtle, natural facial enhancement with US FDA-approved neuromodulators, hyaluronic acid dermal fillers, and profhilo skin boosters at Dermiiz.',
        heroImg: '../assets/images/doctor_patient_face_analyze.png',
        benefitsImg: '../assets/images/happy_patient.png',
        introP1: 'Modern aesthetic dermatology is not about altering your face; it is about restoring harmony, replacing lost structural volume, and softening tension lines while preserving natural facial expression.',
        introP2: 'At Dermiiz, our certified aesthetic dermatologists specialize in micro-dosing and anatomically precise injections using authentic, US FDA-approved neuromodulators, cross-linked hyaluronic fillers, and bio-remodeling skin boosters.',
        typesTitle: 'Aesthetic injectable services',
        typesSubtext: 'Dermatologist-administered treatments designed for elegant, subtle, and natural-looking rejuvenation.',
        types: [
            {
                title: 'Neuromodulators (Botox)',
                desc: 'Softens dynamic wrinkles across forehead, crow’s feet, frown lines, and slims masseter muscles.'
            },
            {
                title: 'Dermal Fillers (Hyaluronic Acid)',
                desc: 'Restores volume to hollow cheeks, tear troughs, nasolabial folds, and adds subtle lip contour.'
            },
            {
                title: 'Skin Boosters (Profhilo / Polynucleotides)',
                desc: 'Bio-remodeling injections that deliver intensive deep-dermal hydration and skin elasticity.'
            },
            {
                title: 'Hyperhidrosis Injections',
                desc: 'Therapeutic neuromodulator injections to significantly reduce excessive underarm and palm sweating.'
            }
        ],
        benefitsTitle: 'Benefits of medical injectables',
        benefitsSubtext: 'Immediate to fast-acting rejuvenation that enhances your natural facial symmetry.',
        benefitCardTitle: 'Natural, Balanced Youthfulness',
        benefitCardDesc: 'Replenishes lost structural hyaluronic acid and relaxes hyperactive facial muscles seamlessly.',
        benefitChecks: [
            'Strictly natural-looking outcomes with zero "frozen" or over-filled appearance.',
            'Only authentic, US FDA-cleared products opened directly in front of the patient.',
            'Minimal recovery with most patients returning to social life immediately.'
        ],
        faqs: [
            {
                q: 'Will my face look frozen or unnatural after Botox?',
                a: 'Not at all. Our dermatologists use a micro-dose technique that preserves your natural expressions while softening wrinkle lines.'
            },
            {
                q: 'How long do Botox and filler results last?',
                a: 'Botox typically lasts 3 to 6 months. Hyaluronic dermal fillers last between 9 and 18 months depending on the specific product and area treated.'
            },
            {
                q: 'Are dermal fillers reversible?',
                a: 'Yes. All hyaluronic acid fillers can be completely dissolved using an enzyme called hyaluronidase if adjustment is ever desired.'
            },
            {
                q: 'What is the difference between skin boosters and dermal fillers?',
                a: 'Dermal fillers add volume and structure to specific hollows. Skin boosters spread evenly beneath the skin to improve hydration, glow, and elasticity without adding volume.'
            },
            {
                q: 'Is there any downtime after injectables?',
                a: 'Minor localized redness or swelling usually settles within a few hours. Mild bruising can be easily concealed with tinted moisturizer.'
            }
        ]
    },
    {
        slug: 'glutathione-antioxidants',
        title: 'Glutathione & Antioxidants',
        category: 'Skin',
        categoryTitle: 'Clinical Dermatology',
        seoTitle: 'Glutathione & Antioxidant Therapy in Trichy | Dermiiz Clinic',
        metaDesc: 'Medically-supervised antioxidant therapies and high-potency glutathione formulations for cellular detoxification and skin glow at Dermiiz.',
        heroImg: '../assets/images/about_facial_therapy.png',
        benefitsImg: '../assets/images/doctor_treatment_ouraprooch_section.png',
        introP1: 'Glutathione is the body’s master endogenous antioxidant, responsible for neutralizing free radicals, eliminating heavy metal toxins, and regulating cellular melanin synthesis.',
        introP2: 'At Dermiiz, we offer medically monitored, safe antioxidant therapies that pair pharmaceutical-grade glutathione with Vitamin C, alpha-lipoic acid, and micronutrients to enhance cellular detoxification, skin luminosity, and overall vitality.',
        typesTitle: 'Antioxidant therapies we provide',
        typesSubtext: 'Scientifically calibrated formulations administered under strict dermatological oversight.',
        types: [
            {
                title: 'Master Antioxidant Protocol',
                desc: 'Pharmaceutical-grade glutathione paired with bio-available Vitamin C for systemic free-radical defense.'
            },
            {
                title: 'Cellular Detoxification Infusions',
                desc: 'Micronutrient blends designed to neutralize environmental toxic load and revitalize tired skin.'
            },
            {
                title: 'Pigment Regulation Blends',
                desc: 'Shifts melanin production pathway toward lighter, brighter pheomelanin for an even complexion.'
            },
            {
                title: 'Topical & Oral Supportive Regimens',
                desc: 'Dermatologist-prescribed liposomal antioxidants to maintain cellular defense daily.'
            }
        ],
        benefitsTitle: 'Benefits of antioxidant therapy',
        benefitsSubtext: 'Systemic cellular support that delivers full-body skin radiance and vitality.',
        benefitCardTitle: 'Deep Cellular Rejuvenation',
        benefitCardDesc: 'Combats systemic oxidative stress and boosts liver detoxification pathways naturally.',
        benefitChecks: [
            'Improves full-body skin clarity, radiance, and evenness of tone.',
            'Neutralizes UV-induced free radicals and slows down premature aging.',
            'Administered strictly in clinical hospital-grade sterile environments.'
        ],
        faqs: [
            {
                q: 'Is glutathione safe when administered clinically?',
                a: 'Yes. Glutathione is a naturally occurring peptide in human cells. Under medical supervision with correct dosages and laboratory monitoring, it is well-tolerated.'
            },
            {
                q: 'How many sessions are typically required?',
                a: 'A standard antioxidant protocol involves 6 to 10 sessions scheduled once or twice weekly, followed by oral maintenance.'
            },
            {
                q: 'How does glutathione lighten or brighten skin?',
                a: 'It deactivates the enzyme tyrosinase and shifts melanogenesis from dark eumelanin toward lighter pheomelanin.'
            },
            {
                q: 'Are laboratory tests required beforehand?',
                a: 'Yes. We routinely evaluate baseline liver and renal function tests before initiating systemic antioxidant programs.'
            },
            {
                q: 'How long do the results last?',
                a: 'Results can be sustained long term with a healthy lifestyle, antioxidant-rich diet, sunscreen usage, and maintenance doses.'
            }
        ]
    },

    // ==========================================
    // HAIR SERVICES (10)
    // ==========================================
    {
        slug: 'hair-fall-treatment',
        title: 'Hair Fall Treatment',
        category: 'Hair',
        categoryTitle: 'Trichology & Restoration',
        seoTitle: 'Hair Fall Treatment in Trichy | Trichologist Care | Dermiiz',
        metaDesc: 'Comprehensive hair fall diagnostics and clinical treatments at Dermiiz Clinic. Specialized therapies for telogen effluvium, nutritional shedding, and stress loss.',
        heroImg: '../assets/images/Hair_care_service.png',
        benefitsImg: '../assets/images/doctor-patient_hair_analyze.png',
        introP1: 'Excessive daily hair shedding can be distressing and stems from diverse root causes including nutritional deficits, stress, hormonal shifts, thyroid imbalance, or post-febrile illness.',
        introP2: 'At Dermiiz, our trichologists utilize high-resolution digital dermoscopy to examine scalp follicle health, shaft diameter, and vascularity. We formulate an evidence-based multi-tier plan targeting root nutritional, hormonal, and follicular needs.',
        typesTitle: 'Hair loss conditions we treat',
        typesSubtext: 'Accurate trichological diagnostic mapping ensures targeted treatment rather than generic hair oils.',
        types: [
            {
                title: 'Telogen Effluvium (Sudden Shedding)',
                desc: 'Diffuse, rapid shedding triggered by high stress, post-fever illness, surgery, or childbirth.'
            },
            {
                title: 'Nutritional & Deficiency Hair Fall',
                desc: 'Hair thinning linked to ferritin (iron), Vitamin D3, B12, or protein absorption shortfalls.'
            },
            {
                title: 'Hormonal Hair Loss',
                desc: 'Hair thinning driven by thyroid dysfunction, PCOS, or postpartum hormone shifts.'
            },
            {
                title: 'Early Stage Follicular Thinning',
                desc: 'Progressive miniaturization of hair shafts requiring early clinical intervention to prevent baldness.'
            }
        ],
        benefitsTitle: 'Benefits of clinical hair fall care',
        benefitsSubtext: 'Halts excessive shedding, awakens dormant follicles, and restores hair shaft thickness.',
        benefitCardTitle: 'Reduced Shedding & Fuller Density',
        benefitCardDesc: 'Stabilizes the hair growth cycle, extending the anagen (active growth) phase.',
        benefitChecks: [
            'Noticeable reduction in hair fall counts within 4 to 6 weeks.',
            'Strengthens hair roots and increases tensile shaft strength.',
            'Personalized medical nutrition and clinical scalp serum therapy.'
        ],
        faqs: [
            {
                q: 'How much daily hair fall is considered normal?',
                a: 'Losing 50 to 100 strands per day is normal. Consistently losing significantly more or noticing thinning patches requires trichological assessment.'
            },
            {
                q: 'How is hair fall diagnosed at Dermiiz?',
                a: 'We perform digital video trichoscopy to evaluate follicular density, hair shaft diameter variations, scalp sebum, and order relevant blood panels.'
            },
            {
                q: 'Can hair fall be reversed without surgery?',
                a: 'Yes. Most cases of diffuse hair fall and early androgenetic thinning respond remarkably well to medical therapies and regenerative treatments.'
            },
            {
                q: 'Will commercial hair oils stop my hair fall?',
                a: 'Oils moisturize hair strands, but they do not penetrate the dermal hair bulb where growth actually occurs. Medical intervention is required.'
            },
            {
                q: 'When will I see new hair growth?',
                a: 'Hair grows approximately 1 cm per month. Initial reduction in shedding occurs in 4-6 weeks, with visible new growth appearing around 3 months.'
            }
        ]
    },
    {
        slug: 'prp-hair-treatment',
        title: 'PRP Hair Treatment',
        category: 'Hair',
        categoryTitle: 'Trichology & Restoration',
        seoTitle: 'PRP Hair Treatment in Trichy | Platelet-Rich Plasma | Dermiiz',
        metaDesc: 'Platelet-Rich Plasma (PRP) hair therapy at Dermiiz Clinic. Autologous concentrated growth factors injected to revive thinning follicles and spur regrowth.',
        heroImg: '../assets/images/doctor-patient_hair_analyze.png',
        benefitsImg: '../assets/images/Doctor_clinic_1.png',
        introP1: 'Platelet-Rich Plasma (PRP) therapy is an autologous regenerative treatment that harnesses the concentrated healing growth factors from your own blood to awaken dormant hair follicles.',
        introP2: 'At Dermiiz, we utilize double-spin clinical centrifugation to isolate high-concentration platelet plasma enriched with PDGF, VEGF, and FGF. Micro-injected into thinning scalp zones, it stimulates microvascular supply and reverses follicle miniaturization.',
        typesTitle: 'Indications for PRP hair therapy',
        typesSubtext: 'Natural, biocompatible regenerative stimulation suitable for men and women experiencing thinning.',
        types: [
            {
                title: 'Early to Moderate Androgenetic Alopecia',
                desc: 'Male and female pattern thinning responding with shaft thickening and revived density.'
            },
            {
                title: 'Postpartum Hair Thinning',
                desc: 'Accelerates scalp recovery and follicular reactivation following childbirth hormonal shifts.'
            },
            {
                title: 'Traction Alopecia Recovery',
                desc: 'Re-energizes follicles fatigued by tight hairstyles or cosmetic heat styling.'
            },
            {
                title: 'Post-Hair Transplant Support',
                desc: 'Nourishes newly implanted hair grafts and accelerates donor-site tissue healing.'
            }
        ],
        benefitsTitle: 'Benefits of PRP hair restoration',
        benefitsSubtext: 'Harnesses your body’s own natural growth factors for safe, non-surgical hair revitalization.',
        benefitCardTitle: 'Autologous Follicle Activation',
        benefitCardDesc: 'Delivers concentrated bioactive cytokines directly to the hair bulb to jumpstart new growth.',
        benefitChecks: [
            '100% natural and biocompatible with zero risk of allergic reaction.',
            'Increases hair shaft thickness, density, and overall scalp coverage.',
            'Quick 45-minute procedure with local numbing for optimal comfort.'
        ],
        faqs: [
            {
                q: 'How many PRP sessions are needed?',
                a: 'We typically recommend an initial course of 4 to 6 sessions scheduled 4 weeks apart, followed by maintenance sessions every 4 to 6 months.'
            },
            {
                q: 'Is PRP hair therapy painful?',
                a: 'We apply topical anesthetic cream or nerve blocks to ensure the micro-injections are virtually painless.'
            },
            {
                q: 'How soon can I wash my hair after PRP?',
                a: 'You can wash your hair with a gentle shampoo 24 hours after the procedure.'
            },
            {
                q: 'Are there any side effects with PRP?',
                a: 'Because PRP is derived from your own blood, there is zero risk of allergic rejection. Mild scalp soreness for a few hours is normal.'
            },
            {
                q: 'Can PRP be combined with other hair treatments?',
                a: 'Yes! Combining PRP with medical therapy (such as minoxidil or peptides) and low-level laser therapy yields synergistic results.'
            }
        ]
    },
    {
        slug: 'gfc-hair-therapy',
        title: 'GFC Hair Therapy',
        category: 'Hair',
        categoryTitle: 'Trichology & Restoration',
        seoTitle: 'GFC Hair Therapy in Trichy | Advanced Growth Factor | Dermiiz',
        metaDesc: 'Next-generation Growth Factor Concentrate (GFC) hair therapy at Dermiiz. Highly purified, cell-free growth factors for faster, painless hair regrowth.',
        heroImg: '../assets/images/complete_care_hair_analyze.jpg',
        benefitsImg: '../assets/images/doctor-patient_hair_analyze.png',
        introP1: 'Growth Factor Concentrate (GFC) is the next evolution in autologous regenerative trichology, delivering a pure, cell-free formulation of essential hair-stimulating growth factors.',
        introP2: 'Unlike traditional PRP which contains red and white blood cells that can cause temporary inflammation, GFC extracts only pure growth factors (PDGF, VEGF, EGF, IGF-1) into an acellular concentrate, resulting in higher potency, zero pain, and faster clinical regrowth.',
        typesTitle: 'Candidates for GFC hair therapy',
        typesSubtext: 'Ideal for patients seeking a superior, painless alternative to conventional PRP therapy.',
        types: [
            {
                title: 'Androgenetic Pattern Thinning',
                desc: 'Effectively halts miniaturization along crown, vertex, and frontal hairline zones.'
            },
            {
                title: 'Diffuse Hair Thinning in Women',
                desc: 'Restores volume along widening partition lines and improves hair density.'
            },
            {
                title: 'Patients Sensitive to Needle Discomfort',
                desc: 'GFC is smooth and non-viscous, injected effortlessly with ultra-fine micro-needles.'
            },
            {
                title: 'Stubborn Non-Responsive Hair Fall',
                desc: 'Delivers superior concentrations of pure growth factors when standard serums stall.'
            }
        ],
        benefitsTitle: 'Benefits of GFC hair therapy',
        benefitsSubtext: 'Higher concentration of pure growth factors with zero cellular debris and minimal discomfort.',
        benefitCardTitle: 'Pure Concentrated Growth Factors',
        benefitCardDesc: 'Up to 3x higher concentration of active growth factors compared to traditional PRP.',
        benefitChecks: [
            'Virtually painless, acellular formulation with zero post-procedure swelling.',
            'Faster visible response in hair count and shaft diameter.',
            'Strictly closed, sterile system ensuring utmost safety and purity.'
        ],
        faqs: [
            {
                q: 'How is GFC different from standard PRP?',
                a: 'PRP contains platelets and white blood cells. GFC breaks open platelets to extract only pure growth factors into an acellular serum, eliminating pain and improving potency.'
            },
            {
                q: 'How many GFC sessions are recommended?',
                a: 'Most patients achieve excellent results with 3 to 4 sessions spaced monthly.'
            },
            {
                q: 'How long does a GFC session take?',
                a: 'Blood processing takes approximately 40 minutes, while micro-injection takes only 10 to 15 minutes.'
            },
            {
                q: 'Is there any downtime after GFC therapy?',
                a: 'There is zero downtime. You can immediately return to work, driving, and routine activities.'
            },
            {
                q: 'When do results become visible?',
                a: 'Reduction in hair fall is commonly observed after the first session, with noticeable density improvement after the second.'
            }
        ]
    },
    {
        slug: 'hair-transplant',
        title: 'Hair Transplant',
        category: 'Hair',
        categoryTitle: 'Trichology & Restoration',
        seoTitle: 'Hair Transplant in Trichy | Advanced FUE & DHI Technique | Dermiiz',
        metaDesc: 'Permanent, natural-looking hair transplantation at Dermiiz Clinic. Follicular Unit Extraction (FUE) with artistic hairline design and high graft survival.',
        heroImg: '../assets/images/doctor-patient_hair_analyze.png',
        benefitsImg: '../assets/images/Doctor_clinic_1.png',
        introP1: 'When hair follicles have undergone complete fibrosis and atrophy, surgical transplantation of genetically DHT-resistant follicles from the donor occipital area is the only permanent solution.',
        introP2: 'At Dermiiz, our surgical hair restoration team employs advanced Follicular Unit Extraction (FUE) and Direct Hair Implantation (DHI) techniques. Every graft is harvested and implanted at the precise natural angle and density to achieve an undetectable, lifelong natural hairline.',
        typesTitle: 'Transplant techniques we specialize in',
        typesSubtext: 'State-of-the-art micro-surgical techniques tailored to your degree of baldness.',
        types: [
            {
                title: 'Advanced Micro-FUE',
                desc: 'Individual follicular unit extraction using micro-punches leaving no linear scars.'
            },
            {
                title: 'Direct Hair Implantation (DHI)',
                desc: 'Graft placement using specialized implanter pens controlling depth, angle, and direction.'
            },
            {
                title: 'Beard & Mustache Reconstruction',
                desc: 'Restoration of patchy facial hair with dense, contoured graft placement.'
            },
            {
                title: 'Corrective & Revision Transplants',
                desc: 'Re-designing unnatural previous hair transplants to restore natural aesthetic balance.'
            }
        ],
        benefitsTitle: 'Benefits of hair transplantation',
        benefitsSubtext: 'Permanent, lifelong hair restoration that you can wash, cut, and style like natural hair.',
        benefitCardTitle: 'Permanent, Natural Hairline',
        benefitCardDesc: 'Transplanted follicles are genetically resistant to DHT and continue to grow naturally for life.',
        benefitChecks: [
            'Artistic hairline design matched to your facial dimensions and age.',
            'High graft survival rate exceeding 95% with gentle micro-handling.',
            'Virtually scar-free donor site recovery using micro-motorized punches.'
        ],
        faqs: [
            {
                q: 'Are hair transplant results permanent?',
                a: 'Yes. Grafts harvested from the permanent donor zone (back and sides of head) are genetically programmed to resist DHT-mediated baldness.'
            },
            {
                q: 'Is the hair transplant procedure painful?',
                a: 'The procedure is performed under local anesthesia. Patients are awake, comfortable, and can watch movies or listen to music throughout.'
            },
            {
                q: 'When will the transplanted hair start growing?',
                a: 'Transplanted hairs naturally shed within 3-4 weeks (shock loss). New permanent growth begins at month 3, with full density achieved at 9 to 12 months.'
            },
            {
                q: 'Will anyone be able to tell I had a hair transplant?',
                a: 'Our surgeons focus on natural micro-irregularity and correct exit angles, ensuring the final hairline looks completely natural.'
            },
            {
                q: 'How many days of rest are needed after surgery?',
                a: 'Most patients resume desk jobs within 2 to 3 days. Strenuous gym exercise should be avoided for two weeks.'
            }
        ]
    },
    {
        slug: 'dandruff-scalp-treatment',
        title: 'Dandruff & Scalp Treatment',
        category: 'Hair',
        categoryTitle: 'Trichology & Restoration',
        seoTitle: 'Dandruff & Scalp Treatment in Trichy | Scalp Detox | Dermiiz',
        metaDesc: 'Eliminate stubborn dandruff, scalp buildup, and seborrheic dermatitis at Dermiiz Clinic. Medical scalp peels, antifungals, and microbiome balancing.',
        heroImg: '../assets/images/Hair_care_service.png',
        benefitsImg: '../assets/images/doctor_patient_scalp_analyze.png',
        introP1: 'Dandruff is not merely dry skin; it is a chronic inflammatory condition linked to Malassezia yeast overgrowth, sebum oxidation, and impaired scalp barrier function.',
        introP2: 'At Dermiiz, our clinical scalp detox treatments remove stubborn fungal biofilms, unclog suffocated hair follicles, soothe persistent pruritus, and restore a balanced scalp microbiome for clean, flake-free hair health.',
        typesTitle: 'Scalp conditions we treat',
        typesSubtext: 'Accurate differentiation between oily dandruff, dry flakes, and psoriasis ensures the right cure.',
        types: [
            {
                title: 'Seborrheic Dermatitis',
                desc: 'Greasy, yellowish adherent flakes accompanied by red, inflamed, and itchy scalp patches.'
            },
            {
                title: 'Dry Pityriasis Flaking',
                desc: 'Fine, dry white flakes caused by scalp dehydration, harsh shampoos, and barrier disruption.'
            },
            {
                title: 'Scalp Folliculitis',
                desc: 'Tender, itchy pustules and pimples along the scalp caused by bacterial and fungal infection.'
            },
            {
                title: 'Product Buildup & Scalp Congestion',
                desc: 'Asphyxiated follicles weighed down by silicones, styling gels, and hard water minerals.'
            }
        ],
        benefitsTitle: 'Benefits of clinical scalp therapy',
        benefitsSubtext: 'Deep cleansing and antifungal control that revitalizes the scalp environment for strong hair.',
        benefitCardTitle: 'Flake-Free, Soothed Scalp',
        benefitCardDesc: 'Dissolves stubborn microbial crusts and eliminates the persistent itch-scratch cycle.',
        benefitChecks: [
            'Immediate relief from intense itching, redness, and scalp irritation.',
            'Unclogs hair follicle openings to promote healthier, thicker hair emergence.',
            'Formulates customized maintenance regimens to prevent future relapses.'
        ],
        faqs: [
            {
                q: 'Why do anti-dandruff shampoos stop working after some time?',
                a: 'Malassezia yeast can develop resistance to single-active shampoos. Our trichologists rotate synergistic antifungal actives and use scalp peels to break biofilms.'
            },
            {
                q: 'Can severe dandruff cause hair loss?',
                a: 'Yes. Scalp inflammation, sebum buildup, and aggressive scratching damage hair roots, triggering telogen effluvium.'
            },
            {
                q: 'What does a clinical scalp detox session include?',
                a: 'It includes scalp trichoscopy, salicylic-keratolytic exfoliation, deep ultrasonic cleansing, soothing peptide serum infusion, and LED light therapy.'
            },
            {
                q: 'Should I apply hair oil if I have dandruff?',
                a: 'No! Applying hair oil feeds the Malassezia yeast, worsening fungal growth and inflammation. Oil should be avoided until the scalp is completely clear.'
            },
            {
                q: 'How many sessions are typically required?',
                a: 'Most patients achieve dramatic relief within 2 to 4 sessions, supported by a personalized medical maintenance routine.'
            }
        ]
    },
    {
        slug: 'alopecia-treatment',
        title: 'Alopecia / Hair Loss',
        category: 'Hair',
        categoryTitle: 'Trichology & Restoration',
        seoTitle: 'Alopecia Treatment in Trichy | Alopecia Areata & Scarring | Dermiiz',
        metaDesc: 'Specialized alopecia treatments at Dermiiz Clinic. Targeted medical care for alopecia areata, traction alopecia, and scarring hair loss disorders.',
        heroImg: '../assets/images/doctor_patient_scalp_analyze.png',
        benefitsImg: '../assets/images/Doctor_clinic_2.png',
        introP1: 'Alopecia encompasses complex hair loss disorders ranging from circular autoimmune patches (alopecia areata) to irreversible inflammatory scarring alopecias (lichen planopilaris, frontal fibrosing alopecia).',
        introP2: 'At Dermiiz, our dermatologists conduct meticulous trichoscopic and histopathological evaluations to differentiate non-scarring from scarring alopecias, initiating timely immunomodulatory and regenerative therapies to salvage hair follicles.',
        typesTitle: 'Forms of alopecia we treat',
        typesSubtext: 'Early diagnosis is critical to preventing permanent follicle loss in inflammatory disorders.',
        types: [
            {
                title: 'Alopecia Areata',
                desc: 'Sudden, round or oval smooth bald patches caused by autoimmune attacks on hair bulbs.'
            },
            {
                title: 'Alopecia Totalis / Universalis',
                desc: 'Extensive autoimmune hair loss affecting the entire scalp or complete body hair.'
            },
            {
                title: 'Traction Alopecia',
                desc: 'Hairline recession caused by prolonged mechanical tension from tight braiding or turbans.'
            },
            {
                title: 'Cicatricial (Scarring) Alopecia',
                desc: 'Inflammatory conditions like LPP and FFA requiring rapid medical intervention to preserve follicles.'
            }
        ],
        benefitsTitle: 'Benefits of specialized alopecia care',
        benefitsSubtext: 'Targeted immune suppression and follicle-preserving therapies administered by dermatologists.',
        benefitCardTitle: 'Targeted Follicular Rescue',
        benefitCardDesc: 'Dampens autoimmune inflammation around the hair follicle to allow hair re-growth.',
        benefitChecks: [
            'High-resolution trichoscopy to monitor active hair margin markers (exclamation mark hairs).',
            'Intralesional micro-injections for targeted, localized steroid delivery with minimal systemic absorption.',
            'Advanced JAK-inhibitor therapy guidance for severe and refractory alopecia areata.'
        ],
        faqs: [
            {
                q: 'Can hair grow back in alopecia areata?',
                a: 'Yes. In alopecia areata, the hair follicles remain alive beneath the scalp. Suppressing the local autoimmune attack allows follicles to resume normal growth.'
            },
            {
                q: 'What is the treatment for round bald patches?',
                a: 'Intralesional corticosteroid micro-injections combined with topical immunomodulators are the frontline clinical treatment, showing regrowth in 4-6 weeks.'
            },
            {
                q: 'Is alopecia areata contagious?',
                a: 'No. Alopecia areata is an autoimmune condition and is completely non-contagious.'
            },
            {
                q: 'What is scarring alopecia and how is it different?',
                a: 'In scarring alopecia, inflammation destroys the hair follicle stem cells permanently, replacing them with scar tissue. Early treatment halts further permanent loss.'
            },
            {
                q: 'Does stress cause alopecia areata?',
                a: 'Severe emotional or physical stress can trigger or exacerbate autoimmune episodes in genetically susceptible individuals.'
            }
        ]
    },
    {
        slug: 'mesotherapy-hair',
        title: 'Mesotherapy for Hair',
        category: 'Hair',
        categoryTitle: 'Trichology & Restoration',
        seoTitle: 'Hair Mesotherapy in Trichy | Nutrient Micro-Infusion | Dermiiz',
        metaDesc: 'Supercharge thinning hair with clinical hair mesotherapy at Dermiiz. Micro-infusions of peptides, biotin, amino acids, and vasodilators direct to roots.',
        heroImg: '../assets/images/doctor-patient_hair_analyze.png',
        benefitsImg: '../assets/images/Doctor_clinic_1.png',
        introP1: 'Oral supplements often fail to reach dermal hair follicles in sufficient therapeutic concentrations due to systemic metabolism and limited scalp micro-circulation.',
        introP2: 'Hair Mesotherapy at Dermiiz delivers a potent cocktail of bio-peptides, essential amino acids, co-enzymes, vitamins, and natural DHT blockers directly into the middle layer of the scalp (mesoderm) where follicles reside, providing immediate nourishment.',
        typesTitle: 'Indications for hair mesotherapy',
        typesSubtext: 'A highly effective, minimally invasive therapy suitable for active shedding and thinning.',
        types: [
            {
                title: 'Nutritional Deficiency Hair Thinning',
                desc: 'Restores essential micronutrients and zinc directly to depleted hair roots.'
            },
            {
                title: 'Early Genetic Hair Thinning',
                desc: 'Infuses botanical DHT-blockers and copper tripeptides to counter miniaturization.'
            },
            {
                title: 'Seasonal & Post-Illness Shedding',
                desc: 'Provides an immediate metabolic boost to kickstart follicles back into anagen phase.'
            },
            {
                title: 'Dull, Brittle & Weak Hair Strands',
                desc: 'Improves shaft diameter, natural shine, and elasticity from the root level.'
            }
        ],
        benefitsTitle: 'Benefits of hair mesotherapy',
        benefitsSubtext: 'Direct nutrient delivery that bypasses the digestive system for maximum follicular bioavailability.',
        benefitCardTitle: 'Direct Follicular Feeding',
        benefitCardDesc: 'Drives vitamins, minerals, and peptides straight to the hair matrix for maximum uptake.',
        benefitChecks: [
            'Stimulates localized micro-circulation and cellular metabolism.',
            'Quick 20-minute procedure with virtually no pain or social downtime.',
            'Complements oral supplements and topical minoxidil therapies perfectly.'
        ],
        faqs: [
            {
                q: 'How is hair mesotherapy performed?',
                a: 'Using ultra-fine micro-needles, sterile nutrient solutions are painlessly micro-injected into the scalp dermis at 1-2 mm depth.'
            },
            {
                q: 'How many sessions will I need?',
                a: 'A typical protocol consists of 6 to 8 sessions performed every 2 to 3 weeks, followed by quarterly maintenance.'
            },
            {
                q: 'Is hair mesotherapy painful?',
                a: 'The injections are very superficial and performed with micro-fine gauge needles, causing minimal discomfort. A mild vibration device is used for comfort.'
            },
            {
                q: 'Can I wash my hair after mesotherapy?',
                a: 'We recommend waiting 12 to 24 hours before washing your hair to allow the infused nutrients to fully absorb.'
            },
            {
                q: 'Can mesotherapy replace hair transplant?',
                a: 'Mesotherapy strengthens existing thinning follicles; it cannot grow hair in completely bald, scarred areas where follicles no longer exist.'
            }
        ]
    },
    {
        slug: 'hair-thinning-treatment',
        title: 'Hair Thinning / Density',
        category: 'Hair',
        categoryTitle: 'Trichology & Restoration',
        seoTitle: 'Hair Thinning & Density Treatment in Trichy | Dermiiz Clinic',
        metaDesc: 'Restore lost hair density and reverse progressive hair thinning at Dermiiz Clinic. Combination therapies targeting follicular diameter and scalp coverage.',
        heroImg: '../assets/images/Hair_care_service.png',
        benefitsImg: '../assets/images/happy_patient.png',
        introP1: 'Hair thinning often creeps up gradually—a widening partition, a see-through crown under bright lights, or a reduced ponytail thickness indicating progressive follicular miniaturization.',
        introP2: 'At Dermiiz, we specialize in multi-modality density restoration. By combining internal DHT-modulating medications, topical peptide formulations, micro-needling, and regenerative growth factor therapies, we thicken existing shafts and activate sleeping follicles.',
        typesTitle: 'Patterns of hair thinning we treat',
        typesSubtext: 'Tailored clinical strategies for both male and female genetic and environmental thinning.',
        types: [
            {
                title: 'Female Pattern Hair Thinning',
                desc: 'Diffuse thinning concentrated along the central parting line while preserving the front hairline.'
            },
            {
                title: 'Male Vertex & Crown Thinning',
                desc: 'Progressive thinning creating a visible circular spot on the crown and receding temples.'
            },
            {
                title: 'Post-Menopausal Hair Thinning',
                desc: 'Estrogen reduction leading to relative androgen dominance and overall scalp sparseness.'
            },
            {
                title: 'Chronic Telogen Miniaturization',
                desc: 'Long-standing shedding resulting in sparse, fine, vellus-like hair coverage.'
            }
        ],
        benefitsTitle: 'Benefits of density restoration',
        benefitsSubtext: 'Comprehensive medical and regenerative care to rebuild natural scalp fullness.',
        benefitCardTitle: 'Thicker Shafts & Richer Volume',
        benefitCardDesc: 'Reverses follicle shrinkage to transform wispy, thin hairs into thick terminal strands.',
        benefitChecks: [
            'Visibly reduces scalp show-through under direct sunlight and bright indoor lighting.',
            'Increases average hair diameter by up to 35% across treated zones.',
            'Long-term sustainable management plans tailored to your lifestyle.'
        ],
        faqs: [
            {
                q: 'Can miniaturized thin hairs become thick again?',
                a: 'Yes! As long as the hair follicle has not completely scarred over, medical and regenerative treatments can reverse miniaturization and restore thick terminal hairs.'
            },
            {
                q: 'What is the best treatment for widening hair partition in women?',
                a: 'A combination of low-dose topical minoxidil, peptide serums, GFC therapy, and correcting underlying ferritin/Vitamin D levels yields the highest success.'
            },
            {
                q: 'How long before I notice improved hair density?',
                a: 'Initial thickening of individual hair shafts is noticeable at 3 months, with significant visual density improvements evident by months 6 to 9.'
            },
            {
                q: 'Do I have to take medication forever?',
                a: 'Genetic pattern thinning requires ongoing maintenance. Once density is restored, we transition you to simplified, sustainable low-dose regimens.'
            },
            {
                q: 'Is micro-needling effective for hair density?',
                a: 'Yes. Scalp micro-needling creates micro-channels that trigger wound healing factors and dramatically improves topical serum absorption.'
            }
        ]
    },
    {
        slug: 'stem-cells-hair',
        title: 'Stem Cells Treatment',
        category: 'Hair',
        categoryTitle: 'Trichology & Restoration',
        seoTitle: 'Stem Cell Hair Therapy in Trichy | Cellular Trichology | Dermiiz',
        metaDesc: 'Cutting-edge stem cell and exosome hair therapies at Dermiiz Clinic. Cellular bio-signaling to awaken dormant hair follicle stem cells for robust regrowth.',
        heroImg: '../assets/images/doctor_skin_analyze.png',
        benefitsImg: '../assets/images/doctor-patient_hair_analyze.png',
        introP1: 'At the base of every hair follicle lies a niche of specialized dermal papilla stem cells responsible for orchestrating the transition between resting and growth cycles.',
        introP2: 'At Dermiiz, our cellular stem cell and exosome hair therapies utilize bio-engineered signaling peptides, growth factors, and autologous micro-grafts to reignite quiescent stem cells, prompting thick, robust new hair production even in stubborn thinning.',
        typesTitle: 'Applications of stem cell hair therapy',
        typesSubtext: 'Advanced biological hair restoration for advanced thinning and resistant cases.',
        types: [
            {
                title: 'Advanced Androgenetic Alopecia',
                desc: 'Stimulates recalcitrant follicles that have shown minimal response to standard therapies.'
            },
            {
                title: 'Diffuse Scalp Rejuvenation',
                desc: 'Restores the biological micro-environment across extensive thinning scalp regions.'
            },
            {
                title: 'Post-Transplant Optimization',
                desc: 'Enhances cellular vitality and survival rate of newly placed hair grafts.'
            },
            {
                title: 'Age-Related Senescent Alopecia',
                desc: 'Combats aging-related decline in cellular dermal papilla regeneration capacity.'
            }
        ],
        benefitsTitle: 'Benefits of stem cell hair therapy',
        benefitsSubtext: 'Harnesses revolutionary cellular biotechnology to trigger follicular regeneration.',
        benefitCardTitle: 'Cellular Follicular Rebirth',
        benefitCardDesc: 'Transfers vital regenerative signals to reboot dormant dermal papilla stem cell populations.',
        benefitChecks: [
            'Deep cellular activation without invasive surgical intervention.',
            'Promotes long-term follicular survival and improved vascularization.',
            'Scientifically backed protocols with highest safety standards.'
        ],
        faqs: [
            {
                q: 'How does stem cell hair therapy work?',
                a: 'It delivers concentrated biological signaling peptides and growth factors directly to the hair bulb niche, prompting dormant stem cells to re-enter the anagen growth cycle.'
            },
            {
                q: 'Is stem cell therapy safe?',
                a: 'Yes. Our therapies utilize laboratory-certified, purified bioactive components produced under strict cGMP protocols with zero risk of adverse cellular mutation.'
            },
            {
                q: 'How many sessions are typically required?',
                a: 'Depending on the protocol selected, 2 to 4 sessions spaced 6 to 8 weeks apart provide robust, long-lasting regenerative stimulation.'
            },
            {
                q: 'How does it compare to PRP?',
                a: 'Stem cell and exosome therapies contain a significantly broader and more concentrated spectrum of regenerative signaling molecules compared to autologous platelets alone.'
            },
            {
                q: 'Are results permanent?',
                a: 'While the newly stimulated hair growth is long-lasting, ongoing genetic DHT management is advised to maintain long-term density.'
            }
        ]
    },
    {
        slug: 'laser-therapy-hair',
        title: 'Laser Therapy for Hair',
        category: 'Hair',
        categoryTitle: 'Trichology & Restoration',
        seoTitle: 'Low-Level Laser Hair Therapy (LLLT) in Trichy | Dermiiz Clinic',
        metaDesc: 'Low-Level Laser Therapy (LLLT) for hair regrowth at Dermiiz Clinic. Clinical photobiomodulation that increases ATP cellular energy and blood circulation.',
        heroImg: '../assets/images/doctor-patient_laser_treatment.png',
        benefitsImg: '../assets/images/Hair_care_service.png',
        introP1: 'Low-Level Laser Therapy (LLLT), or photobiomodulation, utilizes clinical cold laser diodes in the 650nm red light spectrum to stimulate cellular respiration within hair follicle cells.',
        introP2: 'At Dermiiz, our medical-grade photobiomodulation devices deliver safe, therapeutic light energy that penetrates the scalp to activate cytochrome c oxidase within mitochondria. This boosts ATP cellular energy production, increases nitric oxide microcirculation, and re-energizes weak follicles.',
        typesTitle: 'Indications for clinical LLLT',
        typesSubtext: 'Completely painless, non-invasive, US FDA-cleared therapy for both men and women.',
        types: [
            {
                title: 'Early Stage Hair Miniaturization',
                desc: 'Strengthens fine, thinning hairs and halts progressive pattern loss.'
            },
            {
                title: 'Post-Surgical Healing Acceleration',
                desc: 'Accelerates donor wound closure and reduces graft shedding following hair transplantation.'
            },
            {
                title: 'Adjunct to PRP & Mesotherapy',
                desc: 'Synergistically boosts cell permeability and nutrient uptake when combined with injections.'
            },
            {
                title: 'Scalp Inflammation Reduction',
                desc: 'Dampens chronic perifollicular micro-inflammation associated with hair loss.'
            }
        ],
        benefitsTitle: 'Benefits of laser hair therapy',
        benefitsSubtext: 'Relaxing, non-thermal light therapy that fuels cellular repair without side effects.',
        benefitCardTitle: 'Mitochondrial Bio-Activation',
        benefitCardDesc: 'Increases cellular ATP synthesis, empowering follicles to produce stronger, thicker hair.',
        benefitChecks: [
            '100% painless, non-thermal, and non-invasive with zero recovery time.',
            'US FDA-cleared technology with zero reported side effects.',
            'Enhances scalp blood flow, oxygenation, and nutrient delivery.'
        ],
        faqs: [
            {
                q: 'Does LLLT hair therapy generate heat or burn the scalp?',
                a: 'No. LLLT utilizes "cold" lasers; it does not produce heat, tissue ablation, or burns. You will feel only a comfortable, gentle sensation.'
            },
            {
                q: 'How long does each laser session take?',
                a: 'A clinical laser session typically takes 20 to 25 minutes. Patients relax comfortably in our clinic suite during treatment.'
            },
            {
                q: 'How frequently should laser therapy be done?',
                a: 'We generally recommend 2 sessions per week for the first 8 to 12 weeks, followed by once-weekly maintenance.'
            },
            {
                q: 'Can LLLT be used alone for hair loss?',
                a: 'While effective on its own for mild thinning, combining LLLT with topical medical therapy and PRP yields substantially higher clinical success.'
            },
            {
                q: 'Is it safe for women with thinning hair?',
                a: 'Yes, LLLT is one of the safest and most popular treatments for female pattern hair thinning.'
            }
        ]
    },

    // ==========================================
    // NAIL SERVICES (3)
    // ==========================================
    {
        slug: 'nail-fungus-treatment',
        title: 'Nail Fungus Treatment',
        category: 'Nail',
        categoryTitle: 'Podiatry & Aesthetics',
        seoTitle: 'Nail Fungus Treatment in Trichy | Laser Onychomycosis Care | Dermiiz',
        metaDesc: 'Permanent laser and medical cure for stubborn toenail and fingernail fungus (onychomycosis) at Dermiiz Skin and Hair Clinic.',
        heroImg: '../assets/images/complete_care_nail_treat.jpg',
        benefitsImg: '../assets/images/doctor_patient_nail_analyze.png',
        introP1: 'Onychomycosis (fungal nail infection) causes nails to become thickened, discolored (yellow, brown, or white), brittle, and detached from the underlying nail bed.',
        introP2: 'At Dermiiz, we specialize in eradicating stubborn nail fungus. Because thick keratin prevents topical lacquers from penetrating the nail bed, we combine specialized high-energy laser therapy—which thermally destroys fungal mycelia—with targeted systemic antifungals to grow out healthy, clear nails.',
        typesTitle: 'Types of fungal nail conditions',
        typesSubtext: 'Accurate clinical diagnosis ensures the fungal spores are eradicated from the nail matrix.',
        types: [
            {
                title: 'Distal Subungual Onychomycosis',
                desc: 'The most common type, starting at the nail edge and spreading down with yellowing and crumbling.'
            },
            {
                title: 'White Superficial Onychomycosis',
                desc: 'Chalky white, powdery patches on the top surface of the nail plate.'
            },
            {
                title: 'Proximal Subungual Onychomycosis',
                desc: 'Fungal infection originating near the cuticle, frequently seen in immunocompromised states.'
            },
            {
                title: 'Total Dystrophic Onychomycosis',
                desc: 'Severe, long-standing chronic infection where the entire nail plate becomes thickened and distorted.'
            }
        ],
        benefitsTitle: 'Benefits of laser nail fungus treatment',
        benefitsSubtext: 'Penetrates through the dense keratin nail plate to eradicate fungal spores without liver toxicity.',
        benefitCardTitle: 'Deep Fungal Eradication',
        benefitCardDesc: 'Thermal laser energy vaporizes fungal pathogens residing in the nail bed effortlessly.',
        benefitChecks: [
            'Non-invasive laser therapy penetrates deep beneath the nail plate.',
            'Eliminates need for long-term heavy oral medications in suitable patients.',
            'Promotes new, clear, healthy nail emergence from the root matrix.'
        ],
        faqs: [
            {
                q: 'How long does it take for a fungal nail to become normal again?',
                a: 'Nails grow slowly. While the laser kills the fungus immediately, a completely clear nail plate emerges gradually as it grows out—typically 6 months for fingernails and 9 to 12 months for toenails.'
            },
            {
                q: 'Is laser nail fungus treatment painful?',
                a: 'Patients feel a deep warming sensation during the pulse. The laser is pulsed to ensure the procedure is comfortable and easily tolerated.'
            },
            {
                q: 'Why did my pharmacy nail polish fail to clear the infection?',
                a: 'Topical lacquers cannot penetrate through thickened, hardened nail keratin to reach the active fungus underneath. Laser energy penetrates the nail plate instantly.'
            },
            {
                q: 'Can nail fungus spread to other nails or family members?',
                a: 'Yes. Fungal spores easily spread to adjacent toes and household members through shared nail clippers, bathmats, and damp floors.'
            },
            {
                q: 'How many laser sessions will I need?',
                a: 'Most mild-to-moderate fungal nail infections clear with 3 to 4 laser sessions spaced 4 weeks apart.'
            }
        ]
    },
    {
        slug: 'ingrown-nail-treatment',
        title: 'Ingrown Nail Treatment',
        category: 'Nail',
        categoryTitle: 'Podiatry & Aesthetics',
        seoTitle: 'Ingrown Toenail Treatment in Trichy | Painless Phenol Matricectomy | Dermiiz',
        metaDesc: 'Instant pain relief and permanent surgical cure for ingrown toenails (onychocryptosis) at Dermiiz Clinic. Minimally invasive partial matricectomy.',
        heroImg: '../assets/images/complete_care_nail_treat.jpg',
        benefitsImg: '../assets/images/doctor_patient_nail_analyze.png',
        introP1: 'An ingrown toenail occurs when the sharp lateral edge of the nail plate curves and pierces the surrounding periungual skin fold, causing severe pain, redness, swelling, and recurrent bacterial infections.',
        introP2: 'At Dermiiz, we provide immediate pain relief and a permanent cure through minimally invasive partial nail avulsion paired with chemical matricectomy (phenolisation). By ablating only the offending 2mm lateral nail root under local anesthesia, we prevent recurrence while preserving a completely normal-looking nail.',
        typesTitle: 'Stages of ingrown nails we treat',
        typesSubtext: 'From mild early curvature to severe infected granulation tissue, we treat all stages.',
        types: [
            {
                title: 'Stage 1: Mild Erythema & Tenderness',
                desc: 'Slight swelling and pain upon walking or wearing closed shoes without discharge.'
            },
            {
                title: 'Stage 2: Acute Infection & Drainage',
                desc: 'Marked redness, throbbing pain, seropurulent discharge, and infection of lateral fold.'
            },
            {
                title: 'Stage 3: Chronic Granulation Tissue',
                desc: 'Hypertrophic "proud flesh" overgrowing the nail plate with persistent bleeding.'
            },
            {
                title: 'Recurrent Ingrown Nails Post-Pedicure',
                desc: 'Chronic curved regrowth caused by improper bathroom cutting or curved nail clipping.'
            }
        ],
        benefitsTitle: 'Benefits of permanent ingrown nail correction',
        benefitsSubtext: 'Painless, quick minor procedure that permanently prevents the nail edge from digging into flesh.',
        benefitCardTitle: 'Permanent Relief & Normal Aesthetics',
        benefitCardDesc: 'Treats only the problematic 2mm edge while keeping 90% of your nail cosmetically intact.',
        benefitChecks: [
            'Immediate elimination of throbbing pain and pressure on walking.',
            '98% permanent cure rate with chemical matricectomy preventing regrowth.',
            'Walk in and walk out comfortably in under 30 minutes.'
        ],
        faqs: [
            {
                q: 'Will you have to remove my whole toenail?',
                a: 'No! Total nail removal is outdated and results in high recurrence. We perform partial avulsion—removing only the 2-3mm ingrown sliver while preserving the rest of your normal nail.'
            },
            {
                q: 'Is the procedure painful?',
                a: 'We perform a digital ring block using local anesthesia. Once the toe is numb, you will feel absolutely no pain during the procedure.'
            },
            {
                q: 'When can I walk and wear shoes normally?',
                a: 'You can walk immediately after the procedure with open sandals. Closed footwear can typically be worn comfortably within 48 to 72 hours.'
            },
            {
                q: 'Will the ingrown nail grow back?',
                a: 'By applying chemical phenol to the specific lateral germinal matrix, the recurrence rate is reduced to less than 2%.'
            },
            {
                q: 'How should I properly cut my toenails to prevent ingrown nails?',
                a: 'Always cut toenails straight across and avoid rounding or digging into the lateral corners.'
            }
        ]
    },
    {
        slug: 'nail-disorders-check',
        title: 'Nail Disorders & Nail Health Check',
        category: 'Nail',
        categoryTitle: 'Podiatry & Aesthetics',
        seoTitle: 'Nail Disorders & Nail Health Check in Trichy | Dermiiz Clinic',
        metaDesc: 'Comprehensive dermatological nail check for ridges, brittle nails, discoloration, psoriasis, and paronychia at Dermiiz Skin and Hair Clinic.',
        heroImg: '../assets/images/complete_care_nail_treat.jpg',
        benefitsImg: '../assets/images/doctor_patient_nail_analyze.png',
        introP1: 'Nails are sensitive biological mirrors reflecting internal health, systemic diseases, dermatological conditions, nutritional status, and traumatic injury.',
        introP2: 'At Dermiiz, our dermatologists conduct thorough onychoscopy assessments to evaluate nail plate architecture, subungual capillary beds, and matrix health. We diagnose and treat nail psoriasis, lichen planus, chronic paronychia, brittle nail syndrome, and abnormal pigment streaks.',
        typesTitle: 'Nail disorders we evaluate & treat',
        typesSubtext: 'Specialized dermatological evaluation of complex nail plate and cuticle conditions.',
        types: [
            {
                title: 'Nail Psoriasis',
                desc: 'Pitting, oil-drop discoloration, subungual hyperkeratosis, and crumbling nail plates.'
            },
            {
                title: 'Brittle & Splitting Nails (Onychorrhexis)',
                desc: 'Thin, fragile nails that peel in layers or split vertically due to dehydration and deficiencies.'
            },
            {
                title: 'Chronic Paronychia (Cuticle Infection)',
                desc: 'Painful, swollen, boggy cuticles caused by constant water exposure and mixed infections.'
            },
            {
                title: 'Melanonychia (Nail Pigment Streaks)',
                desc: 'Brown or black longitudinal bands on the nail evaluated with dermoscopy to rule out subungual melanoma.'
            }
        ],
        benefitsTitle: 'Benefits of a clinical nail check',
        benefitsSubtext: 'Accurate clinical diagnostics to treat underlying systemic and dermatological root causes.',
        benefitCardTitle: 'Comprehensive Onychology Diagnostics',
        benefitCardDesc: 'Dermoscopic magnification allows micro-structural assessment of nail matrix and capillary health.',
        benefitChecks: [
            'Differentiates fungal infections from psoriasis, trauma, and autoimmune diseases.',
            'Specialized intralesional and topical therapies for nail matrix restoration.',
            'Restores strength, smoothness, and healthy pink luster to damaged nails.'
        ],
        faqs: [
            {
                q: 'What causes vertical ridges on fingernails?',
                a: 'Mild vertical ridges are a normal part of aging. However, pronounced ridges or horizontal indentations (Beau’s lines) may indicate systemic illness, severe stress, or nutritional deficiencies.'
            },
            {
                q: 'Can nail psoriasis be treated effectively?',
                a: 'Yes. We utilize specialized topical corticosteroid-calcipotriol lacquers, systemic therapies, and intralesional micro-injections into the nail matrix to restore smooth nail growth.'
            },
            {
                q: 'Should I be worried about a dark line on my nail?',
                a: 'Any new or changing dark brown/black vertical band (melanonychia) should be evaluated promptly by a dermatologist using dermoscopy to rule out subungual melanoma.'
            },
            {
                q: 'What causes painful swollen cuticles?',
                a: 'Chronic paronychia is an inflammation of the cuticle fold frequently triggered by repeated water immersion, detergents, or yeast. Restoring the protective cuticle seal is essential.'
            },
            {
                q: 'Can brittle nails be strengthened?',
                a: 'Yes. We treat brittle nails by addressing iron/biotin deficiencies, prescribing specialized medical nail strengthening lacquers, and guiding protective barrier habits.'
            }
        ]
    }
];

// Helper to select 6 related services for sidebar
function getRelatedServices(currentSlug, category) {
    // Pick services from same category, plus another popular one if needed
    const sameCategory = servicesData.filter(s => s.slug !== currentSlug && s.category === category);
    const otherCategory = servicesData.filter(s => s.slug !== currentSlug && s.category !== category);
    
    let selected = [...sameCategory];
    if (selected.length < 6) {
        selected = selected.concat(otherCategory);
    }
    return selected.slice(0, 6);
}

// Generate the complete HTML string for a single service page
function buildServicePageHTML(service) {
    const related = getRelatedServices(service.slug, service.category);

    // Hero background image assignment: Acne Treatment uses hero_bannaer_acne_treatment.png specifically
    const heroBannerImg = service.slug === 'acne-treatment'
        ? '../assets/images/hero_bannaer_acne_treatment.png'
        : (service.category === 'Hair'
            ? '../assets/images/Hair_care_service.png'
            : (service.category === 'Nail'
                ? '../assets/images/complete_care_nail_treat.jpg'
                : '../assets/images/about_hero_banner.png'));

    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${service.seoTitle}</title>
    <meta name="description" content="${service.metaDesc}">
    <link rel="canonical" href="https://dermiiz.com/services/${service.slug}.html">
    <meta property="og:title" content="${service.seoTitle}">
    <meta property="og:description" content="${service.metaDesc}">
    <meta property="og:type" content="website">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/animations.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <link rel="stylesheet" href="../css/service-detail.css">
</head>

<body class="service-detail-body">

    <!-- ============================================================
         HERO SECTION (Top Announcement + Dark Hero + Pill Navbar)
         ============================================================ -->
    <div class="service-hero-outer">
        <!-- Top Announcement Bar -->
        <div class="service-top-bar" role="complementary" aria-label="Announcement">
            <div class="service-top-bar-left">
                <span>Feel and look transformed with 1:1 Consultative Special Attention</span>
            </div>
            <div class="service-top-bar-right">
                <div class="service-top-bar-help">
                    <a href="../contact.html">Help</a> &nbsp;|&nbsp;
                    <a href="../contact.html">Support</a> &nbsp;|&nbsp;
                    <a href="../contact.html">Contact</a>
                </div>
                <div class="service-top-bar-socials">
                    <a href="#" aria-label="Facebook">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="#" aria-label="Instagram">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a href="#" aria-label="Instagram">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                </div>
            </div>
        </div>

        <!-- Dark Hero Section with Background Image -->
        <section class="service-hero-dermiiz" style="background-image: linear-gradient(to right, rgba(28, 20, 18, 0.88) 0%, rgba(28, 20, 18, 0.52) 48%, rgba(28, 20, 18, 0.15) 100%), url('${heroBannerImg}');" aria-label="Service Hero">
            <!-- Floating White Pill Navbar -->
            <header class="navbar-wrapper" id="navbar">
                <div class="navbar-container">
                    <a href="../index.html" class="navbar-logo" aria-label="Dermiiz Home">
                        <img src="../assets/images/dermiiz_logo_black.png" alt="DERMIIZ Skin and Hair Clinic">
                    </a>

                    <nav class="nav-links" aria-label="Main Navigation">
                        <a href="../index.html" class="nav-link-item">Home</a>
                        <a href="../about.html" class="nav-link-item">About Us</a>

                        <!-- SKIN DROPDOWN MEGA-MENU -->
                        <div class="nav-item-dropdown" data-dropdown="skin">
                            <a href="../skin.html" class="nav-link-item has-dropdown ${service.category === 'Skin' ? 'active' : ''}" id="navSkinBtn" aria-haspopup="true" aria-expanded="false">
                                Skin
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                                    <path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-skin" aria-labelledby="navSkinBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">
                                            <span class="dropdown-pill-badge">Clinical Dermatology</span>
                                            <span class="dropdown-count-badge">18 Specialized Treatments</span>
                                        </div>
                                        <a href="../skin.html" class="dropdown-view-all">View All Skin Care →</a>
                                    </div>
                                    <div class="dropdown-grid dropdown-grid-skin">
                                        <a href="acne-treatment.html" class="dropdown-item ${service.slug === 'acne-treatment' ? 'active' : ''}"><span class="item-dot"></span>Acne Treatment</a>
                                        <a href="acne-scars-treatment.html" class="dropdown-item ${service.slug === 'acne-scars-treatment' ? 'active' : ''}"><span class="item-dot"></span>Acne Scars Treatment</a>
                                        <a href="pigmentation-treatment.html" class="dropdown-item ${service.slug === 'pigmentation-treatment' ? 'active' : ''}"><span class="item-dot"></span>Pigmentation / Melasma</a>
                                        <a href="anti-aging-treatment.html" class="dropdown-item ${service.slug === 'anti-aging-treatment' ? 'active' : ''}"><span class="item-dot"></span>Anti-Aging &amp; Wrinkle</a>
                                        <a href="chemical-peels.html" class="dropdown-item ${service.slug === 'chemical-peels' ? 'active' : ''}"><span class="item-dot"></span>Chemical Peels</a>
                                        <a href="laser-toning.html" class="dropdown-item ${service.slug === 'laser-toning' ? 'active' : ''}"><span class="item-dot"></span>Laser Toning</a>
                                        <a href="medi-facial.html" class="dropdown-item ${service.slug === 'medi-facial' ? 'active' : ''}"><span class="item-dot"></span>Medi-Facial</a>
                                        <a href="skin-brightening.html" class="dropdown-item ${service.slug === 'skin-brightening' ? 'active' : ''}"><span class="item-dot"></span>Skin Brightening</a>
                                        <a href="psoriasis-treatment.html" class="dropdown-item ${service.slug === 'psoriasis-treatment' ? 'active' : ''}"><span class="item-dot"></span>Psoriasis Treatment</a>
                                        <a href="fungal-skin-infection.html" class="dropdown-item ${service.slug === 'fungal-skin-infection' ? 'active' : ''}"><span class="item-dot"></span>Fungal Skin Infection</a>
                                        <a href="skin-allergy.html" class="dropdown-item ${service.slug === 'skin-allergy' ? 'active' : ''}"><span class="item-dot"></span>Skin Allergy</a>
                                        <a href="dark-circles.html" class="dropdown-item ${service.slug === 'dark-circles' ? 'active' : ''}"><span class="item-dot"></span>Dark Circles</a>
                                        <a href="warts-moles.html" class="dropdown-item ${service.slug === 'warts-moles' ? 'active' : ''}"><span class="item-dot"></span>Warts / Moles</a>
                                        <a href="vitiligo-treatment.html" class="dropdown-item ${service.slug === 'vitiligo-treatment' ? 'active' : ''}"><span class="item-dot"></span>Vitiligo</a>
                                        <a href="tattoo-removal.html" class="dropdown-item ${service.slug === 'tattoo-removal' ? 'active' : ''}"><span class="item-dot"></span>Tattoo Removal</a>
                                        <a href="laser-hair-removal.html" class="dropdown-item ${service.slug === 'laser-hair-removal' ? 'active' : ''}"><span class="item-dot"></span>Laser Hair Removal</a>
                                        <a href="botox-fillers.html" class="dropdown-item ${service.slug === 'botox-fillers' ? 'active' : ''}"><span class="item-dot"></span>Botox / Fillers / Boosters</a>
                                        <a href="glutathione-antioxidants.html" class="dropdown-item ${service.slug === 'glutathione-antioxidants' ? 'active' : ''}"><span class="item-dot"></span>Glutathione &amp; Antioxidants</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- HAIR DROPDOWN MEGA-MENU -->
                        <div class="nav-item-dropdown" data-dropdown="hair">
                            <a href="../hair.html" class="nav-link-item has-dropdown ${service.category === 'Hair' ? 'active' : ''}" id="navHairBtn" aria-haspopup="true" aria-expanded="false">
                                Hair
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                                    <path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-hair" aria-labelledby="navHairBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">
                                            <span class="dropdown-pill-badge">Trichology &amp; Restoration</span>
                                            <span class="dropdown-count-badge">10 Advanced Therapies</span>
                                        </div>
                                        <a href="../hair.html" class="dropdown-view-all">View All Hair Care →</a>
                                    </div>
                                    <div class="dropdown-grid dropdown-grid-hair">
                                        <a href="hair-fall-treatment.html" class="dropdown-item ${service.slug === 'hair-fall-treatment' ? 'active' : ''}"><span class="item-dot"></span>Hair Fall Treatment</a>
                                        <a href="prp-hair-treatment.html" class="dropdown-item ${service.slug === 'prp-hair-treatment' ? 'active' : ''}"><span class="item-dot"></span>PRP Hair Treatment</a>
                                        <a href="gfc-hair-therapy.html" class="dropdown-item ${service.slug === 'gfc-hair-therapy' ? 'active' : ''}"><span class="item-dot"></span>GFC Hair Therapy</a>
                                        <a href="hair-transplant.html" class="dropdown-item ${service.slug === 'hair-transplant' ? 'active' : ''}"><span class="item-dot"></span>Hair Transplant</a>
                                        <a href="dandruff-scalp-treatment.html" class="dropdown-item ${service.slug === 'dandruff-scalp-treatment' ? 'active' : ''}"><span class="item-dot"></span>Dandruff &amp; Scalp Treatment</a>
                                        <a href="alopecia-treatment.html" class="dropdown-item ${service.slug === 'alopecia-treatment' ? 'active' : ''}"><span class="item-dot"></span>Alopecia / Hair Loss</a>
                                        <a href="mesotherapy-hair.html" class="dropdown-item ${service.slug === 'mesotherapy-hair' ? 'active' : ''}"><span class="item-dot"></span>Mesotherapy for Hair</a>
                                        <a href="hair-thinning-treatment.html" class="dropdown-item ${service.slug === 'hair-thinning-treatment' ? 'active' : ''}"><span class="item-dot"></span>Hair Thinning / Density</a>
                                        <a href="stem-cells-hair.html" class="dropdown-item ${service.slug === 'stem-cells-hair' ? 'active' : ''}"><span class="item-dot"></span>Stem Cells Treatment</a>
                                        <a href="laser-therapy-hair.html" class="dropdown-item ${service.slug === 'laser-therapy-hair' ? 'active' : ''}"><span class="item-dot"></span>Laser Therapy for Hair</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- NAIL DROPDOWN MENU -->
                        <div class="nav-item-dropdown" data-dropdown="nail">
                            <a href="../nail.html" class="nav-link-item has-dropdown ${service.category === 'Nail' ? 'active' : ''}" id="navNailBtn" aria-haspopup="true" aria-expanded="false">
                                Nail
                                <svg class="dropdown-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                                    <path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                            <div class="dropdown-menu dropdown-menu-nail" aria-labelledby="navNailBtn">
                                <div class="dropdown-inner">
                                    <div class="dropdown-header">
                                        <div class="dropdown-header-left">
                                            <span class="dropdown-pill-badge">Podiatry &amp; Aesthetics</span>
                                            <span class="dropdown-count-badge">3 Specialized Services</span>
                                        </div>
                                        <a href="../nail.html" class="dropdown-view-all">View All Nail Care →</a>
                                    </div>
                                    <div class="dropdown-grid dropdown-grid-nail">
                                        <a href="nail-fungus-treatment.html" class="dropdown-item ${service.slug === 'nail-fungus-treatment' ? 'active' : ''}"><span class="item-dot"></span>Nail Fungus Treatment</a>
                                        <a href="ingrown-nail-treatment.html" class="dropdown-item ${service.slug === 'ingrown-nail-treatment' ? 'active' : ''}"><span class="item-dot"></span>Ingrown Nail Treatment</a>
                                        <a href="nail-disorders-check.html" class="dropdown-item ${service.slug === 'nail-disorders-check' ? 'active' : ''}"><span class="item-dot"></span>Nail Disorders &amp; Nail Health Check</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="../services.html" class="nav-link-item">Blog</a>
                        <a href="../contact.html" class="nav-link-item">Contact Us</a>
                    </nav>

                    <a href="../contact.html" class="btn btn-dark btn-sm">
                        Book Appointment
                    </a>

                    <!-- Hamburger Button for Mobile -->
                    <button class="hamburger-btn" id="hamburgerBtn" aria-label="Toggle Navigation Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <!-- Hero Title & Breadcrumb -->
            <div class="service-hero-content fade-up-element">
                <h1 class="service-hero-title">${service.title}</h1>
                <nav class="service-hero-breadcrumb" aria-label="Breadcrumb">
                    <a href="../index.html">Home</a>
                    <span class="separator">/</span>
                    <a href="../${service.category.toLowerCase()}.html">Services</a>
                    <span class="separator">/</span>
                    <span class="current">${service.title}</span>
                </nav>
            </div>
        </section>
    </div>

    <!-- Mobile Nav Panel with Accordions -->
    <div class="mobile-nav-panel" id="mobileNavPanel">
        <nav class="mobile-nav-links">
            <a href="../index.html" class="mobile-nav-link">Home <span>→</span></a>
            <a href="../about.html" class="mobile-nav-link">About Us <span>→</span></a>

            <!-- Mobile Skin Submenu -->
            <div class="mobile-nav-item-dropdown">
                <div class="mobile-nav-header-row">
                    <a href="../skin.html" class="mobile-nav-link">Skin Care</a>
                    <button type="button" class="mobile-submenu-toggle" aria-label="Toggle Skin Submenu">
                        <svg viewBox="0 0 10 6" fill="none" stroke="currentColor">
                            <path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="mobile-submenu">
                    <a href="acne-treatment.html" class="mobile-sublink">• Acne Treatment</a>
                    <a href="acne-scars-treatment.html" class="mobile-sublink">• Acne Scars Treatment</a>
                    <a href="pigmentation-treatment.html" class="mobile-sublink">• Pigmentation / Melasma</a>
                    <a href="anti-aging-treatment.html" class="mobile-sublink">• Anti-Aging &amp; Wrinkle</a>
                    <a href="chemical-peels.html" class="mobile-sublink">• Chemical Peels</a>
                    <a href="laser-toning.html" class="mobile-sublink">• Laser Toning</a>
                    <a href="medi-facial.html" class="mobile-sublink">• Medi-Facial</a>
                    <a href="skin-brightening.html" class="mobile-sublink">• Skin Brightening</a>
                    <a href="psoriasis-treatment.html" class="mobile-sublink">• Psoriasis Treatment</a>
                    <a href="fungal-skin-infection.html" class="mobile-sublink">• Fungal Skin Infection</a>
                    <a href="skin-allergy.html" class="mobile-sublink">• Skin Allergy</a>
                    <a href="dark-circles.html" class="mobile-sublink">• Dark Circles</a>
                    <a href="warts-moles.html" class="mobile-sublink">• Warts / Moles</a>
                    <a href="vitiligo-treatment.html" class="mobile-sublink">• Vitiligo</a>
                    <a href="tattoo-removal.html" class="mobile-sublink">• Tattoo Removal</a>
                    <a href="laser-hair-removal.html" class="mobile-sublink">• Laser Hair Removal</a>
                    <a href="botox-fillers.html" class="mobile-sublink">• Botox / Fillers / Boosters</a>
                    <a href="glutathione-antioxidants.html" class="mobile-sublink">• Glutathione &amp; Antioxidants</a>
                </div>
            </div>

            <!-- Mobile Hair Submenu -->
            <div class="mobile-nav-item-dropdown">
                <div class="mobile-nav-header-row">
                    <a href="../hair.html" class="mobile-nav-link">Hair Care</a>
                    <button type="button" class="mobile-submenu-toggle" aria-label="Toggle Hair Submenu">
                        <svg viewBox="0 0 10 6" fill="none" stroke="currentColor">
                            <path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="mobile-submenu">
                    <a href="hair-fall-treatment.html" class="mobile-sublink">• Hair Fall Treatment</a>
                    <a href="prp-hair-treatment.html" class="mobile-sublink">• PRP Hair Treatment</a>
                    <a href="gfc-hair-therapy.html" class="mobile-sublink">• GFC Hair Therapy</a>
                    <a href="hair-transplant.html" class="mobile-sublink">• Hair Transplant</a>
                    <a href="dandruff-scalp-treatment.html" class="mobile-sublink">• Dandruff &amp; Scalp Treatment</a>
                    <a href="alopecia-treatment.html" class="mobile-sublink">• Alopecia / Hair Loss</a>
                    <a href="mesotherapy-hair.html" class="mobile-sublink">• Mesotherapy for Hair</a>
                    <a href="hair-thinning-treatment.html" class="mobile-sublink">• Hair Thinning / Density</a>
                    <a href="stem-cells-hair.html" class="mobile-sublink">• Stem Cells Treatment</a>
                    <a href="laser-therapy-hair.html" class="mobile-sublink">• Laser Therapy for Hair</a>
                </div>
            </div>

            <!-- Mobile Nail Submenu -->
            <div class="mobile-nav-item-dropdown">
                <div class="mobile-nav-header-row">
                    <a href="../nail.html" class="mobile-nav-link">Nail Care</a>
                    <button type="button" class="mobile-submenu-toggle" aria-label="Toggle Nail Submenu">
                        <svg viewBox="0 0 10 6" fill="none" stroke="currentColor">
                            <path d="M1 1l4 4 4-4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="mobile-submenu">
                    <a href="nail-fungus-treatment.html" class="mobile-sublink">• Nail Fungus Treatment</a>
                    <a href="ingrown-nail-treatment.html" class="mobile-sublink">• Ingrown Nail Treatment</a>
                    <a href="nail-disorders-check.html" class="mobile-sublink">• Nail Disorders &amp; Nail Health Check</a>
                </div>
            </div>

            <a href="../services.html" class="mobile-nav-link">Blog <span>→</span></a>
            <a href="../contact.html" class="mobile-nav-link">Contact Us <span>→</span></a>
        </nav>
        <a href="../contact.html" class="btn btn-dark" style="width: 100%;">Book an Appointment</a>
    </div>

    <!-- ============================================================
         MAIN TWO-COLUMN SERVICE CONTENT SECTION
         ============================================================ -->
    <main class="service-layout-section">
        <div class="service-layout-container">

            <!-- ============================================================
                 LEFT COLUMN: STICKY SIDEBAR
                 ============================================================ -->
            <aside class="service-sidebar">

                <!-- Widget 1: Explore Our Services -->
                <div class="sidebar-explore-card fade-up-element">
                    <div class="sidebar-explore-header">
                        Explore Our Services
                    </div>
                    <nav class="sidebar-explore-list" aria-label="Related Services">
                        ${related.map(r => `
                        <a href="${r.slug}.html" class="sidebar-service-link ${r.slug === service.slug ? 'active' : ''}">
                            <span>${r.title}</span>
                            <span class="arrow-icon">↗</span>
                        </a>`).join('')}
                    </nav>
                </div>

                <!-- Widget 2: Contact Us Today! Card -->
                <div class="sidebar-contact-card fade-up-element delay-1">
                    <h3 class="sidebar-contact-title">Contact Us Today!</h3>
                    <p class="sidebar-contact-desc">
                        Our experts will help you find the right treatment for your skin and hair concerns.
                    </p>
                    <a href="../contact.html" class="sidebar-contact-btn">
                        Contact Us <span>↗</span>
                    </a>
                    <img src="../assets/images/girl_wonder_center_circle.png" alt="Patient consultation with Dermiiz expert" class="sidebar-contact-avatar" loading="lazy">
                </div>

            </aside>

            <!-- ============================================================
                 RIGHT COLUMN: SERVICE MAIN CONTENT
                 ============================================================ -->
            <article class="service-main-content">

                <!-- Top Hero Procedure Image -->
                <div class="service-top-image-wrap fade-up-element">
                    <img src="${service.heroImg}" alt="${service.title} procedure at Dermiiz Clinic" class="service-top-image">
                </div>

                <!-- Introduction Paragraphs -->
                <div class="service-intro-block fade-up-element">
                    <p>${service.introP1}</p>
                    <p>${service.introP2}</p>
                </div>

                <!-- Types We Treat Section -->
                <section class="service-types-section fade-up-element">
                    <h2 class="service-block-heading">${service.typesTitle}</h2>
                    <p class="service-block-subtext">${service.typesSubtext}</p>

                    <div class="service-types-grid">
                        ${service.types.map((type, idx) => `
                        <div class="service-type-card fade-up-element delay-${(idx % 2) + 1}">
                            <div class="service-type-icon">
                                <svg viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9"/>
                                    <path d="M12 7v5l3 3"/>
                                </svg>
                            </div>
                            <h3 class="service-type-title">${type.title}</h3>
                            <p class="service-type-desc">${type.desc}</p>
                        </div>`).join('')}
                    </div>
                </section>

                <!-- Benefits Section -->
                <section class="service-benefits-section fade-up-element">
                    <h2 class="service-block-heading">${service.benefitsTitle}</h2>
                    <p class="service-block-subtext">${service.benefitsSubtext}</p>

                    <div class="service-benefits-grid">
                        <!-- Left: Doctor/Clinic Procedure Image -->
                        <div class="service-benefits-image-wrap">
                            <img src="${service.benefitsImg}" alt="Dermatologist consultation for ${service.title}" class="service-benefits-image" loading="lazy">
                        </div>

                        <!-- Right: Feature Card & Checkpoints -->
                        <div class="service-benefits-right">
                            <div class="benefits-highlight-card">
                                <div class="benefits-card-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                <div class="benefits-card-text">
                                    <h3 class="benefits-card-title">${service.benefitCardTitle}</h3>
                                    <p class="benefits-card-desc">${service.benefitCardDesc}</p>
                                </div>
                            </div>

                            <div class="benefits-checklist">
                                ${service.benefitChecks.map(check => `
                                <div class="benefits-check-item">
                                    <div class="check-icon-circle">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M5 13l4 4L19 7"/>
                                        </svg>
                                    </div>
                                    <p class="check-item-text">${check}</p>
                                </div>`).join('')}
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Frequently Asked Questions Section -->
                <section class="service-faq-section fade-up-element">
                    <h2 class="service-block-heading">Frequently asked questions</h2>
                    <p class="service-block-subtext">Have questions about our treatments? Here are answers to common questions to help guide you on your treatment journey.</p>

                    <div class="service-faq-accordion" id="serviceFaqAccordion">
                        ${service.faqs.map((faq, idx) => `
                        <div class="faq-card-item ${idx === 0 ? 'active' : ''}">
                            <button class="faq-trigger" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="faq-ans-${idx}">
                                <span>${faq.q}</span>
                                <span class="faq-toggle-icon">${idx === 0 ? '−' : '+'}</span>
                            </button>
                            <div class="faq-content-panel" id="faq-ans-${idx}">
                                <div class="faq-content-inner">
                                    ${faq.a}
                                </div>
                            </div>
                        </div>`).join('')}
                    </div>
                </section>

            </article>
        </div>
    </main>

    <!-- ============================================================
         GLOBAL DERMIIZ FOOTER
         ============================================================ -->
    <footer class="dermiiz-footer-section" role="contentinfo">
        <div class="footer-container-outer">

            <!-- Main Dark Card -->
            <div class="footer-main-card">
                <div class="footer-grid-4col">

                    <!-- Col 1: Brand -->
                    <div class="footer-brand-col">
                        <img src="../assets/images/dermiiz_logo_white.png" alt="DERMIIZ Skin and Hair Clinic" class="footer-logo-img">
                        <p class="footer-brand-text">
                            We provide advanced, targeted therapies designed to effectively treat complex skin and hair concerns.
                        </p>
                        <div class="footer-social-icons">
                            <a href="#" class="social-circle-btn" aria-label="Instagram">
                                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                            <a href="#" class="social-circle-btn" aria-label="Facebook">
                                <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                            <a href="#" class="social-circle-btn" aria-label="YouTube">
                                <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            </a>
                            <a href="#" class="social-circle-btn" aria-label="X">
                                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                        </div>
                    </div>

                    <!-- Col 2: Quick Links -->
                    <div class="footer-links-col">
                        <h4 class="footer-title">Quick Links</h4>
                        <ul class="footer-menu">
                            <li><a href="../index.html">Home</a></li>
                            <li><a href="../about.html">About Us</a></li>
                            <li><a href="../services.html">Services</a></li>
                            <li><a href="../about.html">Doctors</a></li>
                            <li><a href="../services.html">Blog</a></li>
                        </ul>
                    </div>

                    <!-- Col 3: Services -->
                    <div class="footer-links-col">
                        <h4 class="footer-title">Services</h4>
                        <ul class="footer-menu">
                            <li><a href="../skin.html">Skin Care</a></li>
                            <li><a href="../hair.html">Hair Care</a></li>
                            <li><a href="../nail.html">Nail Care</a></li>
                        </ul>
                    </div>

                    <!-- Col 4: Address & Newsletter -->
                    <div class="footer-address-col">
                        <h4 class="footer-title">Address</h4>
                        <p class="footer-address-text">
                            C83, 10th Cross St, West Thillai Nagar,<br>
                            Tiruchirappalli, Tamil Nadu 620018
                        </p>

                        <h4 class="footer-title" style="margin-top: 1.85rem;">News Letter</h4>
                        <div class="footer-newsletter-pill">
                            <span class="newsletter-mail-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </span>
                            <input type="email" placeholder="Enter Email Address*" aria-label="Email subscription">
                            <button type="button" class="newsletter-submit-btn">Subscribe Now</button>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Bottom Sub-Footer Strip -->
            <div class="footer-bottom-strip">
                <div class="footer-bottom-item">©2026 All Rights Reserved</div>
                <div class="footer-bottom-item"><a href="#">Terms and Conditions</a></div>
                <div class="footer-bottom-item"><a href="#">Refund Policy</a></div>
                <div class="footer-bottom-item"><a href="#">Privacy Policy</a></div>
                <div class="footer-bottom-item"><a href="#">Sitemap</a></div>
            </div>

            <!-- Attribution -->
            <div class="footer-attribution">
                Designed and Developed By RiverBird Digital Solutions
            </div>

        </div>
    </footer>

    <!-- Scripts -->
    <script src="../js/navigation.js"></script>
    <script src="../js/animations.js"></script>
    <script src="../js/service-detail.js"></script>
</body>

</html>`;
}

// Ensure services directory exists
const targetDir = path.resolve(__dirname, '..', 'services');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Generate all files
let count = 0;
servicesData.forEach((service) => {
    const filePath = path.join(targetDir, `${service.slug}.html`);
    const html = buildServicePageHTML(service);
    fs.writeFileSync(filePath, html, 'utf8');
    count++;
    console.log(`[${count}/${servicesData.length}] Generated: ${service.slug}.html`);
});

console.log(`\nSuccessfully generated all ${count} service detail pages in ${targetDir}`);
