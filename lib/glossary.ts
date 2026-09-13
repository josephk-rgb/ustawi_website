export type GlossaryTerm = {
  term: string;
  shortTitle: string;
  definition: string;
  relatedSlugs?: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Accountability",
    shortTitle: "accountability",
    definition:
      "Owning the harm caused by an offence without denial, minimising, or shifting blame. In SOTP, accountability is practised in the group before any talk of a fresh start.",
    relatedSlugs: ["sotp", "restorative-justice"],
  },
  {
    term: "Aftercare",
    shortTitle: "aftercare",
    definition:
      "Support after release — counselling, family mediation, supervision, and practical help — so skills learned in prison have somewhere to land.",
    relatedSlugs: ["reintegration", "desistance"],
  },
  {
    term: "Cognitive behavioural therapy (CBT)",
    shortTitle: "cbt",
    definition:
      "A method that links thoughts, emotions, and actions. In corrections it is used to challenge beliefs that excuse harm and to practise different responses in high-risk situations.",
    relatedSlugs: ["cognitive-restructuring", "relapse-prevention"],
  },
  {
    term: "Cognitive restructuring",
    shortTitle: "cognitive-restructuring",
    definition:
      "The CBT skill of noticing a thought that justifies harm (\"they asked for it\", \"it was the drink\") and replacing it with a more accurate one.",
    relatedSlugs: ["cbt", "sotp"],
  },
  {
    term: "Desistance",
    shortTitle: "desistance",
    definition:
      "The process of stopping offending and staying stopped. It usually needs a new identity, reasons to keep it, and a community that will receive the person.",
    relatedSlugs: ["reintegration", "ubuntu"],
  },
  {
    term: "Evidence-based practice",
    shortTitle: "evidence-based-practice",
    definition:
      "Using methods that have been tested in rehabilitation research — such as CBT and structured, offence-specific groups — rather than one-off talks.",
    relatedSlugs: ["cbt", "sotp"],
  },
  {
    term: "Facilitator",
    shortTitle: "facilitator",
    definition:
      "A trained person who runs group sessions. In Ustawi's model this includes correctional officers prepared through Training-of-Trainers.",
    relatedSlugs: ["training-of-trainers"],
  },
  {
    term: "Kenya Prisons Service",
    shortTitle: "kenya-prisons-service",
    definition:
      "The national service responsible for custody, welfare, and rehabilitation in Kenyan prisons. Ustawi delivers SOTP in partnership with the Service.",
    relatedSlugs: ["sotp"],
  },
  {
    term: "Offence-specific programme",
    shortTitle: "offence-specific",
    definition:
      "Treatment designed for a particular type of offending, not a generic life-skills course. SOTP is offence-specific to sexual offending by adult men.",
    relatedSlugs: ["sotp"],
  },
  {
    term: "Recidivism",
    shortTitle: "recidivism",
    definition:
      "A return to offending after a previous conviction or release. Rehabilitation aims to lower this risk; no programme can honestly promise it will be zero.",
    relatedSlugs: ["desistance", "relapse-prevention"],
  },
  {
    term: "Reintegration",
    shortTitle: "reintegration",
    definition:
      "The practical and social process of returning to family and community after prison: housing, documents, work, relationships, and acceptance with boundaries.",
    relatedSlugs: ["aftercare", "desistance"],
  },
  {
    term: "Relapse prevention",
    shortTitle: "relapse-prevention",
    definition:
      "A plan for spotting triggers, warning signs, and high-risk situations, plus the people and actions that interrupt a return to harm.",
    relatedSlugs: ["cbt", "sotp"],
  },
  {
    term: "Restorative justice",
    shortTitle: "restorative-justice",
    definition:
      "A response to crime that starts with who was harmed and what can be made right. It sits alongside the criminal law; it does not replace a sentence or require victim forgiveness.",
    relatedSlugs: ["accountability", "ubuntu"],
  },
  {
    term: "Sex Offender Treatment Programme (SOTP)",
    shortTitle: "sotp",
    definition:
      "Kenya's structured rehabilitation programme for adult men convicted of sexual offences. A full Ustawi cycle is 288 hours over eight months, delivered with Kenya Prisons Service.",
    relatedSlugs: ["offence-specific", "cbt", "training-of-trainers"],
  },
  {
    term: "Training-of-Trainers (ToT)",
    shortTitle: "training-of-trainers",
    definition:
      "Preparing correctional officers to facilitate SOTP themselves so the programme continues after an external team leaves a facility.",
    relatedSlugs: ["facilitator", "sotp"],
  },
  {
    term: "Trauma-informed care",
    shortTitle: "trauma-informed-care",
    definition:
      "Running groups in a predictable, respectful way that accounts for participants' histories of violence or harm, without using those histories as an excuse for the offence.",
    relatedSlugs: ["cbt", "sotp"],
  },
  {
    term: "Ubuntu",
    shortTitle: "ubuntu",
    definition:
      "The idea that \"I am because we are.\" In Ustawi's work it means individual change is incomplete unless communities are prepared to receive people home.",
    relatedSlugs: ["reintegration", "restorative-justice"],
  },
  {
    term: "Victim empathy",
    shortTitle: "victim-empathy",
    definition:
      "Work that helps a participant understand the impact of their offence on people who were harmed. It does not require those people to enter the room.",
    relatedSlugs: ["restorative-justice", "sotp"],
  },
];
