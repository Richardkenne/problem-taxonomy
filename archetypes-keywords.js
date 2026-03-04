// archetypes-keywords.js
// Keyword scoring dictionary for the 12 Problem Archetypes.
// Format: [phrase, weight]
// Longer / more specific phrases get higher weight.
// Weight scale: 1 = generic, 2 = relevant, 3 = strong signal, 4 = very specific
//
// Coverage per archetype: ~90-100 entries across domains:
//   core concept · user language · industry verticals ·
//   startup signals · Italian equivalents · colloquial expressions

const ARCHETYPE_KEYWORDS = {

  // ─────────────────────────────────────────────────────────────
  // 01 — COORDINATION PROBLEM
  // Supply and demand exist but fail to connect efficiently
  // ─────────────────────────────────────────────────────────────
  coordination: {
    id: 'coordination',
    label: 'Coordination Problem',
    keywords: [
      // core concept
      ['supply and demand', 3], ['buyers and sellers', 3], ['two-sided market', 4],
      ['two sided market', 4], ['two-sided', 3], ['two sided', 3],
      ['matching', 2], ['match', 1], ['mismatch', 3], ['supply demand mismatch', 4],
      ['demand exists but no supply', 4], ['supply exists but no demand', 4],

      // connect / bridge
      ['connect buyers', 3], ['connect sellers', 3], ['connect people', 2],
      ['connect supply', 3], ['connect demand', 3], ['connect workers', 3],
      ['find each other', 3], ["can't find each other", 4], ['cannot find each other', 4],
      ['no way to connect', 4], ['hard to connect', 3], ['difficult to connect', 3],
      ['no bridge', 3], ['missing bridge', 3], ['bridge the gap', 2],
      ['link buyer to seller', 4], ['link provider to customer', 4],
      ['connect driver to passenger', 4], ['connect host to guest', 4],

      // marketplace / platform
      ['marketplace', 2], ['two-sided platform', 4], ['multi-sided', 3],
      ['aggregator', 2], ['booking platform', 3], ['on-demand platform', 3],
      ['gig platform', 3], ['gig economy', 2], ['peer to peer', 3], ['p2p', 2],
      ['c2c', 2], ['b2c matching', 3], ['b2b matching', 3],
      ['sharing economy', 3], ['collaborative consumption', 3],

      // coordination failure signals
      ['inefficient channel', 3], ['fragmented market', 2], ['scattered supply', 3],
      ['no reliable way', 3], ['word of mouth', 2], ['rely on contacts', 3],
      ['old boy network', 3], ['personal connections only', 3],
      ['informal market', 3], ['grey market', 2], ['black market', 2],
      ['unstructured market', 3], ['unorganized market', 3],

      // specific verticals — transport
      ['rideshare', 3], ['ride share', 3], ['hailing a cab', 3], ['taxi problem', 3],
      ['logistics matching', 3], ['freight matching', 3], ['truck driver matching', 3],
      ['last mile', 2], ['delivery matching', 3],

      // specific verticals — labour / freelance
      ['find a freelancer', 3], ['find a worker', 3], ['hire talent', 2],
      ['find skilled worker', 3], ['connect talent to company', 4],
      ['staffing problem', 3], ['temp agency problem', 3],
      ['remote worker matching', 3], ['outsourcing matching', 3],

      // specific verticals — real estate / space
      ['find a room', 3], ['find accommodation', 3], ['spare room', 3],
      ['empty property', 3], ['unused space', 3], ['co-working matching', 3],
      ['find office space', 3], ['coworking', 2],

      // specific verticals — services
      ['find a provider', 3], ['find a supplier', 3], ['find a contractor', 3],
      ['find a plumber', 3], ['find a babysitter', 3], ['find a tutor', 3],
      ['find a cleaner', 3], ['find a handyman', 3], ['find a mechanic', 3],
      ['service provider matching', 4], ['local service matching', 4],

      // user language / colloquial
      ['connect', 1], ['link', 1], ['network', 1], ['people looking for', 2],
      ['looking for each other', 3], ['who do you call', 3],
      ['nobody knows who to call', 4], ['no directory', 3],
      ['hard to book', 3], ['difficult to book', 3], ['booking is a pain', 4],

      // Italian equivalents
      ['trovare fornitore', 3], ['connettere domanda e offerta', 4],
      ['mercato frammentato', 3], ['nessun punto di incontro', 4],
      ['difficile trovare', 3], ['come faccio a trovare', 3],
      ['non c\'è un posto unico', 4], ['passaparola', 2],
      ['non esiste una piattaforma', 4], ['mettere in contatto', 3],
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 02 — DISCOVERY PROBLEM
  // Things exist but users can't find them
  // ─────────────────────────────────────────────────────────────
  discovery: {
    id: 'discovery',
    label: 'Discovery Problem',
    keywords: [
      // can't find things
      ["can't find", 3], ['cannot find', 3], ['hard to find', 3], ['difficult to find', 3],
      ['no way to find', 4], ['impossible to find', 4], ['finding is hard', 3],
      ['find what exists', 3], ['things exist but', 3], ['already exists but', 3],
      ['out there but', 3], ['buried somewhere', 3], ['exists somewhere', 2],
      ['no one knows about it', 4], ['nobody finds it', 4],

      // gerund / natural language variants
      ['issues finding', 3], ['issues in finding', 3], ['problems finding', 3],
      ['trouble finding', 3], ['difficulty finding', 3], ['struggle finding', 3],
      ['hard time finding', 3], ['hard time searching', 3],
      ['finding information', 3], ['finding the right', 3], ['finding a good', 3],
      ['finding what they need', 4], ['finding what you need', 4],
      ['finding a place', 3], ['finding a cafe', 3], ['finding a restaurant', 3],
      ['finding a service', 3], ['finding a product', 3], ['finding a provider', 3],
      ['looking for information', 3], ['looking for a cafe', 3], ['looking for a place', 3],
      ['no information available', 3], ['lack of information', 2],
      ['people have issues', 2], ['users have issues', 2],

      // search / browse
      ['search', 1], ['discovery', 2], ['discover', 2], ['explore', 1],
      ['browse', 1], ['search results', 2], ['poor search', 3], ['bad search', 3],
      ['search fails', 3], ['no results', 2], ['search engine', 1],
      ['content discovery', 3], ['product discovery', 3], ['service discovery', 3],
      ['local discovery', 3], ['event discovery', 3], ['job discovery', 3],

      // visibility / hidden
      ['invisible', 2], ['hidden', 2], ['not visible', 3], ['hard to see', 2],
      ['no visibility', 3], ['buried', 2], ['scattered online', 3],
      ['no one sees it', 3], ['not ranking', 2], ['impossible to surface', 3],
      ['dark inventory', 3], ['undiscoverable', 3], ['hard to surface', 3],
      ['long tail', 2], ['tail content', 2], ['niche products', 2],

      // recommendations / curation
      ['recommendation', 2], ['recommend', 1], ['curate', 2], ['curation', 2],
      ['filter', 1], ['sort', 1], ['rank', 1], ['personalized', 2],
      ['personalization', 2], ['for you', 1], ['tailored', 2],
      ['algorithmic feed', 2], ['smart feed', 2], ['relevant results', 2],

      // user frustration language
      ['waste time searching', 3], ['spend hours searching', 3], ['searching forever', 3],
      ['word of mouth only', 3], ['rely on friends', 2], ['ask around', 2],
      ['trial and error', 2], ['stumble upon', 2], ['lucky to find', 3],
      ['how do you even find', 4], ['where do you look', 3], ['where to look', 3],
      ['overwhelmed by options', 3], ['decision fatigue', 2],

      // specific verticals — local
      ['find a cafe', 3], ['find a restaurant', 3], ['find a place', 2],
      ['find things to do', 3], ['find local events', 3], ['find nearby', 3],
      ['find activities', 2], ['find experiences', 2], ['find nightlife', 3],

      // specific verticals — professional
      ['find a doctor', 3], ['find a lawyer', 3], ['find a specialist', 3],
      ['find a therapist', 3], ['find a gym', 3], ['find a school', 3],
      ['find a course', 3], ['find a mentor', 3], ['find an expert', 3],
      ['find a job', 2], ['find a candidate', 2], ['find co-founder', 3],

      // specific verticals — products / content
      ['find the right product', 3], ['find a tool', 2], ['find software', 2],
      ['find a book', 2], ['find content', 2], ['find a podcast', 2],
      ['find a creator', 2], ['find a community', 2], ['find an app', 2],

      // social media / content visibility / virality
      ['go viral', 4], ['get viral', 4], ['want to go viral', 4], ['trying to go viral', 4],
      ['viral content', 3], ['viral reach', 3], ['viral post', 3],
      ['social media reach', 3], ['social media visibility', 3], ['social media growth', 3],
      ['social media', 2], ['grow on social', 3], ['grow on instagram', 3],
      ['get more followers', 3], ['get followers', 2], ['gain followers', 2],
      ['content not reaching', 4], ['no one sees my content', 4], ['content ignored', 3],
      ['no views', 3], ['low reach', 3], ['reach problem', 3], ['zero reach', 4],
      ['organic reach', 2], ['reach more people', 3], ['reach a wider audience', 3],
      ['audience discovery', 3], ['grow an audience', 3], ['build an audience', 2],
      ['content visibility', 3], ['post visibility', 3], ['get seen', 2], ['be seen', 2],
      ['algorithm', 2], ['beat the algorithm', 3], ['fight the algorithm', 3],
      ['tiktok', 2], ['instagram reach', 3], ['youtube discovery', 3],

      // platform examples / signals
      ['search-first', 3], ['indexed', 1], ['searchable', 2], ['aggregation of content', 3],
      ['content database', 2], ['directory', 2], ['registry', 2], ['catalog', 2],

      // Italian equivalents
      ['non riesco a trovare', 4], ['difficile da trovare', 3], ['impossibile trovare', 4],
      ['non appare nei risultati', 4], ['non si trova online', 4],
      ['devo chiedere a qualcuno', 3], ['solo passaparola', 3],
      ['non c\'è un motore di ricerca per', 4], ['esiste ma non si trova', 4],
      ['come si trova', 3], ['dove cerco', 3],
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 03 — INFORMATION ASYMMETRY
  // One party holds significantly more information
  // ─────────────────────────────────────────────────────────────
  information: {
    id: 'information',
    label: 'Information Asymmetry',
    keywords: [
      // core concept
      ['information asymmetry', 4], ['asymmetric information', 4],
      ['one side knows more', 4], ['one party knows', 4], ['seller knows more', 4],
      ['buyer doesn\'t know', 4], ['hidden information', 3],
      ['knowledge gap', 3], ['information gap', 3], ['data gap', 3],
      ['unequal information', 4], ['uneven playing field', 3],
      ['insider advantage', 3], ['information advantage', 3],

      // opacity / transparency
      ['opaque', 2], ['opaque pricing', 3], ['pricing is unclear', 3],
      ['no transparency', 3], ['lack of transparency', 3], ['transparent', 1],
      ['price is unknown', 3], ['prices vary wildly', 3], ['hidden pricing', 3],
      ['price opacity', 3], ['no price list', 3], ['custom pricing', 2],
      ['pricing on request', 3], ['call for a quote', 3],

      // trust / verification gap
      ['can\'t verify', 3], ['cannot verify', 3], ['no data', 2], ['no information', 2],
      ['don\'t know if', 2], ['no way to know', 3], ['hidden fees', 3],
      ['no way to check', 3], ['no track record', 3], ['no history', 2],
      ['lack of data', 3], ['data is missing', 3], ['no public data', 3],

      // expert vs consumer
      ['expert knows', 3], ['only experts know', 3], ['professional knowledge', 2],
      ['insider knowledge', 3], ['asymmetric', 2], ['specialist knowledge', 3],
      ['industry knows but consumers don\'t', 4], ['professionals have access', 3],
      ['only insiders know', 4], ['black box', 3], ['opacity in the industry', 3],

      // salary / compensation
      ['salary', 2], ['salary transparency', 4], ['pay gap', 3], ['compensation', 2],
      ['underpaid', 2], ['pay equity', 3], ['salary data', 3], ['market rate', 2],
      ['benchmark salary', 3], ['what should i be paid', 4], ['am i overpaid', 3],
      ['am i underpaid', 3], ['negotiate salary', 2],

      // real estate
      ['real estate data', 3], ['property value', 2], ['home price', 2],
      ['market value', 2], ['agent knows more', 3], ['realtor advantage', 3],
      ['comps', 2], ['comparable sales', 3],

      // employment / hiring
      ['company culture', 2], ['what\'s it like to work there', 3], ['glassdoor', 1],
      ['interview process', 2], ['layoffs', 2], ['toxic workplace', 2],
      ['management quality', 2],

      // finance
      ['credit score', 2], ['credit history', 2], ['background check', 2],
      ['financial record', 2], ['medical record', 2],

      // fraud / deception
      ['mislead', 2], ['deceive', 2], ['hide information', 3], ['withhold', 2],
      ['false advertising', 3], ['misleading claims', 3], ['hidden agenda', 2],

      // B2B signals
      ['firmographic data', 3], ['intent data', 3], ['buying signals', 3],
      ['dark funnel', 3], ['anonymous visitor', 3], ['lead intelligence', 3],
      ['sales intelligence', 3], ['data enrichment', 3],

      // food / nutrition awareness
      ['junk food', 3], ['eat junk food', 4], ['unhealthy eating', 4], ['bad diet', 3],
      ['people don\'t know what they eat', 4], ['hidden ingredients', 3], ['food labels', 2],
      ['nutrition labels', 3], ['hidden sugar', 3], ['hidden calories', 3],
      ['don\'t know what\'s in their food', 4], ['unaware of nutrition', 3],
      ['processed food', 2], ['ultra-processed', 3], ['food transparency', 3],
      ['misleading food labels', 4], ['calories hidden', 3], ['nutritional value', 2],

      // Italian equivalents
      ['non si sa quanto costa', 4], ['prezzi nascosti', 3], ['non c\'è trasparenza', 3],
      ['non so se è affidabile', 3], ['una parte sa più dell\'altra', 4],
      ['informazioni riservate', 3], ['solo gli esperti sanno', 3],
      ['mercato opaco', 3], ['prezzo su richiesta', 3], ['dati non accessibili', 3],
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 04 — TRUST PROBLEM
  // Parties willing to transact are blocked by lack of trust
  // ─────────────────────────────────────────────────────────────
  trust: {
    id: 'trust',
    label: 'Trust Problem',
    keywords: [
      // core concept
      ['can\'t trust', 3], ['cannot trust', 3], ['distrust', 3], ['lack of trust', 3],
      ['trust problem', 4], ['no trust', 3], ['trust barrier', 4],
      ['trust gap', 4], ['low trust', 3], ['trust issue', 3],
      ['willingness to transact blocked', 4], ['afraid to transact', 4],

      // fraud / safety
      ['fraud', 2], ['scam', 2], ['fake', 2], ['counterfeit', 2],
      ['identity theft', 3], ['phishing', 2], ['scammer', 2],
      ['con artist', 2], ['impersonation', 3], ['stolen identity', 3],
      ['account takeover', 3], ['unauthorized access', 2],
      ['money laundering', 2], ['aml', 3],

      // verification / identity
      ['verify', 2], ['verification', 2], ['identity', 2], ['kyc', 3],
      ['know your customer', 3], ['authenticate', 2], ['authentication', 2],
      ['identity verification', 4], ['id check', 3], ['proof of identity', 3],
      ['legitimate', 2], ['legit', 2], ['real person', 3], ['fake profile', 3],
      ['bot account', 3], ['fake account', 3], ['catfish', 3],
      ['background check', 3], ['criminal record', 2], ['reference check', 2],
      ['license verification', 3], ['accreditation check', 3],

      // barriers to transaction
      ['won\'t buy', 3], ['afraid to pay', 3], ['hesitate to share', 3],
      ['payment fear', 3], ['share credit card', 3], ['personal data', 2],
      ['don\'t want to give my details', 4], ['is this website safe', 4],
      ['is this company real', 4], ['fear of getting scammed', 4],
      ['afraid to share card', 3], ['reluctant to pay', 3],

      // contracts / legal
      ['contract', 1], ['signature', 2], ['legally binding', 3], ['escrow', 3],
      ['guarantee', 2], ['warranty', 2], ['refund protection', 3],
      ['dispute resolution', 3], ['chargeback', 2], ['buyer protection', 3],
      ['seller protection', 3], ['money back guarantee', 3],
      ['digital signature', 3], ['e-signature', 3], ['notarize', 3],
      ['legal agreement', 2], ['terms of service', 1], ['compliance', 2],

      // reputation / social proof
      ['reputation', 2], ['reviews', 1], ['rating', 1], ['trusted seller', 3],
      ['verified seller', 3], ['trusted platform', 2], ['social proof', 3],
      ['verified badge', 3], ['trust badge', 3], ['seal of trust', 3],
      ['testimonial', 2], ['case study', 1], ['endorsement', 2],

      // specific verticals
      ['online marketplace trust', 4], ['buying from strangers', 4],
      ['renting from strangers', 4], ['sharing home with stranger', 4],
      ['online dating safety', 3], ['meet online', 2],
      ['wire transfer fear', 3], ['crypto scam', 3], ['investment fraud', 3],
      ['medical credential', 3], ['doctor verification', 3],

      // Italian equivalents
      ['non mi fido', 4], ['paura di essere truffato', 4], ['è legittimo', 3],
      ['come faccio a fidarmi', 4], ['verifica identità', 3],
      ['sito sicuro', 3], ['pagamento sicuro', 3], ['truffa online', 3],
      ['fidato', 2], ['è affidabile', 3], ['ho paura di pagare', 4],
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 05 — INFRASTRUCTURE GAP
  // The foundational layer needed to build products is missing
  // ─────────────────────────────────────────────────────────────
  infrastructure: {
    id: 'infrastructure',
    label: 'Infrastructure Gap',
    keywords: [
      // core concept
      ['infrastructure', 2], ['missing layer', 4], ['foundational layer', 4],
      ['foundation doesn\'t exist', 4], ['build from scratch', 3],
      ['everyone rebuilds', 4], ['every company builds', 4], ['reinvent the wheel', 3],
      ['no standard exists', 4], ['standard is missing', 4], ['missing standard', 4],
      ['no protocol', 3], ['no common protocol', 4], ['fragmented infrastructure', 3],

      // plumbing / backbone
      ['plumbing', 3], ['backbone', 2], ['standard', 2], ['layer', 1],
      ['primitive', 2], ['building block', 3], ['underpinning', 2],
      ['critical infrastructure', 3], ['shared infrastructure', 3],
      ['commodity infrastructure', 3], ['utility', 2], ['utility layer', 3],
      ['rails', 2], ['pipes', 2], ['plumbing layer', 3], ['core layer', 3],

      // developer / technical signals
      ['api', 2], ['developer', 1], ['sdk', 3], ['developer tool', 3],
      ['developer experience', 3], ['devex', 3], ['integration', 2],
      ['technical debt', 3], ['legacy', 2], ['monolith', 2],
      ['microservice', 2], ['webhook', 2], ['event streaming', 3],
      ['data streaming', 3], ['message queue', 3], ['pubsub', 3],
      ['middleware', 3], ['service mesh', 3], ['orchestration layer', 3],

      // cost / effort signals
      ['too hard to build', 3], ['expensive to build', 3], ['high fixed cost', 3],
      ['high barrier to entry', 3], ['barrier to entry', 2],
      ['months to build', 3], ['years to build', 3], ['needs a team', 3],
      ['needs 10 engineers', 4], ['high engineering cost', 3],
      ['commoditize', 3], ['commoditization', 3],

      // verticals — fintech
      ['payment rail', 3], ['banking api', 3], ['data pipe', 3], ['data pipeline', 2],
      ['open banking', 3], ['bank connectivity', 3], ['payment gateway', 3],
      ['financial infrastructure', 4], ['clearing and settlement', 3],
      ['card network', 3], ['ACH', 3], ['wire transfer api', 3],

      // verticals — cloud / infra
      ['cloud', 1], ['storage', 1], ['compute', 2], ['server', 1],
      ['cloud infrastructure', 3], ['managed service', 2], ['serverless', 3],
      ['iaas', 3], ['paas', 3], ['saas infrastructure', 3],

      // verticals — data
      ['data infrastructure', 3], ['data platform', 2], ['data layer', 3],
      ['event tracking', 3], ['analytics infrastructure', 3], ['metrics layer', 3],
      ['logging infrastructure', 3], ['observability', 3],

      // verticals — communications
      ['messaging infrastructure', 3], ['email infrastructure', 3],
      ['sms api', 3], ['voice api', 3], ['notification infrastructure', 3],
      ['push notification', 2], ['email delivery', 3],

      // verticals — identity / auth
      ['identity layer', 3], ['authentication infrastructure', 3], ['sso', 3],
      ['single sign on', 3], ['oauth', 3], ['identity provider', 3],

      // Italian equivalents
      ['infrastruttura mancante', 4], ['ogni azienda lo costruisce da zero', 4],
      ['strato fondamentale', 3], ['reinventare la ruota', 3],
      ['nessuno standard', 4], ['manca il livello base', 4],
      ['costo fisso troppo alto', 3], ['troppo difficile da costruire', 3],
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 06 — PROCESS INEFFICIENCY
  // Existing workflows are too slow, expensive, or error-prone
  // ─────────────────────────────────────────────────────────────
  process: {
    id: 'process',
    label: 'Process Inefficiency',
    keywords: [
      // slow / inefficient
      ['inefficient', 2], ['inefficiency', 2], ['too slow', 2], ['very slow', 2],
      ['slow process', 3], ['takes too long', 3], ['waste time', 2], ['wastes time', 2],
      ['time consuming', 3], ['manual process', 3], ['paper process', 3],
      ['clunky', 2], ['clunky process', 3], ['painful process', 3],
      ['nightmare process', 3], ['terrible workflow', 3],

      // manual / human labor
      ['manual', 2], ['manually', 2], ['by hand', 2], ['human error', 2],
      ['data entry', 2], ['copy paste', 2], ['fill out forms', 2],
      ['paper forms', 3], ['physical paperwork', 3], ['wet signature', 3],
      ['fax', 3], ['fax machine', 4], ['print and sign', 3],
      ['scan and email', 3], ['manual approval', 3],

      // fragmented / siloed
      ['fragmented', 2], ['scattered', 2], ['siloed', 3], ['silos', 2],
      ['disconnected', 2], ['not integrated', 3], ['separate systems', 3],
      ['multiple systems', 3], ['switch between', 2], ['context switching', 3],
      ['tool sprawl', 3], ['app sprawl', 3], ['too many tools', 3],
      ['information is scattered', 3], ['knowledge is scattered', 3],
      ['data is in multiple places', 4], ['no single source of truth', 4],
      ['single source of truth', 4], ['source of truth', 3],

      // errors / quality
      ['error prone', 3], ['mistakes', 1], ['rework', 3], ['redundant', 2],
      ['duplicate', 2], ['entered twice', 3], ['enter the same', 3],
      ['inconsistent', 2], ['out of sync', 3], ['data mismatch', 3],
      ['version control', 2], ['wrong version', 3], ['outdated', 2],

      // collaboration
      ['email back and forth', 4], ['email thread', 3], ['reply all', 3],
      ['attachments', 2], ['file versioning', 3], ['document collaboration', 3],
      ['meeting overhead', 3], ['status update meeting', 3], ['sync meeting', 2],
      ['where is the file', 4], ['can\'t find the file', 3],

      // workflow / approval
      ['workflow', 2], ['process', 1], ['step by step', 1], ['multi step', 2],
      ['approval process', 2], ['long process', 2], ['complex process', 2],
      ['waiting for approval', 3], ['approval bottleneck', 4], ['sign off', 2],
      ['chain of approval', 3], ['bureaucracy', 2], ['red tape', 3],

      // specific verticals — healthcare
      ['hospital wait', 3], ['waiting room', 2], ['paperwork at hospital', 3],
      ['medical forms', 3], ['insurance forms', 3], ['prior authorization', 3],
      ['referral process', 3], ['healthcare admin', 3],

      // specific verticals — finance
      ['expense report', 3], ['expense management', 2], ['reimbursement process', 3],
      ['invoice processing', 3], ['accounts payable', 3], ['accounts receivable', 3],
      ['reconciliation', 3], ['month end close', 3], ['financial close', 3],

      // specific verticals — HR
      ['onboarding process', 3], ['hiring process', 2], ['payroll process', 3],
      ['benefits enrollment', 3], ['performance review', 2],

      // specific verticals — legal / compliance
      ['contract process', 3], ['legal process', 2], ['compliance process', 3],
      ['audit process', 3], ['due diligence', 2],

      // specific verticals — logistics
      ['shipping process', 2], ['customs process', 3], ['import export', 2],
      ['supply chain admin', 3], ['inventory management', 2],

      // Italian equivalents
      ['processo inefficiente', 3], ['troppa burocrazia', 3], ['carta e firma', 3],
      ['spreco di tempo', 3], ['sistemi separati', 3], ['non integrato', 3],
      ['tutto manuale', 3], ['fogli excel', 2], ['email avanti e indietro', 4],
      ['nessun flusso di lavoro', 3], ['bisogna farlo a mano', 3],
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 07 — AUTOMATION OPPORTUNITY
  // Repetitive manual work that software could handle
  // ─────────────────────────────────────────────────────────────
  automation: {
    id: 'automation',
    label: 'Automation Opportunity',
    keywords: [
      // core concept
      ['automate', 3], ['automation', 3], ['automated', 2], ['automatic', 2],
      ['no-code', 3], ['low-code', 3], ['no code', 3], ['low code', 3],
      ['robotic process automation', 4], ['rpa', 4], ['intelligent automation', 4],
      ['workflow automation', 4], ['business process automation', 4],

      // repetitive tasks
      ['repetitive', 3], ['repetitive task', 4], ['same task over', 4],
      ['same thing every day', 4], ['done manually', 3], ['manual work', 3],
      ['manual task', 3], ['routine task', 3], ['tedious', 2], ['boring task', 2],
      ['soul crushing work', 3], ['mindless work', 3], ['mechanical work', 3],
      ['clerical work', 3], ['administrative work', 2], ['back office work', 3],

      // data movement
      ['data entry', 3], ['copy data', 3], ['copy paste', 2], ['spreadsheet', 2],
      ['export import', 2], ['sync data', 2], ['transfer data', 2],
      ['move data between', 3], ['data migration', 2], ['data sync', 3],
      ['populate spreadsheet', 3], ['update spreadsheet manually', 4],
      ['manual data transfer', 4], ['download and reupload', 4],

      // rule-based / predictable
      ['rule based', 3], ['rule-based', 3], ['same rules', 3], ['always the same', 3],
      ['predictable', 2], ['fixed pattern', 3], ['deterministic', 2],
      ['follows a pattern', 3], ['no judgment required', 4],
      ['if this then that', 3], ['ifttt', 3], ['trigger action', 3],
      ['conditional logic', 2], ['business rules engine', 3],

      // scale / throughput
      ['human doing machine work', 4], ['machine could do', 4], ['robot', 2],
      ['bot', 2], ['script', 1], ['trigger', 1], ['workflow', 2],
      ['need to hire more people', 3], ['headcount to scale', 3],
      ['linear scaling problem', 3], ['doesn\'t scale', 3], ['can\'t scale', 3],
      ['bottleneck at human step', 4], ['human bottleneck', 4],

      // specific automation types
      ['email automation', 3], ['marketing automation', 3],
      ['sales automation', 3], ['crm automation', 3], ['lead nurturing', 2],
      ['drip campaign', 3], ['follow up automation', 3],
      ['invoice automation', 3], ['billing automation', 3],
      ['report generation', 3], ['automated report', 3],
      ['scheduled job', 2], ['cron job', 2], ['batch processing', 2],
      ['document generation', 3], ['contract generation', 3],
      ['form processing', 3], ['intake automation', 3],

      // specific verticals
      ['customer service automation', 3], ['support ticket', 2], ['chatbot', 2],
      ['qa automation', 3], ['testing automation', 3], ['test automation', 3],
      ['ci cd', 2], ['deployment automation', 3],
      ['inventory automation', 3], ['order processing', 2],
      ['payroll automation', 3], ['hr automation', 3],
      ['compliance automation', 3], ['audit automation', 3],

      // Italian equivalents
      ['automatizzare', 3], ['automazione', 3], ['sempre la stessa cosa', 4],
      ['lavoro ripetitivo', 4], ['potrebbe farlo una macchina', 4],
      ['perdo ore a copiare', 4], ['aggiornare manualmente', 3],
      ['bisogna assumere persone solo per questo', 4], ['lavoro meccanico', 3],
      ['nessun valore aggiunto', 3], ['compito noioso', 2],
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 08 — AGGREGATION PROBLEM
  // Supply is fragmented across too many small players
  // ─────────────────────────────────────────────────────────────
  aggregation: {
    id: 'aggregation',
    label: 'Aggregation Problem',
    keywords: [
      // fragmented supply
      ['fragmented', 3], ['fragmented market', 4], ['fragmented supply', 4],
      ['thousands of providers', 4], ['hundreds of providers', 3],
      ['fragmented industry', 4], ['highly fragmented', 4], ['super fragmented', 4],
      ['mom and pop', 3], ['cottage industry', 3], ['artisanal market', 2],
      ['local players', 2], ['regional players', 2], ['no national brand', 3],
      ['no dominant player', 3], ['no market leader', 3],

      // too many small players
      ['too many options', 2], ['so many options', 2], ['many small', 3],
      ['small players', 3], ['small businesses', 2], ['small vendors', 3],
      ['small shops', 2], ['independent operators', 3], ['individual providers', 3],
      ['freelancers', 1], ['solopreneurs', 2],

      // no single place
      ['no single place', 4], ['no central place', 4], ['no common platform', 4],
      ['all in one place', 3], ['one place', 2], ['single destination', 3],
      ['consolidated', 2], ['aggregate', 3], ['aggregator', 3],
      ['single entry point', 4], ['one stop shop', 3], ['one stop', 2],
      ['central hub', 3], ['hub for', 3], ['unified', 2],

      // comparison / discovery overhead
      ['compare', 2], ['comparison', 2], ['multiple vendors', 3],
      ['contact many', 3], ['shop around', 3], ['scattered providers', 3],
      ['visit many sites', 3], ['check multiple sources', 3],
      ['have to email each one', 4], ['get multiple quotes', 3],
      ['price comparison', 3], ['comparison shopping', 3],

      // market examples — local
      ['local businesses', 2], ['local providers', 2], ['local services', 2],
      ['local cafe', 2], ['nearby restaurants', 2], ['local contractors', 2],
      ['independent stores', 2], ['boutique', 1], ['local gym', 2],
      ['local doctor', 2], ['small clinic', 2], ['independent pharmacies', 3],

      // market examples — B2B
      ['suppliers', 1], ['wholesale', 2], ['distributor', 2], ['vendor', 1],
      ['supplier fragmentation', 3], ['vendor fragmentation', 3],
      ['procurement fragmentation', 3], ['b2b marketplace', 3],
      ['industrial marketplace', 3], ['parts marketplace', 3],

      // market examples — media / content
      ['content scattered', 3], ['content fragmentation', 3],
      ['too many streaming services', 3], ['multiple subscriptions', 3],
      ['content is everywhere', 3], ['scattered content', 3],

      // quality / price variance
      ['quality varies', 3], ['prices vary', 3], ['no standard', 2],
      ['hard to compare', 3], ['inconsistent quality', 3], ['no price transparency', 3],
      ['race to bottom', 3], ['commodity market', 2],

      // aggregation strategy signals
      ['roll up', 3], ['roll-up', 3], ['consolidation play', 3],
      ['acquire and aggregate', 3], ['category roll up', 3],
      ['winner take all', 2], ['platform takes all', 2], ['network effect', 2],

      // Italian equivalents
      ['mercato frammentato', 4], ['tanti piccoli', 3], ['nessun leader di mercato', 3],
      ['devo contattare ognuno', 4], ['non c\'è un posto unico', 4],
      ['troppi fornitori diversi', 3], ['non si può confrontare', 3],
      ['ogni regione ha il suo', 3], ['nessuna piattaforma comune', 4],
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 09 — ACCESS LIMITATION
  // Something valuable is locked away from most people
  // ─────────────────────────────────────────────────────────────
  access: {
    id: 'access',
    label: 'Access Limitation',
    keywords: [
      // locked out
      ['can\'t access', 3], ['cannot access', 3], ['locked out', 3], ['no access', 3],
      ['access barrier', 3], ['limited access', 3], ['restricted access', 3],
      ['only for', 2], ['only available to', 3], ['excluded', 2],
      ['locked away', 3], ['behind a wall', 3], ['walled garden', 3],
      ['paywall', 3], ['credentialed access', 3], ['invite only', 3],
      ['waitlist only', 3], ['not available to public', 3],

      // gatekeepers
      ['gatekeeper', 4], ['gatekeepers', 4], ['broker', 2], ['middleman', 2],
      ['intermediary', 2], ['institution', 1], ['requires approval', 2],
      ['need a license', 2], ['requires credentials', 3], ['need a degree', 3],
      ['must go through an agent', 4], ['must use a broker', 4],
      ['no self service', 3], ['no direct access', 3], ['must call', 3],
      ['need an introduction', 3], ['old boys club', 3],

      // cost barrier
      ['too expensive', 2], ['can\'t afford', 3], ['unaffordable', 3],
      ['out of reach', 3], ['high minimum', 3], ['minimum investment', 3],
      ['high barrier', 2], ['price barrier', 3], ['wealth barrier', 3],
      ['only for the rich', 4], ['for the wealthy', 4], ['luxury', 2],
      ['premium only', 3], ['enterprise only', 3], ['institutional only', 3],

      // geography
      ['not available here', 3], ['not in my city', 3], ['no access in', 3],
      ['geographic barrier', 3], ['rural', 2], ['remote area', 2],
      ['developing country', 2], ['emerging market', 2],
      ['underserved region', 3], ['underserved market', 3], ['underbanked', 3],
      ['unbanked', 3], ['no branch here', 3], ['no service here', 3],

      // democratize / level the playing field
      ['democratize', 4], ['democratization', 4], ['for everyone', 3],
      ['make accessible', 3], ['access for all', 4], ['equal access', 3],
      ['level the playing field', 4], ['empower', 2], ['enable access', 3],
      ['open access', 3], ['universal access', 3], ['remove barriers', 3],

      // knowledge / education
      ['education', 1], ['world class education', 3], ['top university', 2],
      ['online education', 2], ['e-learning', 2], ['distance learning', 2],
      ['self-paced', 2], ['learn from anywhere', 3],
      ['knowledge gap', 2], ['skills gap', 2],

      // financial / investing
      ['investing', 1], ['invest', 1], ['financial', 1], ['financial services', 2],
      ['retail investor', 3], ['accredited investor', 3], ['minimum balance', 3],
      ['high net worth only', 4], ['hedge fund', 2], ['private equity access', 3],
      ['venture capital access', 3],

      // healthcare
      ['healthcare access', 3], ['no doctor nearby', 3], ['medical desert', 3],
      ['mental health access', 3], ['therapy access', 3], ['specialist access', 3],
      ['telehealth', 2], ['telemedicine', 2],

      // Italian equivalents
      ['non posso accedere', 3], ['solo per pochi', 4], ['riservato a', 3],
      ['ci vuole un intermediario', 4], ['troppo costoso per me', 3],
      ['non disponibile nella mia città', 4], ['escluso dal mercato', 3],
      ['democratizzare', 4], ['accessibile a tutti', 3], ['nessun accesso diretto', 3],
      ['serve un broker', 3], ['serve una licenza', 3],
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 10 — COST REDUCTION
  // The existing solution works but costs 10x too much
  // ─────────────────────────────────────────────────────────────
  cost: {
    id: 'cost',
    label: 'Cost Reduction',
    keywords: [
      // core signal
      ['too expensive', 3], ['costs too much', 3], ['too costly', 3],
      ['overpriced', 3], ['price is too high', 3], ['10x cheaper', 4],
      ['10 times cheaper', 4], ['dramatically cheaper', 4],
      ['drastically reduce cost', 4], ['cost is prohibitive', 4],
      ['prohibitively expensive', 4], ['pricing is crazy', 3],
      ['rip off', 3], ['being ripped off', 3],

      // reduce / lower cost
      ['reduce cost', 2], ['lower price', 2], ['cheaper', 2], ['affordable', 2],
      ['cost cutting', 2], ['cut costs', 2], ['save money', 2], ['savings', 1],
      ['cost savings', 3], ['cost optimization', 3], ['cost reduction', 3],
      ['eliminate cost', 3], ['remove cost', 3], ['zero cost', 3],
      ['near zero marginal cost', 4], ['marginal cost is near zero', 4],

      // market context
      ['agency cost', 3], ['consultant fee', 2], ['lawyer fee', 2],
      ['financial advisor', 2], ['aum fee', 3], ['management fee', 3],
      ['intermediary fee', 3], ['commission', 2], ['markup', 2],
      ['middleman cost', 3], ['distribution cost', 3], ['channel cost', 3],

      // disruption signal
      ['incumbents won\'t lower price', 4], ['high margin', 3],
      ['no incentive to reduce', 3], ['incumbent is complacent', 3],
      ['legacy pricing model', 3], ['outdated pricing', 3], ['fat margin', 3],
      ['massive margins', 3], ['price gouging', 3],

      // pricing models
      ['subscription', 1], ['freemium', 2], ['free tier', 2],
      ['fraction of the cost', 3], ['at cost', 2], ['cost plus', 2],
      ['flat fee', 2], ['pay per use', 2], ['usage based', 2],
      ['pricing model innovation', 3], ['disruptive pricing', 3],

      // specific verticals
      ['software license cost', 3], ['enterprise license', 3],
      ['per seat pricing', 2], ['seat cost', 2], ['expensive per seat', 3],
      ['cloud cost', 2], ['infrastructure cost', 2], ['hosting cost', 2],
      ['legal fees', 2], ['accounting fees', 2], ['audit fees', 2],
      ['shipping cost', 2], ['logistics cost', 2], ['distribution cost', 2],
      ['marketing cost', 2], ['cac is too high', 3], ['customer acquisition cost', 2],
      ['textbook cost', 3], ['university tuition', 3], ['course fees', 2],

      // unit economics
      ['unit economics', 2], ['cost per unit', 2], ['marginal cost', 2],
      ['variable cost', 2], ['fixed cost', 2], ['breakeven', 2],
      ['ltv cac ratio', 3], ['payback period', 2],

      // Italian equivalents
      ['troppo caro', 3], ['costa troppo', 3], ['prezzi assurdi', 3],
      ['non me lo posso permettere', 3], ['abbassare il prezzo', 2],
      ['ridurre i costi', 2], ['10 volte più economico', 4],
      ['alternativa economica', 3], ['margini altissimi', 3], ['stanno speculando', 3],
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 11 — SPEED PROBLEM
  // The current solution works but is too slow
  // ─────────────────────────────────────────────────────────────
  speed: {
    id: 'speed',
    label: 'Speed Problem',
    keywords: [
      // core signal
      ['too slow', 3], ['very slow', 2], ['slow', 2], ['takes too long', 3],
      ['speed problem', 4], ['waiting', 2], ['wait', 1], ['latency', 3],
      ['high latency', 3], ['low latency', 2], ['latency problem', 4],
      ['speed is the problem', 4], ['speed is everything', 3],
      ['speed matters', 3], ['time sensitive', 3],

      // queue / waiting
      ['long wait', 3], ['hours waiting', 3], ['waste hours waiting', 4],
      ['people wait', 2], ['waiting in line', 3], ['queue', 2],
      ['in queue', 2], ['join the queue', 2], ['wait in line', 3],
      ['stuck waiting', 3], ['endless waiting', 3], ['wait times', 3],
      ['average wait time', 3], ['reduce wait time', 3],

      // time expressions
      ['takes days', 3], ['takes weeks', 3], ['takes months', 3],
      ['should be instant', 4], ['should take seconds', 4], ['near real-time', 3],
      ['real-time', 3], ['instant', 2], ['instantaneous', 2],
      ['sub-second', 3], ['milliseconds', 2], ['microseconds', 2],
      ['synchronous', 1], ['asynchronous', 1], ['live', 1],
      ['overnight', 2], ['same day', 2], ['next day', 2],
      ['days when it should take minutes', 4], ['weeks when it should take hours', 4],

      // user frustration language
      ['frustrating wait', 3], ['tired of waiting', 3], ['main frustration is speed', 3],
      ['bottleneck', 2], ['slows everything down', 3], ['delays', 2], ['delay', 1],
      ['why does this take so long', 4], ['can\'t believe how slow', 4],
      ['still not done', 3], ['when will it be ready', 3],

      // speed as competitive advantage
      ['10x faster', 4], ['10 times faster', 4], ['faster than', 2],
      ['speed advantage', 3], ['competitive speed', 3], ['first mover speed', 3],
      ['ship faster', 2], ['deploy faster', 2], ['iterate faster', 2],
      ['move fast', 2], ['fast iteration', 2], ['rapid', 1],

      // specific verticals — finance
      ['instant payment', 3], ['instant transfer', 3], ['same day payment', 3],
      ['slow bank transfer', 3], ['bank transfer takes days', 4],
      ['wire takes 3 days', 4], ['settlement speed', 3], ['clearing speed', 3],
      ['trading speed', 3], ['execution speed', 3],

      // specific verticals — logistics
      ['delivery time', 2], ['delivery speed', 2], ['shipping time', 2],
      ['same day delivery', 3], ['next hour delivery', 3], ['on demand delivery', 3],
      ['last mile speed', 3], ['dispatch speed', 3],

      // specific verticals — healthcare
      ['hospital queue', 3], ['hospital wait', 3], ['emergency wait', 3],
      ['test results time', 3], ['lab results take days', 3], ['scan results', 2],

      // specific verticals — tech / dev
      ['page load', 2], ['slow app', 2], ['response time', 2],
      ['build time', 2], ['compile time', 2], ['deploy time', 3],
      ['time to market', 2], ['release cycle', 2], ['ci speed', 3],

      // Italian equivalents
      ['troppo lento', 3], ['ci vuole troppo tempo', 3], ['ore di attesa', 3],
      ['lentezza è il problema', 4], ['aspettare in fila', 3],
      ['quando sarà pronto', 3], ['dovrebbe essere istantaneo', 4],
      ['ritardo inaccettabile', 3], ['ci vogliono giorni', 3], ['immediato', 2],
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 12 — NEW TECH CAPABILITY
  // A breakthrough enables solutions that didn't exist before
  // ─────────────────────────────────────────────────────────────
  capability: {
    id: 'capability',
    label: 'New Tech Capability',
    keywords: [
      // core concept
      ['new technology', 3], ['new tech', 2], ['emerging technology', 3],
      ['breakthrough', 3], ['innovation', 2], ['cutting edge', 2], ['state of the art', 2],
      ['previously impossible', 4], ['was impossible', 4], ['not possible before', 4],
      ['now possible', 3], ['made possible by', 3], ['enabled by', 3],
      ['technology unlock', 4], ['tech unlock', 3], ['unlocked by', 3],
      ['never been done before', 4], ['didn\'t exist until', 4], ['couldn\'t be done', 4],

      // timing / inflection
      ['right time', 2], ['timing', 1], ['inflection point', 3],
      ['technology mature', 3], ['technology ready', 3], ['technology available', 2],
      ['cost has dropped', 3], ['cost fell dramatically', 3],
      ['10x cheaper to build', 4], ['100x cheaper', 4],
      ['tipping point', 3], ['crossing the chasm', 2], ['mass adoption', 2],

      // AI / ML
      ['ai', 2], ['artificial intelligence', 3], ['machine learning', 3],
      ['deep learning', 3], ['neural network', 3], ['transformer', 3],
      ['large language model', 3], ['llm', 3], ['gpt', 2], ['generative ai', 4],
      ['diffusion model', 3], ['diffusion', 2], ['foundation model', 3],
      ['ai agent', 3], ['agentic', 3], ['multimodal', 3],
      ['text to image', 3], ['text to video', 3], ['text to code', 3],
      ['code generation', 3], ['ai coding', 3], ['copilot', 2],

      // specific tech areas
      ['blockchain', 2], ['smart contract', 3], ['decentralized', 2], ['web3', 2],
      ['iot', 2], ['internet of things', 2], ['connected device', 2], ['sensor', 1],
      ['computer vision', 3], ['image recognition', 3], ['object detection', 3],
      ['voice recognition', 3], ['speech to text', 3], ['natural language processing', 3],
      ['nlp', 3], ['ar', 1], ['vr', 1], ['augmented reality', 2], ['virtual reality', 2],
      ['mixed reality', 2], ['spatial computing', 3],
      ['robotics', 2], ['autonomous vehicle', 3], ['self-driving', 3],
      ['drone', 2], ['drone delivery', 3],
      ['biotech', 2], ['synthetic biology', 3], ['gene editing', 3], ['crispr', 3],
      ['mrna', 3], ['drug discovery ai', 4],
      ['quantum computing', 3], ['quantum', 2], ['edge computing', 3],
      ['5g', 2], ['satellite internet', 3], ['starlink', 3],

      // hardware cost drops
      ['price of compute', 3], ['gpu cost', 3], ['commodity hardware', 2],
      ['lidar is cheap now', 4], ['sensor cost dropped', 3], ['battery cost', 2],
      ['storage is cheap', 3], ['bandwidth is cheap', 3],

      // market timing signals
      ['first to build', 3], ['incumbents dismissing', 3], ['incumbents ignoring', 3],
      ['sleeping giants', 3], ['legacy player won\'t move', 3],
      ['early adopters love it', 3], ['unexpected use case', 3],
      ['toy that became real', 3], ['dismissed as a toy', 4],

      // business model unlocked
      ['new business model possible', 4], ['business model didn\'t exist before', 4],
      ['marketplace enabled by', 3], ['product enabled by ai', 4],
      ['ai-native', 3], ['ai first', 3], ['built on top of', 2],
      ['layer on top of', 2], ['wrapper', 2], ['ai wrapper', 3],

      // Italian equivalents
      ['nuova tecnologia', 3], ['tecnologia emergente', 3], ['prima era impossibile', 4],
      ['adesso è possibile', 3], ['reso possibile da', 3], ['intelligenza artificiale', 3],
      ['modello linguistico', 3], ['punto di svolta', 3], ['costo è crollato', 3],
      ['i big lo stanno ignorando', 4], ['mai stato fatto prima', 4],
      ['la tecnologia è finalmente matura', 4],
    ]
  }

};
