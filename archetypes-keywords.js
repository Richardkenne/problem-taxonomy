// archetypes-keywords.js
// Keyword scoring dictionary for the 12 Problem Archetypes.
// Format: [phrase, weight]
// Longer / more specific phrases get higher weight.
// Weight scale: 1 = generic, 2 = relevant, 3 = strong signal, 4 = very specific

const ARCHETYPE_KEYWORDS = {

  coordination: {
    id: 'coordination',
    label: 'Coordination Problem',
    keywords: [
      // supply / demand mismatch
      ['supply and demand', 3], ['supply meets demand', 3], ['buyers and sellers', 3],
      ['two-sided', 3], ['two sided', 3], ['matching', 2], ['match', 1],
      ['connect buyers', 3], ['connect sellers', 3], ['connect people', 2],
      ['find each other', 3], ["can't find each other", 4], ['cannot find each other', 4],
      // platforms / marketplaces
      ['marketplace', 2], ['platform', 1], ['aggregator', 2],
      ['booking', 1], ['hailing', 2], ['rideshare', 3], ['ride share', 3],
      // coordination failure
      ['inefficient channel', 3], ['word of mouth', 2], ['fragmented market', 2],
      ['no way to connect', 4], ['hard to connect', 3], ['difficult to connect', 3],
      ['hard to reach', 2], ['find a provider', 3], ['find a supplier', 3],
      // generic signals
      ['connect', 1], ['link', 1], ['bridge', 1], ['network', 1],
      ['people looking for', 2], ['looking for each other', 3],
    ]
  },

  discovery: {
    id: 'discovery',
    label: 'Discovery Problem',
    keywords: [
      // can't find things
      ["can't find", 3], ['cannot find', 3], ['hard to find', 3], ['difficult to find', 3],
      ['no way to find', 4], ['impossible to find', 4], ['finding is hard', 3],
      ['find what exists', 3], ['already exists', 2],
      // search / browse
      ['search', 1], ['discovery', 2], ['discover', 2], ['explore', 1],
      ['browse', 1], ['search results', 2], ['poor search', 3], ['bad search', 3],
      ['search fails', 3], ['no results', 2],
      // visibility / hidden
      ['invisible', 2], ['hidden', 2], ['not visible', 3], ['hard to see', 2],
      ['no visibility', 3], ['buried', 2], ['scattered online', 3],
      // recommendations / curation
      ['recommendation', 2], ['recommend', 1], ['curate', 2], ['curation', 2],
      ['filter', 1], ['sort', 1], ['rank', 1],
      // user frustration
      ['waste time searching', 3], ['spend hours searching', 3], ['searching forever', 3],
      ['word of mouth only', 3], ['rely on friends', 2],
      // specific verticals
      ['find a cafe', 3], ['find a restaurant', 3], ['find a place', 2],
      ['find services', 2], ['find a doctor', 3], ['find a job', 2],
    ]
  },

  information: {
    id: 'information',
    label: 'Information Asymmetry',
    keywords: [
      // core concept
      ['information asymmetry', 4], ['asymmetric information', 4],
      ['one side knows', 4], ['one party knows', 4], ['seller knows more', 4],
      ['buyer doesn\'t know', 4], ['hidden information', 3],
      // opacity / transparency
      ['opaque', 2], ['opaque pricing', 3], ['pricing is unclear', 3],
      ['no transparency', 3], ['lack of transparency', 3], ['transparent', 1],
      ['price is unknown', 3], ['prices vary wildly', 3],
      // trust / data
      ['can\'t verify', 3], ['cannot verify', 3], ['no data', 2], ['no information', 2],
      ['don\'t know if', 2], ['no way to know', 3], ['hidden fees', 3],
      // experts vs consumers
      ['expert knows', 3], ['only experts know', 3], ['professional knowledge', 2],
      ['insider knowledge', 3], ['asymmetric', 2], ['informed', 1],
      // market examples
      ['used car', 2], ['salary', 2], ['real estate data', 3], ['company culture', 2],
      ['credit score', 2], ['background check', 2], ['review', 1], ['rating', 1],
      // fraud / deception
      ['mislead', 2], ['deceive', 2], ['hide information', 3], ['withhold', 2],
    ]
  },

  trust: {
    id: 'trust',
    label: 'Trust Problem',
    keywords: [
      // core concept
      ['can\'t trust', 3], ['cannot trust', 3], ['distrust', 3], ['lack of trust', 3],
      ['trust problem', 4], ['no trust', 3], ['trust barrier', 4],
      // fraud / safety
      ['fraud', 2], ['scam', 2], ['fake', 2], ['counterfeit', 2],
      ['identity theft', 3], ['phishing', 2], ['scammer', 2],
      // verification / identity
      ['verify', 2], ['verification', 2], ['identity', 2], ['kyc', 3],
      ['know your customer', 3], ['authenticate', 2], ['authentication', 2],
      ['legitimate', 2], ['legit', 2], ['real person', 3], ['fake profile', 3],
      // barriers to transaction
      ['won\'t buy', 3], ['afraid to pay', 3], ['hesitate to share', 3],
      ['payment fear', 3], ['share credit card', 3], ['personal data', 2],
      // contracts / legal
      ['contract', 1], ['signature', 2], ['legally binding', 3], ['escrow', 3],
      ['guarantee', 2], ['warranty', 2], ['refund protection', 3],
      // reputation
      ['reputation', 2], ['reviews', 1], ['rating', 1], ['trusted seller', 3],
      ['verified seller', 3], ['trusted platform', 2],
    ]
  },

  infrastructure: {
    id: 'infrastructure',
    label: 'Infrastructure Gap',
    keywords: [
      // missing layer
      ['infrastructure', 2], ['missing layer', 4], ['foundational layer', 4],
      ['foundation doesn\'t exist', 4], ['build from scratch', 3],
      ['everyone rebuilds', 4], ['every company builds', 4], ['reinvent the wheel', 3],
      // plumbing / backbone
      ['plumbing', 3], ['backbone', 2], ['standard', 2], ['layer', 1],
      ['primitive', 2], ['building block', 3], ['underpinning', 2],
      // developer / technical
      ['api', 2], ['developer', 1], ['sdk', 3], ['developer tool', 3],
      ['developer experience', 3], ['devex', 3], ['integration', 2],
      ['technical debt', 3], ['legacy', 2], ['monolith', 2],
      // cost / effort
      ['too hard to build', 3], ['expensive to build', 3], ['high fixed cost', 3],
      ['high barrier to entry', 3], ['barrier to entry', 2],
      // examples
      ['cloud', 1], ['storage', 1], ['compute', 2], ['server', 1],
      ['payment rail', 3], ['banking api', 3], ['data pipe', 3], ['data pipeline', 2],
    ]
  },

  process: {
    id: 'process',
    label: 'Process Inefficiency',
    keywords: [
      // slow / inefficient
      ['inefficient', 2], ['inefficiency', 2], ['too slow', 2], ['very slow', 2],
      ['slow process', 3], ['takes too long', 3], ['waste time', 2], ['wastes time', 2],
      ['time consuming', 3], ['manual process', 3], ['paper process', 3],
      // manual / human labor
      ['manual', 2], ['manually', 2], ['by hand', 2], ['human error', 2],
      ['data entry', 2], ['copy paste', 2], ['fill out forms', 2],
      // fragmented
      ['fragmented', 2], ['scattered', 2], ['siloed', 3], ['silos', 2],
      ['disconnected', 2], ['not integrated', 3], ['separate systems', 3],
      ['multiple systems', 3], ['switch between', 2],
      // errors
      ['error prone', 3], ['mistakes', 1], ['rework', 3], ['redundant', 2],
      ['duplicate', 2], ['entered twice', 3], ['enter the same', 3],
      // workflow
      ['workflow', 2], ['process', 1], ['step by step', 1], ['multi step', 2],
      ['approval process', 2], ['long process', 2], ['complex process', 2],
      ['hospital wait', 3], ['waiting room', 2], ['bureaucracy', 2], ['paperwork', 2],
      ['hours waiting', 3], ['waste hours', 3],
    ]
  },

  automation: {
    id: 'automation',
    label: 'Automation Opportunity',
    keywords: [
      // core concept
      ['automate', 3], ['automation', 3], ['automated', 2], ['automatic', 2],
      ['no-code', 3], ['low-code', 3], ['no code', 3], ['low code', 3],
      // repetitive tasks
      ['repetitive', 3], ['repetitive task', 4], ['same task over', 4],
      ['same thing every day', 4], ['done manually', 3], ['manual work', 3],
      ['manual task', 3], ['routine task', 3], ['tedious', 2], ['boring task', 2],
      // data
      ['data entry', 3], ['copy data', 3], ['copy paste', 2], ['spreadsheet', 2],
      ['export import', 2], ['sync data', 2], ['transfer data', 2],
      // rule-based
      ['rule based', 3], ['rule-based', 3], ['same rules', 3], ['always the same', 3],
      ['predictable', 2], ['fixed pattern', 3],
      // efficiency
      ['human doing machine work', 4], ['machine could do', 4], ['robot', 2],
      ['bot', 2], ['script', 1], ['trigger', 1], ['workflow', 2],
    ]
  },

  aggregation: {
    id: 'aggregation',
    label: 'Aggregation Problem',
    keywords: [
      // fragmented supply
      ['fragmented', 3], ['fragmented market', 4], ['fragmented supply', 4],
      ['thousands of providers', 4], ['hundreds of providers', 3],
      ['too many options', 2], ['so many options', 2], ['many small', 3],
      ['small players', 3], ['small businesses', 2], ['small vendors', 3],
      // no single place
      ['no single place', 4], ['no central place', 4], ['no common platform', 4],
      ['all in one place', 3], ['one place', 2], ['single destination', 3],
      ['consolidated', 2], ['aggregate', 3], ['aggregator', 3],
      // comparison / shopping
      ['compare', 2], ['comparison', 2], ['multiple vendors', 3],
      ['contact many', 3], ['shop around', 3], ['scattered providers', 3],
      // market examples
      ['local businesses', 2], ['local providers', 2], ['small shops', 2],
      ['independent', 2], ['boutique', 1], ['local cafe', 2], ['nearby', 1],
      // quality / price variance
      ['quality varies', 3], ['prices vary', 3], ['no standard', 2],
      ['hard to compare', 3], ['inconsistent', 2],
    ]
  },

  access: {
    id: 'access',
    label: 'Access Limitation',
    keywords: [
      // locked out
      ['can\'t access', 3], ['cannot access', 3], ['locked out', 3], ['no access', 3],
      ['access barrier', 3], ['limited access', 3], ['restricted access', 3],
      ['only for', 2], ['only available to', 3], ['excluded', 2],
      // gatekeepers
      ['gatekeeper', 4], ['gatekeepers', 4], ['broker', 2], ['middleman', 2],
      ['intermediary', 2], ['institution', 1], ['requires approval', 2],
      // cost barrier
      ['too expensive', 2], ['can\'t afford', 3], ['unaffordable', 3],
      ['out of reach', 3], ['high minimum', 3], ['minimum investment', 3],
      ['high barrier', 2],
      // geography
      ['not available here', 3], ['not in my city', 3], ['no access in', 3],
      ['geographic barrier', 3], ['rural', 2], ['remote area', 2], ['developing country', 2],
      // democratize
      ['democratize', 4], ['democratization', 4], ['for everyone', 3],
      ['make accessible', 3], ['access for all', 4], ['equal access', 3],
      // examples
      ['education', 1], ['healthcare', 1], ['investing', 1], ['financial', 1],
      ['only rich', 3], ['elite', 2], ['privilege', 2],
    ]
  },

  cost: {
    id: 'cost',
    label: 'Cost Reduction',
    keywords: [
      // core signal
      ['too expensive', 3], ['costs too much', 3], ['too costly', 3],
      ['overpriced', 3], ['price is too high', 3], ['10x cheaper', 4],
      ['10 times cheaper', 4], ['drastically reduce cost', 4],
      ['reduce cost', 2], ['lower price', 2], ['cheaper', 2], ['affordable', 2],
      // market examples
      ['agency cost', 3], ['consultant fee', 2], ['lawyer fee', 2],
      ['financial advisor', 2], ['aum fee', 3],
      // pricing model
      ['subscription', 1], ['freemium', 2], ['free tier', 2], ['zero cost', 3],
      ['fraction of the cost', 3], ['at cost', 2],
      // disruption signal
      ['incumbents won\'t lower price', 4], ['high margin', 3], ['no incentive to reduce', 3],
      ['mass market version', 3], ['premium only', 3], ['entry level', 2],
      // unit economics
      ['unit economics', 2], ['cost per unit', 2], ['marginal cost', 2],
    ]
  },

  speed: {
    id: 'speed',
    label: 'Speed Problem',
    keywords: [
      // core signal
      ['too slow', 3], ['very slow', 2], ['slow', 2], ['takes too long', 3],
      ['speed problem', 4], ['waiting', 2], ['wait', 1], ['latency', 3],
      ['long wait', 3], ['hours waiting', 3], ['waste hours waiting', 4],
      ['people wait', 2], ['waiting in line', 3], ['queue', 2],
      // time expressions
      ['takes days', 3], ['takes weeks', 3], ['takes months', 3],
      ['should be instant', 4], ['should take seconds', 4], ['near real-time', 3],
      ['real-time', 3], ['instant', 2], ['instantaneous', 2],
      // user frustration
      ['frustrating wait', 3], ['tired of waiting', 3], ['main frustration', 2],
      ['bottleneck', 2], ['slow down', 2], ['delays', 2], ['delay', 1],
      // speed as advantage
      ['10x faster', 4], ['10 times faster', 4], ['faster than', 2],
      ['speed advantage', 3], ['competitive speed', 3],
      // specific
      ['hospital queue', 3], ['hospital wait', 3], ['delivery time', 2],
      ['page load', 2], ['slow app', 2], ['response time', 2],
    ]
  },

  capability: {
    id: 'capability',
    label: 'New Tech Capability',
    keywords: [
      // new tech
      ['new technology', 3], ['new tech', 2], ['emerging technology', 3],
      ['breakthrough', 3], ['innovation', 2], ['cutting edge', 2], ['state of the art', 2],
      ['previously impossible', 4], ['was impossible', 4], ['not possible before', 4],
      ['now possible', 3], ['made possible by', 3], ['enabled by', 3],
      // specific tech
      ['ai', 2], ['artificial intelligence', 3], ['machine learning', 3],
      ['large language model', 3], ['llm', 3], ['gpt', 2], ['diffusion', 2],
      ['blockchain', 2], ['crypto', 1], ['iot', 2], ['internet of things', 2],
      ['computer vision', 3], ['voice recognition', 3], ['ar', 1], ['vr', 1],
      // cost drop
      ['cost dropped', 3], ['cost fell', 3], ['10x cheaper to build', 4],
      ['price of compute', 3], ['gpu cost', 3], ['commodity hardware', 2],
      // market timing
      ['right time', 2], ['timing', 1], ['inflection point', 3],
      ['technology mature', 3], ['technology ready', 3], ['technology available', 2],
      ['first to build', 3], ['incumbents dismissing', 3],
    ]
  }

};
