// ── Combination lookup ──
// Key format: "problem_idx-solution_idx-product_idx"  (SEGS array indices)
// Problems 0-11 · Solutions 12-17 · Products 18-23
// Solutions: 12=Marketplace 13=SaaS 14=Platform 15=Infrastructure 16=Automation 17=DataNetwork
// Products:  18=MobileApp  19=WebApp  20=API  21=AITool  22=Platform(prod)  23=Hardware

const COMBOS = {
  // ── 0 COORDINATION ──────────────────────────────────────────
  '0-12-18': [ // Marketplace + Mobile App
    {name:'Uber',       url:'https://uber.com',       desc:'real-time driver–rider matching, GPS-native'},
    {name:'Lyft',       url:'https://lyft.com',       desc:'ride-hailing with a community-first brand'},
    {name:'DoorDash',   url:'https://doordash.com',   desc:'restaurant–courier–customer coordination'},
    {name:'TaskRabbit', url:'https://taskrabbit.com', desc:'connects local workers with tasks on demand'},
    {name:'Tinder',     url:'https://tinder.com',     desc:'bilateral matching for dating, mobile-first'},
    {name:'Bumble',     url:'https://bumble.com',     desc:'matching with a twist: women initiate first'},
    {name:'Grab',       url:'https://grab.com',       desc:'South-East Asia super-app for rides & delivery'},
  ],
  '0-12-19': [ // Marketplace + Web App
    {name:'Airbnb',     url:'https://airbnb.com',     desc:'host–guest matching for short-term stays'},
    {name:'Upwork',     url:'https://upwork.com',     desc:'freelancer–company matching across 90+ categories'},
    {name:'Faire',      url:'https://faire.com',      desc:'independent brands matched to boutique retailers'},
    {name:'Fiverr',     url:'https://fiverr.com',     desc:'micro-service marketplace for creative gigs'},
    {name:'Thumbtack',  url:'https://thumbtack.com',  desc:'homeowners matched to local professionals'},
    {name:'Houzz',      url:'https://houzz.com',      desc:'homeowners matched to architects and designers'},
  ],
  '0-14-19': [ // Platform + Web App
    {name:'LinkedIn',   url:'https://linkedin.com',   desc:'professional network enabling job & talent discovery'},
    {name:'GitHub',     url:'https://github.com',     desc:'open-source collaboration matching contributors to projects'},
    {name:'Calendly',   url:'https://calendly.com',   desc:'eliminates the back-and-forth of meeting scheduling'},
  ],
  '0-14-18': [ // Platform + Mobile App
    {name:'Hinge',      url:'https://hinge.co',       desc:'designed to be deleted — deep compatibility matching'},
    {name:'Gojek',      url:'https://gojek.com',      desc:'Indonesia super-app matching drivers, food, payments'},
    {name:'Meetup',     url:'https://meetup.com',     desc:'connects people with shared interests in the same city'},
  ],
  '0-13-19': [ // SaaS + Web App
    {name:'Calendly',   url:'https://calendly.com',   desc:'automated scheduling removes back-and-forth friction'},
    {name:'Doodle',     url:'https://doodle.com',     desc:'group availability polling and meeting coordination'},
    {name:'Cal.com',    url:'https://cal.com',        desc:'open-source scheduling infrastructure'},
  ],
  '0-17-18': [ // Data Network + Mobile App
    {name:'Waze',       url:'https://waze.com',       desc:'every driver improves routing for all other drivers'},
  ],
  '0-17-19': [ // Data Network + Web App
    {name:'LinkedIn',   url:'https://linkedin.com',   desc:'professional graph grows more valuable with each member'},
  ],
  '0-16-19': [ // Automation + Web App
    {name:'HireVue',    url:'https://hirevue.com',    desc:'automated candidate matching and interview screening'},
    {name:'Lever',      url:'https://lever.co',       desc:'automated candidate pipeline from sourcing to offer'},
  ],

  // ── 1 DISCOVERY ─────────────────────────────────────────────
  '1-14-19': [ // Platform + Web App
    {name:'Google',       url:'https://google.com',           desc:'organizing all the world\'s information'},
    {name:'Pinterest',    url:'https://pinterest.com',        desc:'visual discovery engine for ideas and products'},
    {name:'Reddit',       url:'https://reddit.com',           desc:'community-curated discovery of content and links'},
    {name:'Product Hunt', url:'https://producthunt.com',      desc:'daily-curated discovery of new tech products'},
    {name:'Hacker News',  url:'https://news.ycombinator.com', desc:'community-ranked tech and startup content'},
  ],
  '1-14-18': [ // Platform + Mobile App
    {name:'TikTok',    url:'https://tiktok.com',    desc:'algorithmic short-video discovery engine'},
    {name:'Instagram', url:'https://instagram.com', desc:'visual content discovery via Explore and Reels'},
    {name:'Snapchat',  url:'https://snapchat.com',  desc:'ephemeral content discovery and friend map'},
    {name:'Pinterest', url:'https://pinterest.com', desc:'visual idea discovery, highly intent-driven'},
  ],
  '1-13-19': [ // SaaS + Web App
    {name:'Yelp',        url:'https://yelp.com',        desc:'discover and evaluate local businesses via reviews'},
    {name:'TripAdvisor', url:'https://tripadvisor.com', desc:'discover hotels and restaurants worldwide'},
    {name:'Glassdoor',   url:'https://glassdoor.com',   desc:'discover what it\'s really like to work somewhere'},
    {name:'Zillow',      url:'https://zillow.com',      desc:'discover real estate listings and pricing'},
    {name:'G2',          url:'https://g2.com',          desc:'discover the right B2B software via peer reviews'},
    {name:'Capterra',    url:'https://capterra.com',    desc:'software discovery and comparison for businesses'},
  ],
  '1-13-18': [ // SaaS + Mobile App
    {name:'Spotify',  url:'https://spotify.com',  desc:'discover music via algorithm, playlists, and social'},
    {name:'Shazam',   url:'https://shazam.com',   desc:'identify any song playing around you in seconds'},
    {name:'Yelp',     url:'https://yelp.com',     desc:'find great local spots near you on the go'},
  ],
  '1-12-18': [ // Marketplace + Mobile App
    {name:'Eventbrite', url:'https://eventbrite.com', desc:'discover and book local events'},
    {name:'StubHub',    url:'https://stubhub.com',    desc:'discover available tickets for any event'},
    {name:'Airbnb',     url:'https://airbnb.com',     desc:'discover unique accommodations worldwide'},
  ],
  '1-17-18': [ // Data Network + Mobile App
    {name:'TikTok',  url:'https://tiktok.com',  desc:'more views → better algorithm → better discovery for all'},
    {name:'Spotify', url:'https://spotify.com', desc:'listening data improves recommendations for everyone'},
  ],
  '1-14-21': [ // Platform + AI Tool
    {name:'Perplexity', url:'https://perplexity.ai',    desc:'AI-native answer engine replacing keyword search'},
    {name:'ChatGPT',    url:'https://chat.openai.com',  desc:'conversational discovery of any information'},
    {name:'Glean',      url:'https://glean.com',        desc:'AI-powered internal enterprise search and discovery'},
  ],
  '1-13-21': [ // SaaS + AI Tool
    {name:'Algolia', url:'https://algolia.com', desc:'AI-powered search-as-a-service for any product'},
    {name:'Glean',   url:'https://glean.com',   desc:'AI discovery across all workplace documents and tools'},
  ],

  // ── 2 INFORMATION ASYMMETRY ─────────────────────────────────
  '2-13-19': [ // SaaS + Web App
    {name:'Glassdoor', url:'https://glassdoor.com', desc:'reveals salary ranges and company culture hidden from candidates'},
    {name:'Zillow',    url:'https://zillow.com',    desc:'makes real estate pricing data accessible to everyone'},
    {name:'Carfax',    url:'https://carfax.com',    desc:'vehicle history that dealers used to hide from buyers'},
    {name:'ZoomInfo',  url:'https://zoominfo.com',  desc:'B2B data giving sales teams full account visibility'},
    {name:'Gong',      url:'https://gong.io',       desc:'surfaces what actually happens in sales calls'},
    {name:'Clearbit',  url:'https://clearbit.com',  desc:'reveals who is visiting your website and why'},
  ],
  '2-13-18': [ // SaaS + Mobile App
    {name:'Credit Karma', url:'https://creditkarma.com', desc:'shows your credit score — once hidden by banks'},
    {name:'Robinhood',    url:'https://robinhood.com',   desc:'transparent commission-free pricing vs. broker markups'},
  ],
  '2-14-19': [ // Platform + Web App
    {name:'Trustpilot', url:'https://trustpilot.com', desc:'consumer reviews making business quality transparent'},
    {name:'G2',         url:'https://g2.com',         desc:'real user reviews of software products'},
    {name:'Yelp',       url:'https://yelp.com',       desc:'surfaces hidden quality signals for local businesses'},
  ],
  '2-15-20': [ // Infrastructure + API
    {name:'Clearbit',    url:'https://clearbit.com',    desc:'B2B data enrichment API — who is your customer'},
    {name:'FullContact', url:'https://fullcontact.com', desc:'identity resolution API'},
    {name:'Hunter.io',   url:'https://hunter.io',       desc:'email finder API for outbound prospecting'},
  ],
  '2-17-19': [ // Data Network + Web App
    {name:'Palantir',  url:'https://palantir.com',  desc:'more data ingested → more insight surfaced'},
    {name:'Datadog',   url:'https://datadoghq.com', desc:'infrastructure metrics made visible to engineering teams'},
    {name:'Snowflake', url:'https://snowflake.com', desc:'centralizes siloed data making it actionable'},
  ],
  '2-14-21': [ // Platform + AI Tool
    {name:'Gong',   url:'https://gong.io',   desc:'AI surfaces hidden patterns in revenue conversations'},
    {name:'Chorus', url:'https://chorus.ai', desc:'AI conversation intelligence closing the coaching gap'},
  ],

  // ── 3 TRUST ─────────────────────────────────────────────────
  '3-15-20': [ // Infrastructure + API
    {name:'Stripe',  url:'https://stripe.com',      desc:'trusted payment infrastructure as API'},
    {name:'Persona', url:'https://withpersona.com', desc:'identity verification API — KYC without friction'},
    {name:'Okta',    url:'https://okta.com',         desc:'identity and access management API layer'},
    {name:'Auth0',   url:'https://auth0.com',        desc:'authentication-as-a-service API'},
    {name:'Alloy',   url:'https://alloy.com',        desc:'identity decisioning infrastructure for fintechs'},
  ],
  '3-15-19': [ // Infrastructure + Web App
    {name:'Cloudflare',  url:'https://cloudflare.com',  desc:'DDoS and security layer protecting sites from attacks'},
    {name:'Okta',        url:'https://okta.com',         desc:'enterprise SSO and zero-trust access management'},
    {name:'CrowdStrike', url:'https://crowdstrike.com', desc:'endpoint security trusted by Fortune 500s'},
  ],
  '3-14-19': [ // Platform + Web App
    {name:'PayPal',     url:'https://paypal.com',     desc:'trusted intermediary between buyers and sellers online'},
    {name:'Stripe',     url:'https://stripe.com',     desc:'platform powering payments trusted by millions'},
    {name:'Trustpilot', url:'https://trustpilot.com', desc:'verified review platform building business credibility'},
  ],
  '3-13-19': [ // SaaS + Web App
    {name:'DocuSign',  url:'https://docusign.com',  desc:'legally binding e-signature removing paper contracts'},
    {name:'HelloSign', url:'https://hellosign.com', desc:'lightweight e-signature for SMBs'},
    {name:'Carta',     url:'https://carta.com',     desc:'cap table and equity management trusted by startups'},
  ],
  '3-13-18': [ // SaaS + Mobile App
    {name:'Venmo',    url:'https://venmo.com',   desc:'P2P payments trusted between friends'},
    {name:'Cash App', url:'https://cash.app',    desc:'send money to anyone — trust through brand simplicity'},
    {name:'Revolut',  url:'https://revolut.com', desc:'international transfers with transparent FX pricing'},
  ],
  '3-12-19': [ // Marketplace + Web App
    {name:'Airbnb', url:'https://airbnb.com', desc:'built an entire trust system for staying with strangers'},
    {name:'eBay',   url:'https://ebay.com',    desc:'feedback system enabling trust between unknown buyers/sellers'},
    {name:'Etsy',   url:'https://etsy.com',    desc:'seller ratings enabling trust in independent creators'},
  ],
  '3-12-18': [ // Marketplace + Mobile App
    {name:'OfferUp',              url:'https://offerup.com',            desc:'local C2C marketplace with built-in trust ratings'},
    {name:'Facebook Marketplace', url:'https://facebook.com/marketplace', desc:'social graph as trust signal for local transactions'},
  ],
  '3-17-19': [ // Data Network + Web App
    {name:'Trustpilot', url:'https://trustpilot.com', desc:'more reviews → stronger trust signal → more reviews'},
    {name:'Yelp',       url:'https://yelp.com',       desc:'review network where more data means more trustworthy results'},
  ],

  // ── 4 INFRASTRUCTURE GAP ────────────────────────────────────
  '4-15-20': [ // Infrastructure + API
    {name:'Stripe',    url:'https://stripe.com',    desc:'payment infrastructure as simple API — 7 lines of code'},
    {name:'Twilio',    url:'https://twilio.com',    desc:'communications infrastructure: SMS, voice, email via API'},
    {name:'Plaid',     url:'https://plaid.com',     desc:'bank connectivity API every fintech was rebuilding'},
    {name:'Segment',   url:'https://segment.com',   desc:'customer data infrastructure — write once, send anywhere'},
    {name:'Confluent', url:'https://confluent.io',  desc:'real-time data streaming infrastructure API'},
    {name:'SendGrid',  url:'https://sendgrid.com',  desc:'email delivery infrastructure as API at scale'},
    {name:'Checkr',    url:'https://checkr.com',    desc:'background check infrastructure API for any platform'},
  ],
  '4-15-19': [ // Infrastructure + Web App
    {name:'AWS',        url:'https://aws.amazon.com', desc:'cloud infrastructure ending the need to own servers'},
    {name:'Cloudflare', url:'https://cloudflare.com', desc:'CDN and security layer — internet infrastructure'},
    {name:'HashiCorp',  url:'https://hashicorp.com',  desc:'infrastructure-as-code tooling for cloud provisioning'},
    {name:'Okta',       url:'https://okta.com',        desc:'identity infrastructure layer for the enterprise'},
  ],
  '4-14-19': [ // Platform + Web App
    {name:'Snowflake',  url:'https://snowflake.com',  desc:'data cloud platform on which analytics tools are built'},
    {name:'Databricks', url:'https://databricks.com', desc:'unified data and AI platform for enterprise'},
    {name:'GitHub',     url:'https://github.com',     desc:'platform for code — every developer builds on it'},
    {name:'Shopify',    url:'https://shopify.com',    desc:'commerce infrastructure platform enabling any merchant'},
  ],
  '4-14-20': [ // Platform + API
    {name:'Stripe',  url:'https://stripe.com',  desc:'payment platform with deep API ecosystem'},
    {name:'Twilio',  url:'https://twilio.com',  desc:'communication platform fully API-driven'},
    {name:'Algolia', url:'https://algolia.com', desc:'search platform delivered entirely through API'},
  ],
  '4-14-21': [ // Platform + AI Tool
    {name:'Hugging Face', url:'https://huggingface.co', desc:'open-source AI model hub — the GitHub of AI'},
    {name:'Replicate',    url:'https://replicate.com',  desc:'platform to run and deploy ML models via API'},
  ],
  '4-13-19': [ // SaaS + Web App
    {name:'MongoDB',   url:'https://mongodb.com',   desc:'flexible database infrastructure for any application'},
    {name:'Elastic',   url:'https://elastic.co',    desc:'search and analytics infrastructure as SaaS'},
    {name:'PagerDuty', url:'https://pagerduty.com', desc:'incident management infrastructure for on-call teams'},
    {name:'Dynatrace', url:'https://dynatrace.com', desc:'application observability infrastructure'},
  ],

  // ── 5 PROCESS INEFFICIENCY ──────────────────────────────────
  '5-13-19': [ // SaaS + Web App
    {name:'Notion',     url:'https://notion.so',     desc:'unified workspace replacing fragmented Docs, Sheets, Confluence'},
    {name:'Slack',      url:'https://slack.com',     desc:'real-time team communication replacing email threads'},
    {name:'Figma',      url:'https://figma.com',     desc:'real-time collaborative design ending version-file chaos'},
    {name:'Linear',     url:'https://linear.app',    desc:'fast, opinionated issue tracker replacing bloated Jira'},
    {name:'Rippling',   url:'https://rippling.com',  desc:'unified HR, IT, and payroll replacing 3 separate systems'},
    {name:'Gusto',      url:'https://gusto.com',     desc:'payroll and benefits in one flow — no more Excel'},
    {name:'HubSpot',    url:'https://hubspot.com',   desc:'CRM, email, and analytics in one — no more copy-paste'},
    {name:'Asana',      url:'https://asana.com',     desc:'project tracking replacing email-based status updates'},
    {name:'Monday.com', url:'https://monday.com',    desc:'visual project management replacing spreadsheet trackers'},
    {name:'Zendesk',    url:'https://zendesk.com',   desc:'support ticket management replacing inbox chaos'},
    {name:'DocuSign',   url:'https://docusign.com',  desc:'electronic contracts replacing print-sign-scan'},
    {name:'Intercom',   url:'https://intercom.com',  desc:'customer messaging replacing manual email threads'},
  ],
  '5-13-18': [ // SaaS + Mobile App
    {name:'Todoist',    url:'https://todoist.com',    desc:'simple task management wherever you are'},
    {name:'Superhuman', url:'https://superhuman.com', desc:'email that is 2x faster — keyboard-first inbox'},
    {name:'Loom',       url:'https://loom.com',       desc:'async video replacing long meeting chains'},
  ],
  '5-14-19': [ // Platform + Web App
    {name:'Airtable',   url:'https://airtable.com',  desc:'flexible database platform replacing spreadsheet workarounds'},
    {name:'Retool',     url:'https://retool.com',     desc:'internal tool builder replacing custom-coded admin panels'},
    {name:'Salesforce', url:'https://salesforce.com', desc:'CRM platform with ecosystem replacing manual sales ops'},
    {name:'Atlassian',  url:'https://atlassian.com',  desc:'Jira + Confluence + Trello — integrated dev workflow'},
  ],
  '5-16-19': [ // Automation + Web App
    {name:'Zapier', url:'https://zapier.com', desc:'no-code automation eliminating manual cross-app work'},
    {name:'Make',   url:'https://make.com',   desc:'visual workflow automation for complex business processes'},
    {name:'UiPath', url:'https://uipath.com', desc:'robotic process automation for enterprise workflows'},
    {name:'n8n',    url:'https://n8n.io',     desc:'open-source workflow automation for technical teams'},
  ],
  '5-13-21': [ // SaaS + AI Tool
    {name:'Otter.ai',  url:'https://otter.ai',     desc:'AI meeting transcription eliminating manual note-taking'},
    {name:'Fireflies', url:'https://fireflies.ai',  desc:'AI assistant capturing and searching meeting context'},
    {name:'Notion AI', url:'https://notion.so',     desc:'AI writing and summarization inside your workspace'},
  ],

  // ── 6 AUTOMATION OPPORTUNITY ────────────────────────────────
  '6-16-19': [ // Automation + Web App
    {name:'Zapier',               url:'https://zapier.com',              desc:'no-code automation connecting 5,000+ apps'},
    {name:'Make',                 url:'https://make.com',                desc:'visual scenario builder for complex automations'},
    {name:'UiPath',               url:'https://uipath.com',              desc:'enterprise RPA — software robots for any legacy task'},
    {name:'Workato',              url:'https://workato.com',             desc:'enterprise automation for complex multi-step workflows'},
    {name:'n8n',                  url:'https://n8n.io',                  desc:'open-source automation with code when needed'},
    {name:'Automation Anywhere',  url:'https://automationanywhere.com',  desc:'intelligent RPA for enterprise back-office'},
  ],
  '6-13-19': [ // SaaS + Web App
    {name:'HubSpot',  url:'https://hubspot.com',  desc:'automated marketing and sales pipeline — no manual follow-ups'},
    {name:'Klaviyo',  url:'https://klaviyo.com',  desc:'automated e-commerce email flows triggered by behavior'},
    {name:'Braze',    url:'https://braze.com',    desc:'automated customer engagement across every channel'},
    {name:'Bill.com', url:'https://bill.com',     desc:'automated AP/AR eliminating manual invoice processing'},
    {name:'Ramp',     url:'https://ramp.com',     desc:'automated expense management and corporate card controls'},
    {name:'Rippling', url:'https://rippling.com', desc:'automated IT provisioning — software access on day one'},
  ],
  '6-16-21': [ // Automation + AI Tool
    {name:'UiPath AI', url:'https://uipath.com',   desc:'document understanding AI automating unstructured data'},
    {name:'Reduce',    url:'https://reduceit.ai',   desc:'AI-powered RPA for document-heavy workflows'},
    {name:'Bardeen',   url:'https://bardeen.ai',    desc:'AI automation for browser-based repetitive tasks'},
  ],
  '6-15-20': [ // Infrastructure + API
    {name:'Twilio',   url:'https://twilio.com',   desc:'automated messaging triggered by business events via API'},
    {name:'SendGrid', url:'https://sendgrid.com', desc:'automated email delivery at any scale via API'},
    {name:'Courier',  url:'https://courier.com',  desc:'notification automation API across every channel'},
  ],
  '6-14-19': [ // Platform + Web App
    {name:'Salesforce', url:'https://salesforce.com', desc:'automation platform with Flow for complex business rules'},
    {name:'ServiceNow', url:'https://servicenow.com', desc:'enterprise workflow automation and IT service management'},
  ],
  '6-13-21': [ // SaaS + AI Tool
    {name:'GitHub Copilot', url:'https://github.com/features/copilot', desc:'automates code completion — 46% of code written by AI'},
    {name:'Jasper',         url:'https://jasper.ai',                   desc:'automates marketing content generation at scale'},
  ],

  // ── 7 AGGREGATION ───────────────────────────────────────────
  '7-12-19': [ // Marketplace + Web App
    {name:'Booking.com', url:'https://booking.com',  desc:'aggregated global hotel inventory into one search surface'},
    {name:'Expedia',     url:'https://expedia.com',   desc:'aggregated flights, hotels, and cars into one booking'},
    {name:'Faire',       url:'https://faire.com',     desc:'aggregated independent brands for boutique retailers'},
    {name:'Houzz',       url:'https://houzz.com',     desc:'aggregated home design pros and products'},
    {name:'Angi',        url:'https://angi.com',      desc:'aggregated local home service professionals'},
    {name:'Thomasnet',   url:'https://thomasnet.com', desc:'aggregated industrial suppliers for B2B procurement'},
  ],
  '7-12-18': [ // Marketplace + Mobile App
    {name:'DoorDash',  url:'https://doordash.com',  desc:'aggregated local restaurant delivery into one app'},
    {name:'Instacart', url:'https://instacart.com', desc:'aggregated local grocery stores into on-demand delivery'},
    {name:'Grab',      url:'https://grab.com',      desc:'aggregated Southeast Asian transport, food, and finance'},
    {name:'Getir',     url:'https://getir.com',     desc:'aggregated ultra-fast grocery delivery across cities'},
  ],
  '7-14-18': [ // Platform + Mobile App
    {name:'Spotify',  url:'https://spotify.com', desc:'aggregated all music into one streaming platform'},
    {name:'Netflix',  url:'https://netflix.com',  desc:'aggregated TV and film replacing fragmented cable channels'},
    {name:'Twitch',   url:'https://twitch.tv',    desc:'aggregated live gaming content replacing scattered streams'},
  ],
  '7-14-19': [ // Platform + Web App
    {name:'Substack',     url:'https://substack.com',    desc:'aggregated independent writers into one newsletter ecosystem'},
    {name:'Product Hunt', url:'https://producthunt.com', desc:'aggregates new product launches daily'},
    {name:'Dev.to',       url:'https://dev.to',          desc:'aggregated developer writing across the web'},
  ],
  '7-17-19': [ // Data Network + Web App
    {name:'Yelp',     url:'https://yelp.com',     desc:'review aggregation — more reviews = better signal'},
    {name:'G2',       url:'https://g2.com',       desc:'aggregated software reviews from real users'},
    {name:'Capterra', url:'https://capterra.com', desc:'aggregated business software reviews'},
  ],
  '7-13-19': [ // SaaS + Web App
    {name:'Segment',   url:'https://segment.com',  desc:'aggregates all customer data from fragmented sources'},
    {name:'Confluent', url:'https://confluent.io', desc:'aggregates real-time data streams into one platform'},
    {name:'Plaid',     url:'https://plaid.com',    desc:'aggregates fragmented banking data for fintech apps'},
  ],

  // ── 8 ACCESS LIMITATION ─────────────────────────────────────
  '8-13-18': [ // SaaS + Mobile App
    {name:'Robinhood', url:'https://robinhood.com', desc:'commission-free investing for anyone with a smartphone'},
    {name:'Duolingo',  url:'https://duolingo.com',  desc:'world-class language learning — free, mobile, gamified'},
    {name:'Calm',      url:'https://calm.com',       desc:'meditation and sleep tools once only in retreat centers'},
    {name:'Coinbase',  url:'https://coinbase.com',  desc:'crypto investing accessible to anyone, not just institutions'},
    {name:'Monzo',     url:'https://monzo.com',     desc:'full-featured banking for the underserved, no branch needed'},
    {name:'Chime',     url:'https://chime.com',     desc:'mobile bank account for those rejected by traditional banks'},
    {name:'Revolut',   url:'https://revolut.com',   desc:'global financial services at near-zero cost'},
    {name:'Nubank',    url:'https://nubank.com.br', desc:'banking for 60M Brazilians excluded by legacy banks'},
    {name:'Klarna',    url:'https://klarna.com',    desc:'BNPL giving purchasing power to those without credit cards'},
  ],
  '8-13-19': [ // SaaS + Web App
    {name:'Wealthfront', url:'https://wealthfront.com', desc:'automated investing at 0.25% — used to require 1-2% advisor'},
    {name:'Betterment',  url:'https://betterment.com',  desc:'robo-advisor making portfolio management accessible'},
    {name:'Substack',    url:'https://substack.com',    desc:'any writer can now build a paid media business'},
    {name:'Beehiiv',     url:'https://beehiiv.com',     desc:'newsletter platform giving creators monetization tools'},
    {name:'Webflow',     url:'https://webflow.com',     desc:'professional web design without needing a developer'},
    {name:'Canva',       url:'https://canva.com',       desc:'professional design tools for non-designers'},
    {name:'Coursera',    url:'https://coursera.com',    desc:'world-class university courses at a fraction of tuition'},
  ],
  '8-12-19': [ // Marketplace + Web App
    {name:'Coursera', url:'https://coursera.com', desc:'top university content made marketplace-accessible'},
    {name:'Udemy',    url:'https://udemy.com',     desc:'anyone can teach, anyone can learn — 64M students'},
    {name:'WeWork',   url:'https://wework.com',   desc:'premium office space made accessible to startups and freelancers'},
  ],
  '8-12-18': [ // Marketplace + Mobile App
    {name:'Turo',   url:'https://turo.com',   desc:'car rental from anyone — democratizing car access'},
    {name:'Airbnb', url:'https://airbnb.com', desc:'accommodation accessible globally at any budget'},
  ],
  '8-14-19': [ // Platform + Web App
    {name:'Shopify',  url:'https://shopify.com',  desc:'e-commerce platform once only possible with millions in tech'},
    {name:'Substack', url:'https://substack.com', desc:'media business tools for individual creators'},
    {name:'Framer',   url:'https://framer.com',   desc:'professional interactive design for non-coders'},
  ],
  '8-17-18': [ // Data Network + Mobile App
    {name:'Duolingo', url:'https://duolingo.com', desc:'learning data from 500M users improves every lesson'},
  ],

  // ── 9 COST REDUCTION ────────────────────────────────────────
  '9-13-19': [ // SaaS + Web App
    {name:'Zoom',        url:'https://zoom.us',        desc:'video meetings at near zero cost vs. business travel'},
    {name:'Canva',       url:'https://canva.com',       desc:'design at $12/mo vs. $50–100/hr agency'},
    {name:'Shopify',     url:'https://shopify.com',     desc:'e-commerce site at $29/mo vs. $100K agency build'},
    {name:'Wealthfront', url:'https://wealthfront.com', desc:'0.25% AUM vs. 1-2% financial advisor fee'},
    {name:'Notion',      url:'https://notion.so',       desc:'$8/mo replacing $50+/mo multi-tool stack'},
    {name:'Loom',        url:'https://loom.com',        desc:'async video replacing expensive in-person meetings'},
    {name:'Figma',       url:'https://figma.com',       desc:'free for starters vs. $600/yr for Adobe Creative Suite'},
  ],
  '9-13-18': [ // SaaS + Mobile App
    {name:'Revolut', url:'https://revolut.com', desc:'FX at interbank rate vs. 3-5% bank markup'},
    {name:'Wise',    url:'https://wise.com',    desc:'international transfers at true mid-market rate'},
    {name:'Monzo',   url:'https://monzo.com',   desc:'zero foreign transaction fees vs. 3% bank standard'},
  ],
  '9-14-19': [ // Platform + Web App
    {name:'Shopify', url:'https://shopify.com', desc:'merchant ecosystem reducing software and service cost'},
    {name:'GitHub',  url:'https://github.com',  desc:'free code hosting vs. private server setup costs'},
  ],
  '9-12-19': [ // Marketplace + Web App
    {name:'Udemy',       url:'https://udemy.com',   desc:'$15 course vs. $3,000 in-person training'},
    {name:'Booking.com', url:'https://booking.com', desc:'lower hotel rates through volume and transparency'},
  ],
  '9-15-20': [ // Infrastructure + API
    {name:'AWS',        url:'https://aws.amazon.com', desc:'pay-per-use cloud vs. millions in owned server capex'},
    {name:'Cloudflare', url:'https://cloudflare.com', desc:'enterprise-grade CDN and security at startup price'},
    {name:'Render',     url:'https://render.com',     desc:'affordable cloud hosting vs. complex AWS setup'},
  ],
  '9-13-21': [ // SaaS + AI Tool
    {name:'GitHub Copilot', url:'https://github.com/features/copilot', desc:'$19/mo replacing thousands in developer hours'},
    {name:'Cursor',         url:'https://cursor.com',                  desc:'AI editor dramatically reducing coding time cost'},
    {name:'Jasper',         url:'https://jasper.ai',                   desc:'AI content at $49/mo vs. $5K/mo content agency'},
  ],

  // ── 10 SPEED PROBLEM ────────────────────────────────────────
  '10-13-19': [ // SaaS + Web App
    {name:'Stripe',     url:'https://stripe.com',     desc:'payment setup in hours vs. weeks of bank onboarding'},
    {name:'Vercel',     url:'https://vercel.com',     desc:'deploy in seconds — Git push to production instantly'},
    {name:'Linear',     url:'https://linear.app',     desc:'issue tracking at 100ms interactions vs. Jira\'s 2+ seconds'},
    {name:'Superhuman', url:'https://superhuman.com', desc:'email processed 2x faster — sub-100ms for every action'},
    {name:'Loom',       url:'https://loom.com',       desc:'async video in seconds vs. scheduling meetings over days'},
  ],
  '10-13-18': [ // SaaS + Mobile App
    {name:'Cash App', url:'https://cash.app',    desc:'P2P payment instant vs. 3-5 day bank transfer'},
    {name:'Venmo',    url:'https://venmo.com',    desc:'instant P2P payments making splitting bills frictionless'},
    {name:'WhatsApp', url:'https://whatsapp.com', desc:'instant messaging vs. SMS delays and carrier costs'},
    {name:'Revolut',  url:'https://revolut.com',  desc:'instant international transfers vs. 1-3 day SWIFT'},
  ],
  '10-15-20': [ // Infrastructure + API
    {name:'Stripe',  url:'https://stripe.com', desc:'real-time payment processing vs. batch settlement'},
    {name:'Twilio',  url:'https://twilio.com', desc:'instant programmable SMS vs. telco provisioning weeks'},
    {name:'Fastly',  url:'https://fastly.com', desc:'edge network delivering content in milliseconds worldwide'},
  ],
  '10-15-19': [ // Infrastructure + Web App
    {name:'Cloudflare', url:'https://cloudflare.com', desc:'CDN cutting page load from seconds to milliseconds'},
    {name:'Fastly',     url:'https://fastly.com',     desc:'real-time CDN for streaming and media companies'},
  ],
  '10-14-19': [ // Platform + Web App
    {name:'Vercel',         url:'https://vercel.com',                   desc:'platform making deploy → live in under 30 seconds'},
    {name:'Netlify',        url:'https://netlify.com',                  desc:'JAMstack platform for instant web deployment'},
    {name:'GitHub Actions', url:'https://github.com/features/actions',  desc:'CI/CD automation cutting release cycles from days to minutes'},
  ],
  '10-12-18': [ // Marketplace + Mobile App
    {name:'DoorDash', url:'https://doordash.com', desc:'food in 30 min vs. 60+ min — speed is the product'},
    {name:'Gorillas', url:'https://gorillas.io',  desc:'grocery delivery in 10 minutes'},
    {name:'Getir',    url:'https://getir.com',    desc:'ultra-fast grocery delivery in minutes, not hours'},
  ],
  '10-13-21': [ // SaaS + AI Tool
    {name:'Cursor',         url:'https://cursor.com',                   desc:'AI code completion 10x faster than manual typing'},
    {name:'GitHub Copilot', url:'https://github.com/features/copilot',  desc:'complete entire functions in milliseconds'},
    {name:'v0',             url:'https://v0.dev',                       desc:'generate UI components in seconds'},
  ],
  '10-16-19': [ // Automation + Web App
    {name:'Zapier', url:'https://zapier.com', desc:'instant data movement between apps — no human delay'},
    {name:'Make',   url:'https://make.com',   desc:'real-time automation replacing batched manual work'},
  ],

  // ── 11 NEW TECH CAPABILITY ──────────────────────────────────
  '11-14-21': [ // Platform + AI Tool
    {name:'OpenAI',       url:'https://openai.com',    desc:'LLMs as platform — ChatGPT + API powering thousands of apps'},
    {name:'Anthropic',    url:'https://anthropic.com', desc:'Constitutional AI safety platform'},
    {name:'Midjourney',   url:'https://midjourney.com', desc:'diffusion models enabling instant professional image creation'},
    {name:'Runway',       url:'https://runwayml.com',  desc:'AI video generation — never possible before transformer era'},
    {name:'ElevenLabs',   url:'https://elevenlabs.io', desc:'ultra-realistic AI voice cloning and synthesis platform'},
    {name:'Stability AI', url:'https://stability.ai',  desc:'open-source diffusion models as platform for creative apps'},
  ],
  '11-15-20': [ // Infrastructure + API
    {name:'OpenAI API',    url:'https://platform.openai.com', desc:'GPT-4 as infrastructure — any app can now think'},
    {name:'Anthropic API', url:'https://anthropic.com',       desc:'Claude API for safe reasoning in any application'},
    {name:'ElevenLabs',    url:'https://elevenlabs.io',       desc:'voice synthesis API for any content platform'},
    {name:'Replicate',     url:'https://replicate.com',       desc:'run any open-source AI model via simple API'},
    {name:'Deepgram',      url:'https://deepgram.com',        desc:'real-time speech-to-text API — 5x faster than Google'},
  ],
  '11-13-21': [ // SaaS + AI Tool
    {name:'Cursor',     url:'https://cursor.com',    desc:'AI-native code editor — GPT-4 embedded in the IDE'},
    {name:'v0',         url:'https://v0.dev',         desc:'generates React UI components from text prompts'},
    {name:'Jasper',     url:'https://jasper.ai',      desc:'AI content generation for marketers at scale'},
    {name:'Runway',     url:'https://runwayml.com',   desc:'AI video editing SaaS — previously impossible effects'},
    {name:'Descript',   url:'https://descript.com',   desc:'edit audio/video by editing text — AI transcription native'},
    {name:'Perplexity', url:'https://perplexity.ai',  desc:'AI-native search replacing keyword queries'},
  ],
  '11-13-19': [ // SaaS + Web App
    {name:'Cursor',    url:'https://cursor.com',  desc:'AI code editor enabled by GPT-4 function calling'},
    {name:'Lovable',   url:'https://lovable.dev', desc:'natural language app builder — build full-stack in minutes'},
    {name:'Framer AI', url:'https://framer.com',  desc:'AI-generated website from text prompt'},
    {name:'Notion AI', url:'https://notion.so',   desc:'AI writing, summarization and Q&A inside workspace'},
  ],
  '11-14-19': [ // Platform + Web App
    {name:'Figma',   url:'https://figma.com',   desc:'browser rendering became powerful enough for real-time design'},
    {name:'Netflix', url:'https://netflix.com', desc:'streaming made viable by broadband infrastructure reaching 50%'},
    {name:'OpenAI',  url:'https://openai.com',  desc:'ChatGPT web platform democratizing AI capability'},
  ],
  '11-13-23': [ // SaaS + Hardware
    {name:'Tesla',   url:'https://tesla.com',      desc:'battery cost curves making EVs viable — SaaS updates over-the-air'},
    {name:'Peloton', url:'https://onepeloton.com', desc:'connected fitness made possible by sensors + streaming'},
    {name:'Nest',    url:'https://nest.com',        desc:'ML + sensors enabling a thermostat to learn your schedule'},
  ],
  '11-14-23': [ // Platform + Hardware
    {name:'Tesla',      url:'https://tesla.com',     desc:'platform of sensors, compute, and OTA updates in every car'},
    {name:'Meta Quest', url:'https://meta.com/quest', desc:'VR platform enabled by cost drops in display and compute'},
    {name:'Spatial',    url:'https://spatial.io',    desc:'spatial computing platform on AR hardware'},
  ],
  '11-15-23': [ // Infrastructure + Hardware
    {name:'SpaceX',  url:'https://spacex.com',  desc:'reusable rocket infrastructure — 10x cost reduction in launch'},
    {name:'Anduril', url:'https://anduril.com', desc:'AI defense hardware enabled by modern compute'},
  ],
  '11-12-18': [ // Marketplace + Mobile App
    {name:'Coinbase', url:'https://coinbase.com', desc:'crypto exchange made accessible by blockchain technology'},
    {name:'OpenSea',  url:'https://opensea.io',   desc:'NFT marketplace enabled by Ethereum smart contracts'},
  ],
  '11-17-21': [ // Data Network + AI Tool
    {name:'OpenAI',     url:'https://openai.com',     desc:'model improves from billions of interactions — data flywheel'},
    {name:'Midjourney', url:'https://midjourney.com', desc:'image model improves from millions of user ratings'},
    {name:'Duolingo',   url:'https://duolingo.com',   desc:'AI learning model trained on 500M learner sessions'},
  ],
};
