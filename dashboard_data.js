const DASHBOARD_DATA = {
  "v1": {
    "n_count": 4025,
    "stats": {
      "MEAN01_metric_wellbeing": {
        "slope": 0,
        "r2": 0,
        "valid": false
      },
      "SAF03_metric_wellbeing": {
        "slope": 0,
        "r2": 0,
        "valid": false
      },
      "VA01_metric_culture_fix_index": {
        "slope": 0,
        "r2": 0,
        "valid": false
      }
    },
    "hero_slope": 0,
    "top_drivers": [],
    "all_results": []
  },
  "v2": {
    "n_count": 4646,
    "stats": {
      "MEAN01_metric_wellbeing": {
        "slope": 23.328196588831474,
        "r2": 0.46485037871938295,
        "valid": true
      },
      "SAF03_metric_wellbeing": {
        "slope": 20.87619081867594,
        "r2": 0.431599592036105,
        "valid": true
      },
      "VA01_metric_culture_fix_index": {
        "slope": 17.239375399454435,
        "r2": 0.37484318746631007,
        "valid": true
      }
    },
    "hero_slope": 23.328196588831474,
    "top_drivers": [
      {
        "question_code": "CS01",
        "question_name": "[CS01] Overall Culture Rating",
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 21.240564857434002,
        "r2": 0.6363170306302599,
        "insight": "<strong>Insight:</strong> Perceptions of overall culture act as the primary filter through which all other employee experiences are processed."
      },
      {
        "question_code": "CV03",
        "question_name": "[CV03] Q9: Core Value Identification",
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 18.619358925165386,
        "r2": 0.6184216357920076,
        "insight": "<strong>Actionable Insight:</strong> Identification. When personal values overlap with company values, intrinsic motivation spikes significantly."
      },
      {
        "question_code": "WD07",
        "question_name": "[WD07] Q6.3: Purpose & Value Identification",
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 15.060378799354352,
        "r2": 0.597245648136367,
        "insight": "<strong>Insight:</strong> Identity Fusion. Strong identification with purpose transforms a job into a mission."
      },
      {
        "question_code": "WD102",
        "question_name": "[WD102] Monday-Morning Momentum",
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 13.189986412225128,
        "r2": 0.5885261126316695,
        "insight": "<strong>Insight:</strong> Emotional momentum. Monday-morning excitement is a leading indicator of discretionary effort and energy levels."
      },
      {
        "question_code": "VA01",
        "question_name": "[VA01] Q10: Peer Value Modeling",
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 19.20828955658722,
        "r2": 0.5615971736595589,
        "insight": "<strong>Actionable Insight:</strong> Peer curriculum. Colleague behavior is the primary signal for 'how things really work here.' Peer modeling beats policy."
      }
    ],
    "all_results": [
      {
        "question_code": "CS01",
        "question_name": "Overall Culture Rating",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 21.240564857434002,
        "r2": 0.6363170306302599,
        "insight": "<strong>Insight:</strong> Perceptions of overall culture act as the primary filter through which all other employee experiences are processed."
      },
      {
        "question_code": "CV03",
        "question_name": "Q9: Core Value Identification",
        "q_num": 9.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 18.619358925165386,
        "r2": 0.6184216357920076,
        "insight": "<strong>Actionable Insight:</strong> Identification. When personal values overlap with company values, intrinsic motivation spikes significantly."
      },
      {
        "question_code": "WD07",
        "question_name": "Q6.3: Purpose & Value Identification",
        "q_num": 6.3,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 15.060378799354352,
        "r2": 0.597245648136367,
        "insight": "<strong>Insight:</strong> Identity Fusion. Strong identification with purpose transforms a job into a mission."
      },
      {
        "question_code": "WD102",
        "question_name": "Monday-Morning Momentum",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 13.189986412225128,
        "r2": 0.5885261126316695,
        "insight": "<strong>Insight:</strong> Emotional momentum. Monday-morning excitement is a leading indicator of discretionary effort and energy levels."
      },
      {
        "question_code": "VA01",
        "question_name": "Q10: Peer Value Modeling",
        "q_num": 10.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 19.20828955658722,
        "r2": 0.5615971736595589,
        "insight": "<strong>Actionable Insight:</strong> Peer curriculum. Colleague behavior is the primary signal for 'how things really work here.' Peer modeling beats policy."
      },
      {
        "question_code": "VA02",
        "question_name": "Q11: Leadership Value Integrity",
        "q_num": 11.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 18.26458195622303,
        "r2": 0.5493944585881886,
        "insight": "<strong>Insight:</strong> Behavioral integrity. Leadership consistency is the ultimate judge of whether values are real or just marketing."
      },
      {
        "question_code": "WD05",
        "question_name": "Career Goal Fulfillment",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 10.592380706432383,
        "r2": 0.5418941006359357,
        "insight": "<strong>Insight:</strong> Strategic Talent Alignment. High-performers gravitate toward companies that explicitly fulfill their career aspirations."
      },
      {
        "question_code": "WD12",
        "question_name": "Product & Service Advocacy",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 13.034891574233129,
        "r2": 0.5286906558533188,
        "insight": ""
      },
      {
        "question_code": "WD101",
        "question_name": "Workplace Desire vs Necessity",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 12.407193588887857,
        "r2": 0.5077003159276668,
        "insight": ""
      },
      {
        "question_code": "WD01",
        "question_name": "Inherent Meaning vs Requirements",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 13.650762179316246,
        "r2": 0.5068570466920546,
        "insight": ""
      },
      {
        "question_code": "WD10",
        "question_name": "Q22: Multi-Year Retention Intent",
        "q_num": 22.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 9.018805749024775,
        "r2": 0.49032944518098986,
        "insight": "<strong>Insight:</strong> Stability anchor. Multi-year retention intent is the ultimate indicator of organizational stability and employee trust."
      },
      {
        "question_code": "CS04",
        "question_name": "Great Culture Score",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 7.739728649391245,
        "r2": 0.4799004749000757,
        "insight": "<strong>Insight:</strong> Cultural Capital. A high 'Great Culture' score is an organization's most valuable asset for both retention and recruitment."
      },
      {
        "question_code": "CTRL03",
        "question_name": "Q17: Employee Voice & Input",
        "q_num": 17.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 24.535924124457487,
        "r2": 0.47094049253427805,
        "insight": "<strong>Actionable Insight:</strong> Employee Voice. When staff feel their input is valued, they take greater psychological ownership of organizational outcomes."
      },
      {
        "question_code": "MEAN01",
        "question_name": "Q6.2: Manager Purpose Connection",
        "q_num": 6.2,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 23.328196588831474,
        "r2": 0.46485037871938295,
        "insight": "<strong>Actionable Insight:</strong> Connection is key. Managers must explicitly link daily tasks to the broader mission to unlock the highest engagement."
      },
      {
        "question_code": "REC01",
        "question_name": "Q14: Meaningful Recognition",
        "q_num": 14.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 22.95651526673944,
        "r2": 0.4437335627451693,
        "insight": "<strong>Insight:</strong> Perceived Value. Recognition must feel 'meaningful' to the individual to truly reinforce desired cultural behaviors."
      },
      {
        "question_code": "CS05",
        "question_name": "Employer Recommendation",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 6.816980018351487,
        "r2": 0.43768134992596097,
        "insight": "<strong>Insight:</strong> Advocate culture. Willingness to recommend the organization is the 'Ultimate Question' for employee loyalty."
      },
      {
        "question_code": "WD102",
        "question_name": "Monday-Morning Momentum",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 9.639171754399586,
        "r2": 0.43581758498693635,
        "insight": "<strong>Insight:</strong> Emotional momentum. Monday-morning excitement is a leading indicator of discretionary effort and energy levels."
      },
      {
        "question_code": "SAF02",
        "question_name": "Q15: Managerial Personal Care",
        "q_num": 15.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 20.73608461413755,
        "r2": 0.4330048145226003,
        "insight": "<strong>Actionable Insight:</strong> Relational management. Managers knowing the human behind the role transforms work from a transaction into a relationship."
      },
      {
        "question_code": "WD102",
        "question_name": "Monday-Morning Momentum",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 6.029992028906388,
        "r2": 0.43250732898436794,
        "insight": "<strong>Insight:</strong> Emotional momentum. Monday-morning excitement is a leading indicator of discretionary effort and energy levels."
      },
      {
        "question_code": "SAF03",
        "question_name": "Q16: Senior Leadership Care",
        "q_num": 16.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 20.87619081867594,
        "r2": 0.431599592036105,
        "insight": "<strong>Actionable Insight:</strong> Perceived organizational care. Caring from the top validates the employee's long-term future and commitment."
      },
      {
        "question_code": "WD07",
        "question_name": "Q6.3: Purpose & Value Identification",
        "q_num": 6.3,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 10.831825456319493,
        "r2": 0.4283835455952072,
        "insight": "<strong>Insight:</strong> Identity Fusion. Strong identification with purpose transforms a job into a mission."
      },
      {
        "question_code": "WD05",
        "question_name": "Career Goal Fulfillment",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 11.027352950362307,
        "r2": 0.4235664360246524,
        "insight": "<strong>Insight:</strong> Strategic Talent Alignment. High-performers gravitate toward companies that explicitly fulfill their career aspirations."
      },
      {
        "question_code": "WD03",
        "question_name": "Q21: Peer Collaboration Quality",
        "q_num": 21.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 9.990441849817906,
        "r2": 0.4185568978920162,
        "insight": ""
      },
      {
        "question_code": "CV02",
        "question_name": "Core Value Communication",
        "q_num": 8.1,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 17.154220869609397,
        "r2": 0.41113079870074587,
        "insight": "<strong>Insight:</strong> Salience matters. Regular discussion keeps cultural priorities top-of-mind, reducing friction in daily decision-making."
      },
      {
        "question_code": "CV01",
        "question_name": "Q8: Core Value Awareness",
        "q_num": 8.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 12.232807043559708,
        "r2": 0.40982778011422694,
        "insight": "<strong>Insight:</strong> Awareness is the start. Recitation is a baseline for alignment, though demonstration is what drives culture."
      },
      {
        "question_code": "VA02",
        "question_name": "Q11: Leadership Value Integrity",
        "q_num": 11.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 17.097714070145603,
        "r2": 0.39893298319859494,
        "insight": "<strong>Insight:</strong> Behavioral integrity. Leadership consistency is the ultimate judge of whether values are real or just marketing."
      },
      {
        "question_code": "WD07",
        "question_name": "Q6.3: Purpose & Value Identification",
        "q_num": 6.3,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 6.50228083217139,
        "r2": 0.3914674011938455,
        "insight": "<strong>Insight:</strong> Identity Fusion. Strong identification with purpose transforms a job into a mission."
      },
      {
        "question_code": "CV03",
        "question_name": "Q9: Core Value Identification",
        "q_num": 9.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 16.200902108200104,
        "r2": 0.38796510560896336,
        "insight": "<strong>Actionable Insight:</strong> Identification. When personal values overlap with company values, intrinsic motivation spikes significantly."
      },
      {
        "question_code": "WD12",
        "question_name": "Product & Service Advocacy",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 13.127278539458729,
        "r2": 0.3867122395951724,
        "insight": ""
      },
      {
        "question_code": "WD101",
        "question_name": "Workplace Desire vs Necessity",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 9.164917797026146,
        "r2": 0.38411895266612583,
        "insight": ""
      },
      {
        "question_code": "WD10",
        "question_name": "Q22: Multi-Year Retention Intent",
        "q_num": 22.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 9.295870848511228,
        "r2": 0.3756832213592468,
        "insight": "<strong>Insight:</strong> Stability anchor. Multi-year retention intent is the ultimate indicator of organizational stability and employee trust."
      },
      {
        "question_code": "VA01",
        "question_name": "Q10: Peer Value Modeling",
        "q_num": 10.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 17.239375399454435,
        "r2": 0.37484318746631007,
        "insight": "<strong>Actionable Insight:</strong> Peer curriculum. Colleague behavior is the primary signal for 'how things really work here.' Peer modeling beats policy."
      },
      {
        "question_code": "WD05",
        "question_name": "Career Goal Fulfillment",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 5.446991627669326,
        "r2": 0.3633919966285667,
        "insight": "<strong>Insight:</strong> Strategic Talent Alignment. High-performers gravitate toward companies that explicitly fulfill their career aspirations."
      },
      {
        "question_code": "MEAN03",
        "question_name": "Q20: Growth & Risk Opportunities",
        "q_num": 20.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 20.959373129621135,
        "r2": 0.3582982719673732,
        "insight": "<strong>Insight:</strong> The growth factor. Permission to take risks and fail is a prerequisite for rapid learning and professional expansion."
      },
      {
        "question_code": "SAF01",
        "question_name": "Operational Resource Support",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 22.39218796470781,
        "r2": 0.35168266396177017,
        "insight": "<strong>Insight:</strong> Operational trust. Lack of resources is often misinterpreted as lack of will; support is the foundational layer of confidence."
      },
      {
        "question_code": "WD03",
        "question_name": "Q21: Peer Collaboration Quality",
        "q_num": 21.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 4.836561077977784,
        "r2": 0.34493829983010427,
        "insight": ""
      },
      {
        "question_code": "LT10",
        "question_name": "Q6.1: Defined Organizational Purpose",
        "q_num": 6.1,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 16.150743310019408,
        "r2": 0.34307866142664534,
        "insight": "<strong>Insight:</strong> Strategic Clarity. A measurable 'North Star' purpose reduces decision fatigue and aligns energy across the organization."
      },
      {
        "question_code": "MEAN01",
        "question_name": "Q6.2: Manager Purpose Connection",
        "q_num": 6.2,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 14.602081947564571,
        "r2": 0.3414268676271258,
        "insight": "<strong>Actionable Insight:</strong> Connection is key. Managers must explicitly link daily tasks to the broader mission to unlock the highest engagement."
      },
      {
        "question_code": "WD101",
        "question_name": "Workplace Desire vs Necessity",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 5.363887421329645,
        "r2": 0.33365879668809284,
        "insight": ""
      },
      {
        "question_code": "REC01",
        "question_name": "Q14: Meaningful Recognition",
        "q_num": 14.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 14.49837731980602,
        "r2": 0.3317923905487792,
        "insight": "<strong>Insight:</strong> Perceived Value. Recognition must feel 'meaningful' to the individual to truly reinforce desired cultural behaviors."
      },
      {
        "question_code": "CTRL01",
        "question_name": "Role & Expectation Clarity",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 21.696895220298615,
        "r2": 0.33054970657633087,
        "insight": "<strong>Insight:</strong> Cognitive load reduction. Clear roles eliminate the invisible labor of navigating ambiguity, allowing more energy for execution."
      },
      {
        "question_code": "WD01",
        "question_name": "Inherent Meaning vs Requirements",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 9.343691997274219,
        "r2": 0.3292736571616758,
        "insight": ""
      },
      {
        "question_code": "CTRL03",
        "question_name": "Q17: Employee Voice & Input",
        "q_num": 17.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 14.830599832597626,
        "r2": 0.32254915013059404,
        "insight": "<strong>Actionable Insight:</strong> Employee Voice. When staff feel their input is valued, they take greater psychological ownership of organizational outcomes."
      },
      {
        "question_code": "REC02",
        "question_name": "Q18: Mutual Team Accountability",
        "q_num": 18.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 20.352776513682365,
        "r2": 0.3167912967975117,
        "insight": "<strong>Insight:</strong> Collective Standards. Peer-level accountability for quality work builds collective pride and performance standards."
      },
      {
        "question_code": "REC02",
        "question_name": "Q18: Mutual Team Accountability",
        "q_num": 18.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 14.810939815262646,
        "r2": 0.3144911461239013,
        "insight": "<strong>Insight:</strong> Collective Standards. Peer-level accountability for quality work builds collective pride and performance standards."
      },
      {
        "question_code": "CTRL01",
        "question_name": "Role & Expectation Clarity",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 15.441115773982467,
        "r2": 0.3138457311499837,
        "insight": "<strong>Insight:</strong> Cognitive load reduction. Clear roles eliminate the invisible labor of navigating ambiguity, allowing more energy for execution."
      },
      {
        "question_code": "SAF01",
        "question_name": "Operational Resource Support",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 15.426318580434105,
        "r2": 0.31289582282650374,
        "insight": "<strong>Insight:</strong> Operational trust. Lack of resources is often misinterpreted as lack of will; support is the foundational layer of confidence."
      },
      {
        "question_code": "WD10",
        "question_name": "Q22: Multi-Year Retention Intent",
        "q_num": 22.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 4.510225539881367,
        "r2": 0.31097187396287085,
        "insight": "<strong>Insight:</strong> Stability anchor. Multi-year retention intent is the ultimate indicator of organizational stability and employee trust."
      },
      {
        "question_code": "MEAN02",
        "question_name": "Q19: Team Support & Cohesion",
        "q_num": 19.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 20.190285660883514,
        "r2": 0.3081405930447886,
        "insight": "<strong>Insight:</strong> Social safety net. When teams support each other, overall organizational resilience increases and burnout risk drops."
      },
      {
        "question_code": "WD01",
        "question_name": "Inherent Meaning vs Requirements",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 5.505785601772299,
        "r2": 0.2899300519979251,
        "insight": ""
      },
      {
        "question_code": "LT04",
        "question_name": "Q13: Cultural Alignment Scoring",
        "q_num": 13.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 13.031694583755424,
        "r2": 0.28843302737576604,
        "insight": ""
      },
      {
        "question_code": "SAF02",
        "question_name": "Q15: Managerial Personal Care",
        "q_num": 15.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 12.349491734248186,
        "r2": 0.28790861140689294,
        "insight": "<strong>Actionable Insight:</strong> Relational management. Managers knowing the human behind the role transforms work from a transaction into a relationship."
      },
      {
        "question_code": "LT10",
        "question_name": "Q6.1: Defined Organizational Purpose",
        "q_num": 6.1,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 15.197838336021455,
        "r2": 0.28066823677734465,
        "insight": "<strong>Insight:</strong> Strategic Clarity. A measurable 'North Star' purpose reduces decision fatigue and aligns energy across the organization."
      },
      {
        "question_code": "CS04",
        "question_name": "Great Culture Score",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 8.075342453270718,
        "r2": 0.2786790571629021,
        "insight": "<strong>Insight:</strong> Cultural Capital. A high 'Great Culture' score is an organization's most valuable asset for both retention and recruitment."
      },
      {
        "question_code": "MEAN03",
        "question_name": "Q20: Growth & Risk Opportunities",
        "q_num": 20.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 13.46386175317542,
        "r2": 0.27716902696559476,
        "insight": "<strong>Insight:</strong> The growth factor. Permission to take risks and fail is a prerequisite for rapid learning and professional expansion."
      },
      {
        "question_code": "WD12",
        "question_name": "Product & Service Advocacy",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 5.863169293290913,
        "r2": 0.27126036378697227,
        "insight": ""
      },
      {
        "question_code": "CS05",
        "question_name": "Employer Recommendation",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 7.3195738406312,
        "r2": 0.26917103047880275,
        "insight": "<strong>Insight:</strong> Advocate culture. Willingness to recommend the organization is the 'Ultimate Question' for employee loyalty."
      },
      {
        "question_code": "LT02",
        "question_name": "Q12: Core Values Imagery",
        "q_num": 12.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 13.198916276272323,
        "r2": 0.26786520796340807,
        "insight": ""
      },
      {
        "question_code": "SAF03",
        "question_name": "Q16: Senior Leadership Care",
        "q_num": 16.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 12.009621338371334,
        "r2": 0.26776537255688104,
        "insight": "<strong>Actionable Insight:</strong> Perceived organizational care. Caring from the top validates the employee's long-term future and commitment."
      },
      {
        "question_code": "MEAN02",
        "question_name": "Q19: Team Support & Cohesion",
        "q_num": 19.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 13.663822647334262,
        "r2": 0.2645609213879916,
        "insight": "<strong>Insight:</strong> Social safety net. When teams support each other, overall organizational resilience increases and burnout risk drops."
      },
      {
        "question_code": "VA02",
        "question_name": "Q11: Leadership Value Integrity",
        "q_num": 11.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 18.949526195625563,
        "r2": 0.2613986142978446,
        "insight": "<strong>Insight:</strong> Behavioral integrity. Leadership consistency is the ultimate judge of whether values are real or just marketing."
      },
      {
        "question_code": "LT02",
        "question_name": "Q12: Core Values Imagery",
        "q_num": 12.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 12.491244782410028,
        "r2": 0.25967506578448574,
        "insight": ""
      },
      {
        "question_code": "CS04",
        "question_name": "Great Culture Score",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 5.159739707549229,
        "r2": 0.25739271682329123,
        "insight": "<strong>Insight:</strong> Cultural Capital. A high 'Great Culture' score is an organization's most valuable asset for both retention and recruitment."
      },
      {
        "question_code": "CS05",
        "question_name": "Employer Recommendation",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 9.410278175490896,
        "r2": 0.23718977785752204,
        "insight": "<strong>Insight:</strong> Advocate culture. Willingness to recommend the organization is the 'Ultimate Question' for employee loyalty."
      },
      {
        "question_code": "LT04",
        "question_name": "Q13: Cultural Alignment Scoring",
        "q_num": 13.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 12.135584789155796,
        "r2": 0.231092349444443,
        "insight": ""
      },
      {
        "question_code": "CS05",
        "question_name": "Employer Recommendation",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 7.837003895668806,
        "r2": 0.22810743537704814,
        "insight": "<strong>Insight:</strong> Advocate culture. Willingness to recommend the organization is the 'Ultimate Question' for employee loyalty."
      },
      {
        "question_code": "CS01",
        "question_name": "Overall Culture Rating",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 17.39375545340299,
        "r2": 0.22762023538074005,
        "insight": "<strong>Insight:</strong> Perceptions of overall culture act as the primary filter through which all other employee experiences are processed."
      },
      {
        "question_code": "CTRL02",
        "question_name": "Skill-to-Work Alignment",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 18.06342887515308,
        "r2": 0.22684945747788343,
        "insight": "<strong>Insight:</strong> Efficacy and Flow. Aligning task difficulty with skill level is the most reliable way to maintain consistent high performance."
      },
      {
        "question_code": "CS05",
        "question_name": "Employer Recommendation",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 4.46254727694638,
        "r2": 0.22635006136979852,
        "insight": "<strong>Insight:</strong> Advocate culture. Willingness to recommend the organization is the 'Ultimate Question' for employee loyalty."
      },
      {
        "question_code": "WD03",
        "question_name": "Q21: Peer Collaboration Quality",
        "q_num": 21.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 6.220697438214653,
        "r2": 0.2250150361293164,
        "insight": ""
      },
      {
        "question_code": "CS01",
        "question_name": "Overall Culture Rating",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 11.469605584661775,
        "r2": 0.2239130201092463,
        "insight": "<strong>Insight:</strong> Perceptions of overall culture act as the primary filter through which all other employee experiences are processed."
      },
      {
        "question_code": "VA01",
        "question_name": "Q10: Peer Value Modeling",
        "q_num": 10.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 18.155768436136114,
        "r2": 0.22177805162045572,
        "insight": "<strong>Actionable Insight:</strong> Peer curriculum. Colleague behavior is the primary signal for 'how things really work here.' Peer modeling beats policy."
      },
      {
        "question_code": "LT10",
        "question_name": "Q6.1: Defined Organizational Purpose",
        "q_num": 6.1,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 18.258748436164083,
        "r2": 0.2196835859423516,
        "insight": "<strong>Insight:</strong> Strategic Clarity. A measurable 'North Star' purpose reduces decision fatigue and aligns energy across the organization."
      },
      {
        "question_code": "CS04",
        "question_name": "Great Culture Score",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 9.651070709168673,
        "r2": 0.2122109310520398,
        "insight": "<strong>Insight:</strong> Cultural Capital. A high 'Great Culture' score is an organization's most valuable asset for both retention and recruitment."
      },
      {
        "question_code": "CV02",
        "question_name": "Core Value Communication",
        "q_num": 8.1,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 13.453467494529946,
        "r2": 0.20953931858250707,
        "insight": "<strong>Insight:</strong> Salience matters. Regular discussion keeps cultural priorities top-of-mind, reducing friction in daily decision-making."
      },
      {
        "question_code": "REC01",
        "question_name": "Q14: Meaningful Recognition",
        "q_num": 14.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 10.371990730710547,
        "r2": 0.2049239990478482,
        "insight": "<strong>Insight:</strong> Perceived Value. Recognition must feel 'meaningful' to the individual to truly reinforce desired cultural behaviors."
      },
      {
        "question_code": "CTRL01",
        "question_name": "Role & Expectation Clarity",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 11.35292028489636,
        "r2": 0.2047457998423171,
        "insight": "<strong>Insight:</strong> Cognitive load reduction. Clear roles eliminate the invisible labor of navigating ambiguity, allowing more energy for execution."
      },
      {
        "question_code": "WD05",
        "question_name": "Career Goal Fulfillment",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 5.5798235809013965,
        "r2": 0.20341623123887254,
        "insight": "<strong>Insight:</strong> Strategic Talent Alignment. High-performers gravitate toward companies that explicitly fulfill their career aspirations."
      },
      {
        "question_code": "CTRL03",
        "question_name": "Q17: Employee Voice & Input",
        "q_num": 17.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 10.4684827388979,
        "r2": 0.1939487157539631,
        "insight": "<strong>Actionable Insight:</strong> Employee Voice. When staff feel their input is valued, they take greater psychological ownership of organizational outcomes."
      },
      {
        "question_code": "WD102",
        "question_name": "Monday-Morning Momentum",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 5.484503737466327,
        "r2": 0.19086108739336516,
        "insight": "<strong>Insight:</strong> Emotional momentum. Monday-morning excitement is a leading indicator of discretionary effort and energy levels."
      },
      {
        "question_code": "CV03",
        "question_name": "Q9: Core Value Identification",
        "q_num": 9.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 15.557983970046946,
        "r2": 0.19085504079431803,
        "insight": "<strong>Actionable Insight:</strong> Identification. When personal values overlap with company values, intrinsic motivation spikes significantly."
      },
      {
        "question_code": "WD03",
        "question_name": "Q21: Peer Collaboration Quality",
        "q_num": 21.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 4.850346485852028,
        "r2": 0.18505307998488896,
        "insight": ""
      },
      {
        "question_code": "MEAN01",
        "question_name": "Q6.2: Manager Purpose Connection",
        "q_num": 6.2,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 9.689086553894414,
        "r2": 0.18141565413684013,
        "insight": "<strong>Actionable Insight:</strong> Connection is key. Managers must explicitly link daily tasks to the broader mission to unlock the highest engagement."
      },
      {
        "question_code": "REC02",
        "question_name": "Q18: Mutual Team Accountability",
        "q_num": 18.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 10.237679568802145,
        "r2": 0.18133732741126318,
        "insight": "<strong>Insight:</strong> Collective Standards. Peer-level accountability for quality work builds collective pride and performance standards."
      },
      {
        "question_code": "CS04",
        "question_name": "Great Culture Score",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 7.559079590731135,
        "r2": 0.18051066390383197,
        "insight": "<strong>Insight:</strong> Cultural Capital. A high 'Great Culture' score is an organization's most valuable asset for both retention and recruitment."
      },
      {
        "question_code": "SAF01",
        "question_name": "Operational Resource Support",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 10.615537531806984,
        "r2": 0.17881342039978454,
        "insight": "<strong>Insight:</strong> Operational trust. Lack of resources is often misinterpreted as lack of will; support is the foundational layer of confidence."
      },
      {
        "question_code": "WD07",
        "question_name": "Q6.3: Purpose & Value Identification",
        "q_num": 6.3,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 3.9921162914759774,
        "r2": 0.17807849734843328,
        "insight": "<strong>Insight:</strong> Identity Fusion. Strong identification with purpose transforms a job into a mission."
      },
      {
        "question_code": "MEAN02",
        "question_name": "Q19: Team Support & Cohesion",
        "q_num": 19.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 9.96414741631837,
        "r2": 0.1697862463929387,
        "insight": "<strong>Insight:</strong> Social safety net. When teams support each other, overall organizational resilience increases and burnout risk drops."
      },
      {
        "question_code": "CS01",
        "question_name": "Overall Culture Rating",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 20.3253327509981,
        "r2": 0.16570430725076324,
        "insight": "<strong>Insight:</strong> Perceptions of overall culture act as the primary filter through which all other employee experiences are processed."
      },
      {
        "question_code": "CTRL02",
        "question_name": "Skill-to-Work Alignment",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 11.23236798067668,
        "r2": 0.16443614193157707,
        "insight": "<strong>Insight:</strong> Efficacy and Flow. Aligning task difficulty with skill level is the most reliable way to maintain consistent high performance."
      },
      {
        "question_code": "WD101",
        "question_name": "Workplace Desire vs Necessity",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 5.03000577792509,
        "r2": 0.1565175221492613,
        "insight": ""
      },
      {
        "question_code": "SAF03",
        "question_name": "Q16: Senior Leadership Care",
        "q_num": 16.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 8.355786530063313,
        "r2": 0.1564268911723381,
        "insight": "<strong>Actionable Insight:</strong> Perceived organizational care. Caring from the top validates the employee's long-term future and commitment."
      },
      {
        "question_code": "MEAN01",
        "question_name": "Q6.2: Manager Purpose Connection",
        "q_num": 6.2,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 18.350534518792227,
        "r2": 0.15334958839540203,
        "insight": "<strong>Actionable Insight:</strong> Connection is key. Managers must explicitly link daily tasks to the broader mission to unlock the highest engagement."
      },
      {
        "question_code": "MEAN03",
        "question_name": "Q20: Growth & Risk Opportunities",
        "q_num": 20.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 9.113613397075344,
        "r2": 0.1532595585834864,
        "insight": "<strong>Insight:</strong> The growth factor. Permission to take risks and fail is a prerequisite for rapid learning and professional expansion."
      },
      {
        "question_code": "WD102",
        "question_name": "Monday-Morning Momentum",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 3.2417721833699003,
        "r2": 0.15085716256873227,
        "insight": "<strong>Insight:</strong> Emotional momentum. Monday-morning excitement is a leading indicator of discretionary effort and energy levels."
      },
      {
        "question_code": "CV01",
        "question_name": "Q8: Core Value Awareness",
        "q_num": 8.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 8.128789746176823,
        "r2": 0.1499546601431424,
        "insight": "<strong>Insight:</strong> Awareness is the start. Recitation is a baseline for alignment, though demonstration is what drives culture."
      },
      {
        "question_code": "SAF02",
        "question_name": "Q15: Managerial Personal Care",
        "q_num": 15.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 8.041588188388594,
        "r2": 0.14732657833568286,
        "insight": "<strong>Actionable Insight:</strong> Relational management. Managers knowing the human behind the role transforms work from a transaction into a relationship."
      },
      {
        "question_code": "WD10",
        "question_name": "Q22: Multi-Year Retention Intent",
        "q_num": 22.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 4.242144366377086,
        "r2": 0.14675003192907388,
        "insight": "<strong>Insight:</strong> Stability anchor. Multi-year retention intent is the ultimate indicator of organizational stability and employee trust."
      },
      {
        "question_code": "WD07",
        "question_name": "Q6.3: Purpose & Value Identification",
        "q_num": 6.3,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 5.395218345240487,
        "r2": 0.1437688945107759,
        "insight": "<strong>Insight:</strong> Identity Fusion. Strong identification with purpose transforms a job into a mission."
      },
      {
        "question_code": "CS01",
        "question_name": "Overall Culture Rating",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 16.038107369539,
        "r2": 0.14305827158343976,
        "insight": "<strong>Insight:</strong> Perceptions of overall culture act as the primary filter through which all other employee experiences are processed."
      },
      {
        "question_code": "LT02",
        "question_name": "Q12: Core Values Imagery",
        "q_num": 12.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 12.928236159873858,
        "r2": 0.13936197335561773,
        "insight": ""
      },
      {
        "question_code": "CTRL01",
        "question_name": "Role & Expectation Clarity",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 19.236469719198087,
        "r2": 0.13852452177249197,
        "insight": "<strong>Insight:</strong> Cognitive load reduction. Clear roles eliminate the invisible labor of navigating ambiguity, allowing more energy for execution."
      },
      {
        "question_code": "SAF01",
        "question_name": "Operational Resource Support",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 19.00211286804858,
        "r2": 0.13501934774393243,
        "insight": "<strong>Insight:</strong> Operational trust. Lack of resources is often misinterpreted as lack of will; support is the foundational layer of confidence."
      },
      {
        "question_code": "CV03",
        "question_name": "Q9: Core Value Identification",
        "q_num": 9.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 17.824578337857723,
        "r2": 0.13355798116975992,
        "insight": "<strong>Actionable Insight:</strong> Identification. When personal values overlap with company values, intrinsic motivation spikes significantly."
      },
      {
        "question_code": "LT04",
        "question_name": "Q13: Cultural Alignment Scoring",
        "q_num": 13.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 12.43137468867001,
        "r2": 0.13150081263742075,
        "insight": ""
      },
      {
        "question_code": "REC01",
        "question_name": "Q14: Meaningful Recognition",
        "q_num": 14.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 16.961388421157054,
        "r2": 0.129141988887308,
        "insight": "<strong>Insight:</strong> Perceived Value. Recognition must feel 'meaningful' to the individual to truly reinforce desired cultural behaviors."
      },
      {
        "question_code": "VA02",
        "question_name": "Q11: Leadership Value Integrity",
        "q_num": 11.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 18.225658528576542,
        "r2": 0.12891615642098364,
        "insight": "<strong>Insight:</strong> Behavioral integrity. Leadership consistency is the ultimate judge of whether values are real or just marketing."
      },
      {
        "question_code": "MEAN03",
        "question_name": "Q20: Growth & Risk Opportunities",
        "q_num": 20.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 17.172356192463255,
        "r2": 0.1282278120063226,
        "insight": "<strong>Insight:</strong> The growth factor. Permission to take risks and fail is a prerequisite for rapid learning and professional expansion."
      },
      {
        "question_code": "REC02",
        "question_name": "Q18: Mutual Team Accountability",
        "q_num": 18.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 17.673128179838383,
        "r2": 0.1273465222747714,
        "insight": "<strong>Insight:</strong> Collective Standards. Peer-level accountability for quality work builds collective pride and performance standards."
      },
      {
        "question_code": "LT10",
        "question_name": "Q6.1: Defined Organizational Purpose",
        "q_num": 6.1,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 18.778408495842147,
        "r2": 0.12689031943737006,
        "insight": "<strong>Insight:</strong> Strategic Clarity. A measurable 'North Star' purpose reduces decision fatigue and aligns energy across the organization."
      },
      {
        "question_code": "CTRL01",
        "question_name": "Role & Expectation Clarity",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 15.522880377985665,
        "r2": 0.12507450884799065,
        "insight": "<strong>Insight:</strong> Cognitive load reduction. Clear roles eliminate the invisible labor of navigating ambiguity, allowing more energy for execution."
      },
      {
        "question_code": "CTRL03",
        "question_name": "Q17: Employee Voice & Input",
        "q_num": 17.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 17.22845796282473,
        "r2": 0.1237907885381242,
        "insight": "<strong>Actionable Insight:</strong> Employee Voice. When staff feel their input is valued, they take greater psychological ownership of organizational outcomes."
      },
      {
        "question_code": "WD12",
        "question_name": "Product & Service Advocacy",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 5.360352234111426,
        "r2": 0.12094581734020748,
        "insight": ""
      },
      {
        "question_code": "WD03",
        "question_name": "Q21: Peer Collaboration Quality",
        "q_num": 21.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 2.5954884616331646,
        "r2": 0.11988013613361148,
        "insight": ""
      },
      {
        "question_code": "MEAN01",
        "question_name": "Q6.2: Manager Purpose Connection",
        "q_num": 6.2,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 13.758148637269802,
        "r2": 0.11952353858895559,
        "insight": "<strong>Actionable Insight:</strong> Connection is key. Managers must explicitly link daily tasks to the broader mission to unlock the highest engagement."
      },
      {
        "question_code": "WD05",
        "question_name": "Career Goal Fulfillment",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 2.8098679451789947,
        "r2": 0.11670103819375144,
        "insight": "<strong>Insight:</strong> Strategic Talent Alignment. High-performers gravitate toward companies that explicitly fulfill their career aspirations."
      },
      {
        "question_code": "WD01",
        "question_name": "Inherent Meaning vs Requirements",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 4.7678062963369054,
        "r2": 0.1159777216344644,
        "insight": ""
      },
      {
        "question_code": "WD12",
        "question_name": "Product & Service Advocacy",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 3.479421667874826,
        "r2": 0.11528599599015632,
        "insight": ""
      },
      {
        "question_code": "SAF01",
        "question_name": "Operational Resource Support",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 14.593681842966657,
        "r2": 0.11042571967580384,
        "insight": "<strong>Insight:</strong> Operational trust. Lack of resources is often misinterpreted as lack of will; support is the foundational layer of confidence."
      },
      {
        "question_code": "CV03",
        "question_name": "Q9: Core Value Identification",
        "q_num": 9.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 13.688121185336604,
        "r2": 0.1092112229830916,
        "insight": "<strong>Actionable Insight:</strong> Identification. When personal values overlap with company values, intrinsic motivation spikes significantly."
      },
      {
        "question_code": "VA01",
        "question_name": "Q10: Peer Value Modeling",
        "q_num": 10.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 17.327476613915344,
        "r2": 0.10769468170063534,
        "insight": "<strong>Actionable Insight:</strong> Peer curriculum. Colleague behavior is the primary signal for 'how things really work here.' Peer modeling beats policy."
      },
      {
        "question_code": "WD10",
        "question_name": "Q22: Multi-Year Retention Intent",
        "q_num": 22.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 2.384414345671765,
        "r2": 0.10488877184015011,
        "insight": "<strong>Insight:</strong> Stability anchor. Multi-year retention intent is the ultimate indicator of organizational stability and employee trust."
      },
      {
        "question_code": "WD101",
        "question_name": "Workplace Desire vs Necessity",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 2.711892096641169,
        "r2": 0.10292693461920244,
        "insight": ""
      },
      {
        "question_code": "MEAN02",
        "question_name": "Q19: Team Support & Cohesion",
        "q_num": 19.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 15.959166731989674,
        "r2": 0.1026404934863635,
        "insight": "<strong>Insight:</strong> Social safety net. When teams support each other, overall organizational resilience increases and burnout risk drops."
      },
      {
        "question_code": "REC01",
        "question_name": "Q14: Meaningful Recognition",
        "q_num": 14.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 12.790112758419593,
        "r2": 0.10182201545087877,
        "insight": "<strong>Insight:</strong> Perceived Value. Recognition must feel 'meaningful' to the individual to truly reinforce desired cultural behaviors."
      },
      {
        "question_code": "SAF02",
        "question_name": "Q15: Managerial Personal Care",
        "q_num": 15.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 13.490605530208773,
        "r2": 0.09770941658494003,
        "insight": "<strong>Actionable Insight:</strong> Relational management. Managers knowing the human behind the role transforms work from a transaction into a relationship."
      },
      {
        "question_code": "VA02",
        "question_name": "Q11: Leadership Value Integrity",
        "q_num": 11.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 13.455752323265203,
        "r2": 0.09743278826002888,
        "insight": "<strong>Insight:</strong> Behavioral integrity. Leadership consistency is the ultimate judge of whether values are real or just marketing."
      },
      {
        "question_code": "CTRL03",
        "question_name": "Q17: Employee Voice & Input",
        "q_num": 17.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 12.964904761943133,
        "r2": 0.09720362191018994,
        "insight": "<strong>Actionable Insight:</strong> Employee Voice. When staff feel their input is valued, they take greater psychological ownership of organizational outcomes."
      },
      {
        "question_code": "WD01",
        "question_name": "Inherent Meaning vs Requirements",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 2.8925775291925997,
        "r2": 0.09657519978750984,
        "insight": ""
      },
      {
        "question_code": "CTRL02",
        "question_name": "Skill-to-Work Alignment",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 7.778909893034427,
        "r2": 0.09517723234521858,
        "insight": "<strong>Insight:</strong> Efficacy and Flow. Aligning task difficulty with skill level is the most reliable way to maintain consistent high performance."
      },
      {
        "question_code": "SAF03",
        "question_name": "Q16: Senior Leadership Care",
        "q_num": 16.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 13.357269605912883,
        "r2": 0.09419941682625999,
        "insight": "<strong>Actionable Insight:</strong> Perceived organizational care. Caring from the top validates the employee's long-term future and commitment."
      },
      {
        "question_code": "MEAN03",
        "question_name": "Q20: Growth & Risk Opportunities",
        "q_num": 20.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 12.482195698093545,
        "r2": 0.09394046413477619,
        "insight": "<strong>Insight:</strong> The growth factor. Permission to take risks and fail is a prerequisite for rapid learning and professional expansion."
      },
      {
        "question_code": "REC02",
        "question_name": "Q18: Mutual Team Accountability",
        "q_num": 18.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 12.760457388344063,
        "r2": 0.0920536449192072,
        "insight": "<strong>Insight:</strong> Collective Standards. Peer-level accountability for quality work builds collective pride and performance standards."
      },
      {
        "question_code": "CV02",
        "question_name": "Core Value Communication",
        "q_num": 8.1,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 11.697956007512262,
        "r2": 0.0845083753360536,
        "insight": "<strong>Insight:</strong> Salience matters. Regular discussion keeps cultural priorities top-of-mind, reducing friction in daily decision-making."
      },
      {
        "question_code": "CTRL02",
        "question_name": "Skill-to-Work Alignment",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 14.59937233648265,
        "r2": 0.07900235695844549,
        "insight": "<strong>Insight:</strong> Efficacy and Flow. Aligning task difficulty with skill level is the most reliable way to maintain consistent high performance."
      },
      {
        "question_code": "VA01",
        "question_name": "Q10: Peer Value Modeling",
        "q_num": 10.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 12.398066325253353,
        "r2": 0.07645040606057718,
        "insight": "<strong>Actionable Insight:</strong> Peer curriculum. Colleague behavior is the primary signal for 'how things really work here.' Peer modeling beats policy."
      },
      {
        "question_code": "CTRL02",
        "question_name": "Skill-to-Work Alignment",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 11.977661200666573,
        "r2": 0.07373335562205419,
        "insight": "<strong>Insight:</strong> Efficacy and Flow. Aligning task difficulty with skill level is the most reliable way to maintain consistent high performance."
      },
      {
        "question_code": "SAF03",
        "question_name": "Q16: Senior Leadership Care",
        "q_num": 16.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 10.009844828980937,
        "r2": 0.07335264729026147,
        "insight": "<strong>Actionable Insight:</strong> Perceived organizational care. Caring from the top validates the employee's long-term future and commitment."
      },
      {
        "question_code": "LT04",
        "question_name": "Q13: Cultural Alignment Scoring",
        "q_num": 13.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 12.12379762850977,
        "r2": 0.06830033091660914,
        "insight": ""
      },
      {
        "question_code": "SAF02",
        "question_name": "Q15: Managerial Personal Care",
        "q_num": 15.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 9.522986572297128,
        "r2": 0.06751000629537218,
        "insight": "<strong>Actionable Insight:</strong> Relational management. Managers knowing the human behind the role transforms work from a transaction into a relationship."
      },
      {
        "question_code": "MEAN02",
        "question_name": "Q19: Team Support & Cohesion",
        "q_num": 19.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 10.932371324879098,
        "r2": 0.06678444599190425,
        "insight": "<strong>Insight:</strong> Social safety net. When teams support each other, overall organizational resilience increases and burnout risk drops."
      },
      {
        "question_code": "LT02",
        "question_name": "Q12: Core Values Imagery",
        "q_num": 12.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 12.036285983876594,
        "r2": 0.06596385939258465,
        "insight": ""
      },
      {
        "question_code": "CV01",
        "question_name": "Q8: Core Value Awareness",
        "q_num": 8.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 6.494182640424913,
        "r2": 0.05105519131107472,
        "insight": "<strong>Insight:</strong> Awareness is the start. Recitation is a baseline for alignment, though demonstration is what drives culture."
      },
      {
        "question_code": "LT10",
        "question_name": "Q6.1: Defined Organizational Purpose",
        "q_num": 6.1,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 10.006493370478205,
        "r2": 0.048304615254248895,
        "insight": "<strong>Insight:</strong> Strategic Clarity. A measurable 'North Star' purpose reduces decision fatigue and aligns energy across the organization."
      },
      {
        "question_code": "CV02",
        "question_name": "Core Value Communication",
        "q_num": 8.1,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 11.271296511319472,
        "r2": 0.04182749491432325,
        "insight": "<strong>Insight:</strong> Salience matters. Regular discussion keeps cultural priorities top-of-mind, reducing friction in daily decision-making."
      },
      {
        "question_code": "CV01",
        "question_name": "Q8: Core Value Awareness",
        "q_num": 8.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 7.894886977406546,
        "r2": 0.04022694629089307,
        "insight": "<strong>Insight:</strong> Awareness is the start. Recitation is a baseline for alignment, though demonstration is what drives culture."
      },
      {
        "question_code": "LT04",
        "question_name": "Q13: Cultural Alignment Scoring",
        "q_num": 13.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 7.638728933153809,
        "r2": 0.036349758180959646,
        "insight": ""
      },
      {
        "question_code": "LT02",
        "question_name": "Q12: Core Values Imagery",
        "q_num": 12.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 7.322087768378891,
        "r2": 0.03272689469157042,
        "insight": ""
      },
      {
        "question_code": "CV02",
        "question_name": "Core Value Communication",
        "q_num": 8.1,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 8.18247022827322,
        "r2": 0.03056548170760176,
        "insight": "<strong>Insight:</strong> Salience matters. Regular discussion keeps cultural priorities top-of-mind, reducing friction in daily decision-making."
      },
      {
        "question_code": "CV01",
        "question_name": "Q8: Core Value Awareness",
        "q_num": 8.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 5.8315087792149605,
        "r2": 0.030432341629262227,
        "insight": "<strong>Insight:</strong> Awareness is the start. Recitation is a baseline for alignment, though demonstration is what drives culture."
      }
    ]
  },
  "all": {
    "n_count": 8671,
    "stats": {
      "MEAN01_metric_wellbeing": {
        "slope": 23.607260639579234,
        "r2": 0.4713860586838562,
        "valid": true
      },
      "SAF03_metric_wellbeing": {
        "slope": 20.787833673812163,
        "r2": 0.419149201472353,
        "valid": true
      },
      "VA01_metric_culture_fix_index": {
        "slope": 12.075236592016132,
        "r2": 0.36428555905591586,
        "valid": true
      }
    },
    "hero_slope": 23.607260639579234,
    "top_drivers": [
      {
        "question_code": "CS01",
        "question_name": "[CS01] Overall Culture Rating",
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 14.109032484754826,
        "r2": 0.6655304418539104,
        "insight": "<strong>Insight:</strong> Perceptions of overall culture act as the primary filter through which all other employee experiences are processed."
      },
      {
        "question_code": "CV03",
        "question_name": "[CV03] Q9: Core Value Identification",
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 19.96545183728761,
        "r2": 0.5881313570405846,
        "insight": "<strong>Actionable Insight:</strong> Identification. When personal values overlap with company values, intrinsic motivation spikes significantly."
      },
      {
        "question_code": "VA01",
        "question_name": "[VA01] Q10: Peer Value Modeling",
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 20.72947795333921,
        "r2": 0.5333916462497361,
        "insight": "<strong>Actionable Insight:</strong> Peer curriculum. Colleague behavior is the primary signal for 'how things really work here.' Peer modeling beats policy."
      },
      {
        "question_code": "VA02",
        "question_name": "[VA02] Q11: Leadership Value Integrity",
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 19.274248804398702,
        "r2": 0.5063559586938117,
        "insight": "<strong>Insight:</strong> Behavioral integrity. Leadership consistency is the ultimate judge of whether values are real or just marketing."
      },
      {
        "question_code": "CV02",
        "question_name": "[CV02] Core Value Communication",
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 17.381718946918625,
        "r2": 0.4886520882082167,
        "insight": "<strong>Insight:</strong> Salience matters. Regular discussion keeps cultural priorities top-of-mind, reducing friction in daily decision-making."
      }
    ],
    "all_results": [
      {
        "question_code": "CS01",
        "question_name": "Overall Culture Rating",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 14.109032484754826,
        "r2": 0.6655304418539104,
        "insight": "<strong>Insight:</strong> Perceptions of overall culture act as the primary filter through which all other employee experiences are processed."
      },
      {
        "question_code": "CV03",
        "question_name": "Q9: Core Value Identification",
        "q_num": 9.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 19.96545183728761,
        "r2": 0.5881313570405846,
        "insight": "<strong>Actionable Insight:</strong> Identification. When personal values overlap with company values, intrinsic motivation spikes significantly."
      },
      {
        "question_code": "VA01",
        "question_name": "Q10: Peer Value Modeling",
        "q_num": 10.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 20.72947795333921,
        "r2": 0.5333916462497361,
        "insight": "<strong>Actionable Insight:</strong> Peer curriculum. Colleague behavior is the primary signal for 'how things really work here.' Peer modeling beats policy."
      },
      {
        "question_code": "VA02",
        "question_name": "Q11: Leadership Value Integrity",
        "q_num": 11.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 19.274248804398702,
        "r2": 0.5063559586938117,
        "insight": "<strong>Insight:</strong> Behavioral integrity. Leadership consistency is the ultimate judge of whether values are real or just marketing."
      },
      {
        "question_code": "CV02",
        "question_name": "Core Value Communication",
        "q_num": 8.1,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 17.381718946918625,
        "r2": 0.4886520882082167,
        "insight": "<strong>Insight:</strong> Salience matters. Regular discussion keeps cultural priorities top-of-mind, reducing friction in daily decision-making."
      },
      {
        "question_code": "CTRL03",
        "question_name": "Q17: Employee Voice & Input",
        "q_num": 17.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 25.061300441151044,
        "r2": 0.4788126734570509,
        "insight": "<strong>Actionable Insight:</strong> Employee Voice. When staff feel their input is valued, they take greater psychological ownership of organizational outcomes."
      },
      {
        "question_code": "CV01",
        "question_name": "Q8: Core Value Awareness",
        "q_num": 8.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 11.718321072575048,
        "r2": 0.4737409587210375,
        "insight": "<strong>Insight:</strong> Awareness is the start. Recitation is a baseline for alignment, though demonstration is what drives culture."
      },
      {
        "question_code": "MEAN01",
        "question_name": "Q6.2: Manager Purpose Connection",
        "q_num": 6.2,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 23.607260639579234,
        "r2": 0.4713860586838562,
        "insight": "<strong>Actionable Insight:</strong> Connection is key. Managers must explicitly link daily tasks to the broader mission to unlock the highest engagement."
      },
      {
        "question_code": "REC01",
        "question_name": "Q14: Meaningful Recognition",
        "q_num": 14.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 23.430003357651238,
        "r2": 0.44894960010126383,
        "insight": "<strong>Insight:</strong> Perceived Value. Recognition must feel 'meaningful' to the individual to truly reinforce desired cultural behaviors."
      },
      {
        "question_code": "LT10",
        "question_name": "Q6.1: Defined Organizational Purpose",
        "q_num": 6.1,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 13.170017654389984,
        "r2": 0.42812672925985806,
        "insight": "<strong>Insight:</strong> Strategic Clarity. A measurable 'North Star' purpose reduces decision fatigue and aligns energy across the organization."
      },
      {
        "question_code": "SAF02",
        "question_name": "Q15: Managerial Personal Care",
        "q_num": 15.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 21.012263909262856,
        "r2": 0.426384200811991,
        "insight": "<strong>Actionable Insight:</strong> Relational management. Managers knowing the human behind the role transforms work from a transaction into a relationship."
      },
      {
        "question_code": "SAF03",
        "question_name": "Q16: Senior Leadership Care",
        "q_num": 16.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 20.787833673812163,
        "r2": 0.419149201472353,
        "insight": "<strong>Actionable Insight:</strong> Perceived organizational care. Caring from the top validates the employee's long-term future and commitment."
      },
      {
        "question_code": "LT04",
        "question_name": "Q13: Cultural Alignment Scoring",
        "q_num": 13.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 12.293216187430746,
        "r2": 0.402164167818055,
        "insight": ""
      },
      {
        "question_code": "CS04",
        "question_name": "Great Culture Score",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 4.896763938345455,
        "r2": 0.3955921727572599,
        "insight": "<strong>Insight:</strong> Cultural Capital. A high 'Great Culture' score is an organization's most valuable asset for both retention and recruitment."
      },
      {
        "question_code": "VA02",
        "question_name": "Q11: Leadership Value Integrity",
        "q_num": 11.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 11.874711642629043,
        "r2": 0.3868372848364011,
        "insight": "<strong>Insight:</strong> Behavioral integrity. Leadership consistency is the ultimate judge of whether values are real or just marketing."
      },
      {
        "question_code": "CV03",
        "question_name": "Q9: Core Value Identification",
        "q_num": 9.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 11.134337234699325,
        "r2": 0.3681509869855639,
        "insight": "<strong>Actionable Insight:</strong> Identification. When personal values overlap with company values, intrinsic motivation spikes significantly."
      },
      {
        "question_code": "WD10",
        "question_name": "Q22: Multi-Year Retention Intent",
        "q_num": 22.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 2.6754493781645485,
        "r2": 0.3669573402896418,
        "insight": "<strong>Insight:</strong> Stability anchor. Multi-year retention intent is the ultimate indicator of organizational stability and employee trust."
      },
      {
        "question_code": "VA01",
        "question_name": "Q10: Peer Value Modeling",
        "q_num": 10.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 12.075236592016132,
        "r2": 0.36428555905591586,
        "insight": "<strong>Actionable Insight:</strong> Peer curriculum. Colleague behavior is the primary signal for 'how things really work here.' Peer modeling beats policy."
      },
      {
        "question_code": "MEAN03",
        "question_name": "Q20: Growth & Risk Opportunities",
        "q_num": 20.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 21.24717105302988,
        "r2": 0.35790921955347565,
        "insight": "<strong>Insight:</strong> The growth factor. Permission to take risks and fail is a prerequisite for rapid learning and professional expansion."
      },
      {
        "question_code": "SAF01",
        "question_name": "Operational Resource Support",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 22.784324319932246,
        "r2": 0.3564481196685053,
        "insight": "<strong>Insight:</strong> Operational trust. Lack of resources is often misinterpreted as lack of will; support is the foundational layer of confidence."
      },
      {
        "question_code": "CS05",
        "question_name": "Employer Recommendation",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 4.334366760815268,
        "r2": 0.3561129922752423,
        "insight": "<strong>Insight:</strong> Advocate culture. Willingness to recommend the organization is the 'Ultimate Question' for employee loyalty."
      },
      {
        "question_code": "LT02",
        "question_name": "Q12: Core Values Imagery",
        "q_num": 12.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 11.256587684997248,
        "r2": 0.3522294406197325,
        "insight": ""
      },
      {
        "question_code": "CTRL01",
        "question_name": "Role & Expectation Clarity",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 22.09908290113552,
        "r2": 0.3378023171768131,
        "insight": "<strong>Insight:</strong> Cognitive load reduction. Clear roles eliminate the invisible labor of navigating ambiguity, allowing more energy for execution."
      },
      {
        "question_code": "REC02",
        "question_name": "Q18: Mutual Team Accountability",
        "q_num": 18.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 20.468136848808328,
        "r2": 0.31331792975266115,
        "insight": "<strong>Insight:</strong> Collective Standards. Peer-level accountability for quality work builds collective pride and performance standards."
      },
      {
        "question_code": "CTRL03",
        "question_name": "Q17: Employee Voice & Input",
        "q_num": 17.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 10.39848933311661,
        "r2": 0.3100436249374874,
        "insight": "<strong>Actionable Insight:</strong> Employee Voice. When staff feel their input is valued, they take greater psychological ownership of organizational outcomes."
      },
      {
        "question_code": "MEAN02",
        "question_name": "Q19: Team Support & Cohesion",
        "q_num": 19.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 20.584985735970765,
        "r2": 0.3043626827092294,
        "insight": "<strong>Insight:</strong> Social safety net. When teams support each other, overall organizational resilience increases and burnout risk drops."
      },
      {
        "question_code": "CS04",
        "question_name": "Great Culture Score",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 8.23576394725915,
        "r2": 0.2975180103007601,
        "insight": "<strong>Insight:</strong> Cultural Capital. A high 'Great Culture' score is an organization's most valuable asset for both retention and recruitment."
      },
      {
        "question_code": "CS05",
        "question_name": "Employer Recommendation",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 7.438618315481812,
        "r2": 0.27886703611024877,
        "insight": "<strong>Insight:</strong> Advocate culture. Willingness to recommend the organization is the 'Ultimate Question' for employee loyalty."
      },
      {
        "question_code": "MEAN01",
        "question_name": "Q6.2: Manager Purpose Connection",
        "q_num": 6.2,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 9.34009592298538,
        "r2": 0.2775313770656411,
        "insight": "<strong>Actionable Insight:</strong> Connection is key. Managers must explicitly link daily tasks to the broader mission to unlock the highest engagement."
      },
      {
        "question_code": "REC01",
        "question_name": "Q14: Meaningful Recognition",
        "q_num": 14.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 9.449542797092246,
        "r2": 0.2746618579108737,
        "insight": "<strong>Insight:</strong> Perceived Value. Recognition must feel 'meaningful' to the individual to truly reinforce desired cultural behaviors."
      },
      {
        "question_code": "VA02",
        "question_name": "Q11: Leadership Value Integrity",
        "q_num": 11.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 19.282257684662717,
        "r2": 0.2711902509904919,
        "insight": "<strong>Insight:</strong> Behavioral integrity. Leadership consistency is the ultimate judge of whether values are real or just marketing."
      },
      {
        "question_code": "CV02",
        "question_name": "Core Value Communication",
        "q_num": 8.1,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 9.088989363522064,
        "r2": 0.2689222158702793,
        "insight": "<strong>Insight:</strong> Salience matters. Regular discussion keeps cultural priorities top-of-mind, reducing friction in daily decision-making."
      },
      {
        "question_code": "WD03",
        "question_name": "Q21: Peer Collaboration Quality",
        "q_num": 21.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 3.14091958350605,
        "r2": 0.26196637666416334,
        "insight": ""
      },
      {
        "question_code": "CTRL01",
        "question_name": "Role & Expectation Clarity",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 10.02626440946575,
        "r2": 0.26152686187664465,
        "insight": "<strong>Insight:</strong> Cognitive load reduction. Clear roles eliminate the invisible labor of navigating ambiguity, allowing more energy for execution."
      },
      {
        "question_code": "SAF01",
        "question_name": "Operational Resource Support",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 9.850130973890865,
        "r2": 0.25057163348684786,
        "insight": "<strong>Insight:</strong> Operational trust. Lack of resources is often misinterpreted as lack of will; support is the foundational layer of confidence."
      },
      {
        "question_code": "REC02",
        "question_name": "Q18: Mutual Team Accountability",
        "q_num": 18.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 9.39694282568611,
        "r2": 0.24838517246255765,
        "insight": "<strong>Insight:</strong> Collective Standards. Peer-level accountability for quality work builds collective pride and performance standards."
      },
      {
        "question_code": "CV01",
        "question_name": "Q8: Core Value Awareness",
        "q_num": 8.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 5.9330203566295685,
        "r2": 0.24442352527015454,
        "insight": "<strong>Insight:</strong> Awareness is the start. Recitation is a baseline for alignment, though demonstration is what drives culture."
      },
      {
        "question_code": "SAF02",
        "question_name": "Q15: Managerial Personal Care",
        "q_num": 15.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 8.191374998779933,
        "r2": 0.2437209714055547,
        "insight": "<strong>Actionable Insight:</strong> Relational management. Managers knowing the human behind the role transforms work from a transaction into a relationship."
      },
      {
        "question_code": "CS04",
        "question_name": "Great Culture Score",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 5.448331178341469,
        "r2": 0.24331852330629433,
        "insight": "<strong>Insight:</strong> Cultural Capital. A high 'Great Culture' score is an organization's most valuable asset for both retention and recruitment."
      },
      {
        "question_code": "LT02",
        "question_name": "Q12: Core Values Imagery",
        "q_num": 12.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 10.746299446758936,
        "r2": 0.24276841330654997,
        "insight": ""
      },
      {
        "question_code": "WD03",
        "question_name": "Q21: Peer Collaboration Quality",
        "q_num": 21.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.79379187635654,
        "r2": 0.23947386960320172,
        "insight": ""
      },
      {
        "question_code": "VA01",
        "question_name": "Q10: Peer Value Modeling",
        "q_num": 10.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 18.7541437560599,
        "r2": 0.23362604975203827,
        "insight": "<strong>Actionable Insight:</strong> Peer curriculum. Colleague behavior is the primary signal for 'how things really work here.' Peer modeling beats policy."
      },
      {
        "question_code": "LT10",
        "question_name": "Q6.1: Defined Organizational Purpose",
        "q_num": 6.1,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 11.168659539994758,
        "r2": 0.2328433834825887,
        "insight": "<strong>Insight:</strong> Strategic Clarity. A measurable 'North Star' purpose reduces decision fatigue and aligns energy across the organization."
      },
      {
        "question_code": "MEAN02",
        "question_name": "Q19: Team Support & Cohesion",
        "q_num": 19.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 9.213630674658116,
        "r2": 0.22933784935107027,
        "insight": "<strong>Insight:</strong> Social safety net. When teams support each other, overall organizational resilience increases and burnout risk drops."
      },
      {
        "question_code": "CS01",
        "question_name": "Overall Culture Rating",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 11.659111063314292,
        "r2": 0.2257995950763524,
        "insight": "<strong>Insight:</strong> Perceptions of overall culture act as the primary filter through which all other employee experiences are processed."
      },
      {
        "question_code": "MEAN03",
        "question_name": "Q20: Growth & Risk Opportunities",
        "q_num": 20.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 8.657808626826931,
        "r2": 0.22351696639548546,
        "insight": "<strong>Insight:</strong> The growth factor. Permission to take risks and fail is a prerequisite for rapid learning and professional expansion."
      },
      {
        "question_code": "SAF03",
        "question_name": "Q16: Senior Leadership Care",
        "q_num": 16.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 7.739896767397327,
        "r2": 0.21854676707050935,
        "insight": "<strong>Actionable Insight:</strong> Perceived organizational care. Caring from the top validates the employee's long-term future and commitment."
      },
      {
        "question_code": "CTRL02",
        "question_name": "Skill-to-Work Alignment",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 17.981646073081627,
        "r2": 0.21640882741964895,
        "insight": "<strong>Insight:</strong> Efficacy and Flow. Aligning task difficulty with skill level is the most reliable way to maintain consistent high performance."
      },
      {
        "question_code": "LT04",
        "question_name": "Q13: Cultural Alignment Scoring",
        "q_num": 13.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 10.368635264990711,
        "r2": 0.21636036137978876,
        "insight": ""
      },
      {
        "question_code": "WD05",
        "question_name": "Career Goal Fulfillment",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 5.512989303872151,
        "r2": 0.2080721758597499,
        "insight": "<strong>Insight:</strong> Strategic Talent Alignment. High-performers gravitate toward companies that explicitly fulfill their career aspirations."
      },
      {
        "question_code": "WD05",
        "question_name": "Career Goal Fulfillment",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 2.808731374838743,
        "r2": 0.20313464224307354,
        "insight": "<strong>Insight:</strong> Strategic Talent Alignment. High-performers gravitate toward companies that explicitly fulfill their career aspirations."
      },
      {
        "question_code": "WD01",
        "question_name": "Inherent Meaning vs Requirements",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.665646532711652,
        "r2": 0.20244056370263963,
        "insight": ""
      },
      {
        "question_code": "CS05",
        "question_name": "Employer Recommendation",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 4.568025176589413,
        "r2": 0.19652251052204983,
        "insight": "<strong>Insight:</strong> Advocate culture. Willingness to recommend the organization is the 'Ultimate Question' for employee loyalty."
      },
      {
        "question_code": "WD03",
        "question_name": "Q21: Peer Collaboration Quality",
        "q_num": 21.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 5.260693191854005,
        "r2": 0.195386248022565,
        "insight": ""
      },
      {
        "question_code": "WD07",
        "question_name": "Q6.3: Purpose & Value Identification",
        "q_num": 6.3,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 3.1966228787247557,
        "r2": 0.19177641876714535,
        "insight": "<strong>Insight:</strong> Identity Fusion. Strong identification with purpose transforms a job into a mission."
      },
      {
        "question_code": "CV03",
        "question_name": "Q9: Core Value Identification",
        "q_num": 9.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 15.582288515424969,
        "r2": 0.19170605766878512,
        "insight": "<strong>Actionable Insight:</strong> Identification. When personal values overlap with company values, intrinsic motivation spikes significantly."
      },
      {
        "question_code": "CS01",
        "question_name": "Overall Culture Rating",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 14.021772323563148,
        "r2": 0.17476538056323954,
        "insight": "<strong>Insight:</strong> Perceptions of overall culture act as the primary filter through which all other employee experiences are processed."
      },
      {
        "question_code": "CTRL01",
        "question_name": "Role & Expectation Clarity",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 11.280897646037056,
        "r2": 0.16449175523712645,
        "insight": "<strong>Insight:</strong> Cognitive load reduction. Clear roles eliminate the invisible labor of navigating ambiguity, allowing more energy for execution."
      },
      {
        "question_code": "WD10",
        "question_name": "Q22: Multi-Year Retention Intent",
        "q_num": 22.0,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 2.2775489628793766,
        "r2": 0.16294509827773318,
        "insight": "<strong>Insight:</strong> Stability anchor. Multi-year retention intent is the ultimate indicator of organizational stability and employee trust."
      },
      {
        "question_code": "LT10",
        "question_name": "Q6.1: Defined Organizational Purpose",
        "q_num": 6.1,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 11.79607931556303,
        "r2": 0.16007008030439085,
        "insight": "<strong>Insight:</strong> Strategic Clarity. A measurable 'North Star' purpose reduces decision fatigue and aligns energy across the organization."
      },
      {
        "question_code": "REC02",
        "question_name": "Q18: Mutual Team Accountability",
        "q_num": 18.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 10.69004848987063,
        "r2": 0.1597094704811295,
        "insight": "<strong>Insight:</strong> Collective Standards. Peer-level accountability for quality work builds collective pride and performance standards."
      },
      {
        "question_code": "MEAN01",
        "question_name": "Q6.2: Manager Purpose Connection",
        "q_num": 6.2,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 9.97643800205226,
        "r2": 0.15731830382107403,
        "insight": "<strong>Actionable Insight:</strong> Connection is key. Managers must explicitly link daily tasks to the broader mission to unlock the highest engagement."
      },
      {
        "question_code": "REC01",
        "question_name": "Q14: Meaningful Recognition",
        "q_num": 14.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 10.141410749286845,
        "r2": 0.15717820631913815,
        "insight": "<strong>Insight:</strong> Perceived Value. Recognition must feel 'meaningful' to the individual to truly reinforce desired cultural behaviors."
      },
      {
        "question_code": "CTRL03",
        "question_name": "Q17: Employee Voice & Input",
        "q_num": 17.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 10.429525987227121,
        "r2": 0.15496380349994687,
        "insight": "<strong>Actionable Insight:</strong> Employee Voice. When staff feel their input is valued, they take greater psychological ownership of organizational outcomes."
      },
      {
        "question_code": "MEAN02",
        "question_name": "Q19: Team Support & Cohesion",
        "q_num": 19.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 10.664800380648499,
        "r2": 0.15266462650769186,
        "insight": "<strong>Insight:</strong> Social safety net. When teams support each other, overall organizational resilience increases and burnout risk drops."
      },
      {
        "question_code": "WD07",
        "question_name": "Q6.3: Purpose & Value Identification",
        "q_num": 6.3,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 4.0099969736963885,
        "r2": 0.14994062224544225,
        "insight": "<strong>Insight:</strong> Identity Fusion. Strong identification with purpose transforms a job into a mission."
      },
      {
        "question_code": "WD10",
        "question_name": "Q22: Multi-Year Retention Intent",
        "q_num": 22.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 4.149839841683229,
        "r2": 0.1438284017263335,
        "insight": "<strong>Insight:</strong> Stability anchor. Multi-year retention intent is the ultimate indicator of organizational stability and employee trust."
      },
      {
        "question_code": "WD07",
        "question_name": "Q6.3: Purpose & Value Identification",
        "q_num": 6.3,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 5.318999106950675,
        "r2": 0.14117193216525414,
        "insight": "<strong>Insight:</strong> Identity Fusion. Strong identification with purpose transforms a job into a mission."
      },
      {
        "question_code": "SAF01",
        "question_name": "Operational Resource Support",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 10.116020404484871,
        "r2": 0.13130646475867702,
        "insight": "<strong>Insight:</strong> Operational trust. Lack of resources is often misinterpreted as lack of will; support is the foundational layer of confidence."
      },
      {
        "question_code": "MEAN03",
        "question_name": "Q20: Growth & Risk Opportunities",
        "q_num": 20.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 9.15566448482365,
        "r2": 0.12419184840494057,
        "insight": "<strong>Insight:</strong> The growth factor. Permission to take risks and fail is a prerequisite for rapid learning and professional expansion."
      },
      {
        "question_code": "WD03",
        "question_name": "Q21: Peer Collaboration Quality",
        "q_num": 21.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 3.0558739097096708,
        "r2": 0.12320309029332088,
        "insight": ""
      },
      {
        "question_code": "CTRL02",
        "question_name": "Skill-to-Work Alignment",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 6.968787696539165,
        "r2": 0.12225156365539025,
        "insight": "<strong>Insight:</strong> Efficacy and Flow. Aligning task difficulty with skill level is the most reliable way to maintain consistent high performance."
      },
      {
        "question_code": "SAF02",
        "question_name": "Q15: Managerial Personal Care",
        "q_num": 15.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 8.131752754027708,
        "r2": 0.11933461502621312,
        "insight": "<strong>Actionable Insight:</strong> Relational management. Managers knowing the human behind the role transforms work from a transaction into a relationship."
      },
      {
        "question_code": "WD12",
        "question_name": "Product & Service Advocacy",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 2.6834430103949765,
        "r2": 0.11836601465425223,
        "insight": ""
      },
      {
        "question_code": "LT04",
        "question_name": "Q13: Cultural Alignment Scoring",
        "q_num": 13.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 9.710624111299134,
        "r2": 0.1169504204275914,
        "insight": ""
      },
      {
        "question_code": "WD12",
        "question_name": "Product & Service Advocacy",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 5.051122551685656,
        "r2": 0.11150496615976935,
        "insight": ""
      },
      {
        "question_code": "WD07",
        "question_name": "Q6.3: Purpose & Value Identification",
        "q_num": 6.3,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.2505521953113656,
        "r2": 0.10983194884280634,
        "insight": "<strong>Insight:</strong> Identity Fusion. Strong identification with purpose transforms a job into a mission."
      },
      {
        "question_code": "SAF03",
        "question_name": "Q16: Senior Leadership Care",
        "q_num": 16.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 7.6697057310480865,
        "r2": 0.10662284692121804,
        "insight": "<strong>Actionable Insight:</strong> Perceived organizational care. Caring from the top validates the employee's long-term future and commitment."
      },
      {
        "question_code": "WD05",
        "question_name": "Career Goal Fulfillment",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 2.8286827824714593,
        "r2": 0.10236486030942826,
        "insight": "<strong>Insight:</strong> Strategic Talent Alignment. High-performers gravitate toward companies that explicitly fulfill their career aspirations."
      },
      {
        "question_code": "WD05",
        "question_name": "Career Goal Fulfillment",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.5581831200739817,
        "r2": 0.10202740012045863,
        "insight": "<strong>Insight:</strong> Strategic Talent Alignment. High-performers gravitate toward companies that explicitly fulfill their career aspirations."
      },
      {
        "question_code": "CS05",
        "question_name": "Employer Recommendation",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.805427951794247,
        "r2": 0.10083541152940345,
        "insight": "<strong>Insight:</strong> Advocate culture. Willingness to recommend the organization is the 'Ultimate Question' for employee loyalty."
      },
      {
        "question_code": "WD12",
        "question_name": "Product & Service Advocacy",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.8701453822254392,
        "r2": 0.09382298758295737,
        "insight": ""
      },
      {
        "question_code": "WD01",
        "question_name": "Inherent Meaning vs Requirements",
        "q_num": 999,
        "metric_code": "metric_culture_fix_index",
        "metric_name": "Culture Health",
        "slope": 1.9294201103596758,
        "r2": 0.09179264931914743,
        "insight": ""
      },
      {
        "question_code": "LT02",
        "question_name": "Q12: Core Values Imagery",
        "q_num": 12.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 8.330473561213964,
        "r2": 0.08990558730922504,
        "insight": ""
      },
      {
        "question_code": "CV02",
        "question_name": "Core Value Communication",
        "q_num": 8.1,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 9.983572113549613,
        "r2": 0.08626676966615165,
        "insight": "<strong>Insight:</strong> Salience matters. Regular discussion keeps cultural priorities top-of-mind, reducing friction in daily decision-making."
      },
      {
        "question_code": "WD10",
        "question_name": "Q22: Multi-Year Retention Intent",
        "q_num": 22.0,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 2.326770762838515,
        "r2": 0.08449516798375711,
        "insight": "<strong>Insight:</strong> Stability anchor. Multi-year retention intent is the ultimate indicator of organizational stability and employee trust."
      },
      {
        "question_code": "WD01",
        "question_name": "Inherent Meaning vs Requirements",
        "q_num": 999,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 3.504152394006698,
        "r2": 0.08050009627541876,
        "insight": ""
      },
      {
        "question_code": "WD12",
        "question_name": "Product & Service Advocacy",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 3.1210809588064743,
        "r2": 0.07955567453738377,
        "insight": ""
      },
      {
        "question_code": "CS04",
        "question_name": "Great Culture Score",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.035032665216454,
        "r2": 0.07894238369310613,
        "insight": "<strong>Insight:</strong> Cultural Capital. A high 'Great Culture' score is an organization's most valuable asset for both retention and recruitment."
      },
      {
        "question_code": "CS05",
        "question_name": "Employer Recommendation",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 1.8720960127329136,
        "r2": 0.07675927316422837,
        "insight": "<strong>Insight:</strong> Advocate culture. Willingness to recommend the organization is the 'Ultimate Question' for employee loyalty."
      },
      {
        "question_code": "WD05",
        "question_name": "Career Goal Fulfillment",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 1.5998108945233478,
        "r2": 0.07614457996864776,
        "insight": "<strong>Insight:</strong> Strategic Talent Alignment. High-performers gravitate toward companies that explicitly fulfill their career aspirations."
      },
      {
        "question_code": "CS04",
        "question_name": "Great Culture Score",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.6454332339067776,
        "r2": 0.0728964082312582,
        "insight": "<strong>Insight:</strong> Cultural Capital. A high 'Great Culture' score is an organization's most valuable asset for both retention and recruitment."
      },
      {
        "question_code": "CTRL02",
        "question_name": "Skill-to-Work Alignment",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 7.420365107846627,
        "r2": 0.0688667083831106,
        "insight": "<strong>Insight:</strong> Efficacy and Flow. Aligning task difficulty with skill level is the most reliable way to maintain consistent high performance."
      },
      {
        "question_code": "WD03",
        "question_name": "Q21: Peer Collaboration Quality",
        "q_num": 21.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.22753566718529,
        "r2": 0.065300484739929,
        "insight": ""
      },
      {
        "question_code": "WD01",
        "question_name": "Inherent Meaning vs Requirements",
        "q_num": 999,
        "metric_code": "metric_core_values",
        "metric_name": "Core Values",
        "slope": 2.2374193126336643,
        "r2": 0.06132928328705689,
        "insight": ""
      },
      {
        "question_code": "WD07",
        "question_name": "Q6.3: Purpose & Value Identification",
        "q_num": 6.3,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.3650310966795711,
        "r2": 0.05707077034108743,
        "insight": "<strong>Insight:</strong> Identity Fusion. Strong identification with purpose transforms a job into a mission."
      },
      {
        "question_code": "WD10",
        "question_name": "Q22: Multi-Year Retention Intent",
        "q_num": 22.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 1.1978718246465216,
        "r2": 0.052079243716108725,
        "insight": "<strong>Insight:</strong> Stability anchor. Multi-year retention intent is the ultimate indicator of organizational stability and employee trust."
      },
      {
        "question_code": "CTRL03",
        "question_name": "Q17: Employee Voice & Input",
        "q_num": 17.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 3.430042430026997,
        "r2": 0.03897798662631746,
        "insight": "<strong>Actionable Insight:</strong> Employee Voice. When staff feel their input is valued, they take greater psychological ownership of organizational outcomes."
      },
      {
        "question_code": "VA02",
        "question_name": "Q11: Leadership Value Integrity",
        "q_num": 11.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 3.4819819819819853,
        "r2": 0.03843026096922986,
        "insight": "<strong>Insight:</strong> Behavioral integrity. Leadership consistency is the ultimate judge of whether values are real or just marketing."
      },
      {
        "question_code": "REC02",
        "question_name": "Q18: Mutual Team Accountability",
        "q_num": 18.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 3.261997821995629,
        "r2": 0.03458262411372803,
        "insight": "<strong>Insight:</strong> Collective Standards. Peer-level accountability for quality work builds collective pride and performance standards."
      },
      {
        "question_code": "CV03",
        "question_name": "Q9: Core Value Identification",
        "q_num": 9.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 3.133620904471068,
        "r2": 0.03369211323104737,
        "insight": "<strong>Actionable Insight:</strong> Identification. When personal values overlap with company values, intrinsic motivation spikes significantly."
      },
      {
        "question_code": "CS01",
        "question_name": "Overall Culture Rating",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.9524309117571232,
        "r2": 0.03367216639291526,
        "insight": "<strong>Insight:</strong> Perceptions of overall culture act as the primary filter through which all other employee experiences are processed."
      },
      {
        "question_code": "VA01",
        "question_name": "Q10: Peer Value Modeling",
        "q_num": 10.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 3.4128716954024645,
        "r2": 0.033622398722403024,
        "insight": "<strong>Actionable Insight:</strong> Peer curriculum. Colleague behavior is the primary signal for 'how things really work here.' Peer modeling beats policy."
      },
      {
        "question_code": "LT02",
        "question_name": "Q12: Core Values Imagery",
        "q_num": 12.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.3121815738123606,
        "r2": 0.03265228162298206,
        "insight": ""
      },
      {
        "question_code": "CV01",
        "question_name": "Q8: Core Value Awareness",
        "q_num": 8.0,
        "metric_code": "metric_wellbeing",
        "metric_name": "Wellbeing",
        "slope": 4.195976611043718,
        "r2": 0.0325037576047148,
        "insight": "<strong>Insight:</strong> Awareness is the start. Recitation is a baseline for alignment, though demonstration is what drives culture."
      },
      {
        "question_code": "MEAN03",
        "question_name": "Q20: Growth & Risk Opportunities",
        "q_num": 20.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 3.061946385846485,
        "r2": 0.032301880617025436,
        "insight": "<strong>Insight:</strong> The growth factor. Permission to take risks and fail is a prerequisite for rapid learning and professional expansion."
      },
      {
        "question_code": "MEAN01",
        "question_name": "Q6.2: Manager Purpose Connection",
        "q_num": 6.2,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.905783655815604,
        "r2": 0.03103659606023723,
        "insight": "<strong>Actionable Insight:</strong> Connection is key. Managers must explicitly link daily tasks to the broader mission to unlock the highest engagement."
      },
      {
        "question_code": "LT04",
        "question_name": "Q13: Cultural Alignment Scoring",
        "q_num": 13.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.301113545855742,
        "r2": 0.030960356928328325,
        "insight": ""
      },
      {
        "question_code": "VA02",
        "question_name": "Q11: Leadership Value Integrity",
        "q_num": 11.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 2.514075595288564,
        "r2": 0.028297957712932753,
        "insight": "<strong>Insight:</strong> Behavioral integrity. Leadership consistency is the ultimate judge of whether values are real or just marketing."
      },
      {
        "question_code": "REC01",
        "question_name": "Q14: Meaningful Recognition",
        "q_num": 14.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.8132205453994152,
        "r2": 0.02812693663546273,
        "insight": "<strong>Insight:</strong> Perceived Value. Recognition must feel 'meaningful' to the individual to truly reinforce desired cultural behaviors."
      },
      {
        "question_code": "WD12",
        "question_name": "Product & Service Advocacy",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 1.2058455255565703,
        "r2": 0.027616188468662983,
        "insight": ""
      },
      {
        "question_code": "CV03",
        "question_name": "Q9: Core Value Identification",
        "q_num": 9.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 2.366628195048645,
        "r2": 0.027143980994208117,
        "insight": "<strong>Actionable Insight:</strong> Identification. When personal values overlap with company values, intrinsic motivation spikes significantly."
      },
      {
        "question_code": "CS01",
        "question_name": "Overall Culture Rating",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 2.2289021837515923,
        "r2": 0.02710639263966408,
        "insight": "<strong>Insight:</strong> Perceptions of overall culture act as the primary filter through which all other employee experiences are processed."
      },
      {
        "question_code": "WD01",
        "question_name": "Inherent Meaning vs Requirements",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 0.8181517116055202,
        "r2": 0.026936318368417922,
        "insight": ""
      },
      {
        "question_code": "MEAN02",
        "question_name": "Q19: Team Support & Cohesion",
        "q_num": 19.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.8900807582118366,
        "r2": 0.026071871449153128,
        "insight": "<strong>Insight:</strong> Social safety net. When teams support each other, overall organizational resilience increases and burnout risk drops."
      },
      {
        "question_code": "SAF01",
        "question_name": "Operational Resource Support",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.933130705805085,
        "r2": 0.025671357782142912,
        "insight": "<strong>Insight:</strong> Operational trust. Lack of resources is often misinterpreted as lack of will; support is the foundational layer of confidence."
      },
      {
        "question_code": "SAF02",
        "question_name": "Q15: Managerial Personal Care",
        "q_num": 15.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.4637187934949902,
        "r2": 0.02547414811503068,
        "insight": "<strong>Actionable Insight:</strong> Relational management. Managers knowing the human behind the role transforms work from a transaction into a relationship."
      },
      {
        "question_code": "SAF01",
        "question_name": "Operational Resource Support",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 2.387664010995509,
        "r2": 0.024027609634427183,
        "insight": "<strong>Insight:</strong> Operational trust. Lack of resources is often misinterpreted as lack of will; support is the foundational layer of confidence."
      },
      {
        "question_code": "CTRL01",
        "question_name": "Role & Expectation Clarity",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 2.373164876647629,
        "r2": 0.02391167871392985,
        "insight": "<strong>Insight:</strong> Cognitive load reduction. Clear roles eliminate the invisible labor of navigating ambiguity, allowing more energy for execution."
      },
      {
        "question_code": "REC01",
        "question_name": "Q14: Meaningful Recognition",
        "q_num": 14.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 2.178888364312106,
        "r2": 0.023832135926264653,
        "insight": "<strong>Insight:</strong> Perceived Value. Recognition must feel 'meaningful' to the individual to truly reinforce desired cultural behaviors."
      },
      {
        "question_code": "CTRL01",
        "question_name": "Role & Expectation Clarity",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.786469713780688,
        "r2": 0.0233391353558543,
        "insight": "<strong>Insight:</strong> Cognitive load reduction. Clear roles eliminate the invisible labor of navigating ambiguity, allowing more energy for execution."
      },
      {
        "question_code": "SAF03",
        "question_name": "Q16: Senior Leadership Care",
        "q_num": 16.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 2.221139006628237,
        "r2": 0.020795225831922726,
        "insight": "<strong>Actionable Insight:</strong> Perceived organizational care. Caring from the top validates the employee's long-term future and commitment."
      },
      {
        "question_code": "CTRL03",
        "question_name": "Q17: Employee Voice & Input",
        "q_num": 17.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 2.0499128897091965,
        "r2": 0.019663886740032055,
        "insight": "<strong>Actionable Insight:</strong> Employee Voice. When staff feel their input is valued, they take greater psychological ownership of organizational outcomes."
      },
      {
        "question_code": "LT04",
        "question_name": "Q13: Cultural Alignment Scoring",
        "q_num": 13.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.5718562176008568,
        "r2": 0.019638004942963527,
        "insight": ""
      },
      {
        "question_code": "MEAN01",
        "question_name": "Q6.2: Manager Purpose Connection",
        "q_num": 6.2,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.9403665009380937,
        "r2": 0.0195475890876452,
        "insight": "<strong>Actionable Insight:</strong> Connection is key. Managers must explicitly link daily tasks to the broader mission to unlock the highest engagement."
      },
      {
        "question_code": "LT10",
        "question_name": "Q6.1: Defined Organizational Purpose",
        "q_num": 6.1,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 1.8826442507389904,
        "r2": 0.019221783424011374,
        "insight": "<strong>Insight:</strong> Strategic Clarity. A measurable 'North Star' purpose reduces decision fatigue and aligns energy across the organization."
      },
      {
        "question_code": "VA01",
        "question_name": "Q10: Peer Value Modeling",
        "q_num": 10.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 2.0499953054318945,
        "r2": 0.01713454742691045,
        "insight": "<strong>Actionable Insight:</strong> Peer curriculum. Colleague behavior is the primary signal for 'how things really work here.' Peer modeling beats policy."
      },
      {
        "question_code": "MEAN03",
        "question_name": "Q20: Growth & Risk Opportunities",
        "q_num": 20.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.765057297102805,
        "r2": 0.01516101905757572,
        "insight": "<strong>Insight:</strong> The growth factor. Permission to take risks and fail is a prerequisite for rapid learning and professional expansion."
      },
      {
        "question_code": "LT02",
        "question_name": "Q12: Core Values Imagery",
        "q_num": 12.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.3332261679906,
        "r2": 0.014757717403374948,
        "insight": ""
      },
      {
        "question_code": "LT10",
        "question_name": "Q6.1: Defined Organizational Purpose",
        "q_num": 6.1,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.4042138484330327,
        "r2": 0.014536689962052929,
        "insight": "<strong>Insight:</strong> Strategic Clarity. A measurable 'North Star' purpose reduces decision fatigue and aligns energy across the organization."
      },
      {
        "question_code": "REC02",
        "question_name": "Q18: Mutual Team Accountability",
        "q_num": 18.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.7789827594012322,
        "r2": 0.014528213830160452,
        "insight": "<strong>Insight:</strong> Collective Standards. Peer-level accountability for quality work builds collective pride and performance standards."
      },
      {
        "question_code": "CV02",
        "question_name": "Core Value Communication",
        "q_num": 8.1,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 1.959289875063153,
        "r2": 0.014438796387101438,
        "insight": "<strong>Insight:</strong> Salience matters. Regular discussion keeps cultural priorities top-of-mind, reducing friction in daily decision-making."
      },
      {
        "question_code": "SAF03",
        "question_name": "Q16: Senior Leadership Care",
        "q_num": 16.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.4104616996706358,
        "r2": 0.011844395270190877,
        "insight": "<strong>Actionable Insight:</strong> Perceived organizational care. Caring from the top validates the employee's long-term future and commitment."
      },
      {
        "question_code": "SAF02",
        "question_name": "Q15: Managerial Personal Care",
        "q_num": 15.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.374690428658924,
        "r2": 0.011202252272380031,
        "insight": "<strong>Actionable Insight:</strong> Relational management. Managers knowing the human behind the role transforms work from a transaction into a relationship."
      },
      {
        "question_code": "MEAN02",
        "question_name": "Q19: Team Support & Cohesion",
        "q_num": 19.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.5397042999457167,
        "r2": 0.010452135430942922,
        "insight": "<strong>Insight:</strong> Social safety net. When teams support each other, overall organizational resilience increases and burnout risk drops."
      },
      {
        "question_code": "CV01",
        "question_name": "Q8: Core Value Awareness",
        "q_num": 8.0,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 1.1204727570186632,
        "r2": 0.010072378629754741,
        "insight": "<strong>Insight:</strong> Awareness is the start. Recitation is a baseline for alignment, though demonstration is what drives culture."
      },
      {
        "question_code": "CV02",
        "question_name": "Core Value Communication",
        "q_num": 8.1,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.3327551246554872,
        "r2": 0.009436532934617436,
        "insight": "<strong>Insight:</strong> Salience matters. Regular discussion keeps cultural priorities top-of-mind, reducing friction in daily decision-making."
      },
      {
        "question_code": "CTRL02",
        "question_name": "Skill-to-Work Alignment",
        "q_num": 999,
        "metric_code": "metric_motivation",
        "metric_name": "Motivation",
        "slope": 1.507445133526358,
        "r2": 0.0066093856904172466,
        "insight": "<strong>Insight:</strong> Efficacy and Flow. Aligning task difficulty with skill level is the most reliable way to maintain consistent high performance."
      },
      {
        "question_code": "CTRL02",
        "question_name": "Skill-to-Work Alignment",
        "q_num": 999,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 1.0208825998911824,
        "r2": 0.004281616891065876,
        "insight": "<strong>Insight:</strong> Efficacy and Flow. Aligning task difficulty with skill level is the most reliable way to maintain consistent high performance."
      },
      {
        "question_code": "CV01",
        "question_name": "Q8: Core Value Awareness",
        "q_num": 8.0,
        "metric_code": "metric_loyalty",
        "metric_name": "Loyalty",
        "slope": 0.478900052115808,
        "r2": 0.002598946516431444,
        "insight": "<strong>Insight:</strong> Awareness is the start. Recitation is a baseline for alignment, though demonstration is what drives culture."
      }
    ]
  }
};