# Design plan: Advanced Asphalt & Concrete

## Brief
- **Subject:** asphalt, concrete, seal coating, striping/ADA markings and masonry contractor, Brookhaven GA, commercial and residential
- **Audience:** two kinds of buyer. Commercial: property and facility managers, HOA boards, apartment and retail owners, GCs (they compare bids and want credentials). Residential: homeowners planning a driveway or custom paving.
- **Primary job:** get a quote request (call or form), and route each visitor to the right service fast
- **Proof on hand:** a drone shot of their work, real team photos, licensed and insured, DUNS number, in business since 2016, a long list of project types

## Color
Drawn from a freshly striped lot: sealed asphalt, poured concrete, and the two paint colors that actually go on pavement.

| Token | Hex | Role |
|---|---|---|
| concrete | `#d4d7d7` | Page background. Cool cement grey (not cream) |
| slab | `#e8eaea` | Raised areas: picker panel, form, team cards |
| asphalt | `#202326` | Text, header, dark bands. Sealcoat black with a blue-grey cast |
| asphalt-soft | `#4b5057` | Secondary text |
| joint | `#aeb2b3` | Rules and borders, like expansion joints |
| paint-yellow | `#f4c20d` | Traffic yellow: call/quote buttons, the quote band, the selected answer in the picker |
| ada-blue | `#1d4f9c` | Accessible-parking blue: used only for the striping/ADA service and links on light ground |

## Type
- **Barlow Condensed** (700/800) for headlines: Barlow was drawn from California highway signs and license plates, and the condensed cut reads like markings painted on pavement. Set big and tight, sentence case.
- **Barlow** (400/500/600) for body, same family at normal width, so contrast comes from width, not a second typeface.
- 18px base, 1.55 line height, lines under 65 characters.

## Layout (home)
```
[ AAC logo            Services  Team  Contact          (Call 470-546-3653) ]
[==== thin yellow paint line under header ====]
[ Asphalt, concrete and striping        |                                   ]
[ for properties across Atlanta.        |   drone shot of a commercial lot  ]
[ sub line                              |                                   ]
[ (Call) (Get a free quote)             |                                   ]
[ Licensed and insured. Since 2016. DUNS 119695123.                         ]
[■■■■ ASPHALT BAND: "What does your pavement need?" ■■■■■■■■■■■■■■■■■■■■■■■]
[ (Faded lines) (Gray, dry surface) (Cracks/potholes) (Starting new) (Custom)]
[ → answer panel: the service, what it does, link to service + quote        ]
[ Services: ruled list, 6 rows: name | one line from their site            ]
[ Who we pave for: project types set as a big wrapped list                  ]
[ The team: 3 real photos + names + direct lines, link to /team             ]
[ How we work: since 2016, safety training, weekly production meetings      ]
[■■■■ YELLOW BAND: Get a free quote / Call ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■]
[ footer: phone big, email, Brookhaven GA, licensed & insured, DUNS          ]
```
Pages: home, 6 service pages, /team (story + 3 people), /contact (quote form), /thank-you, 404.
Left-aligned. Mobile: call/quote bar pinned to the bottom.

## Memorable element
**"What does your pavement need?"** A condition picker on an asphalt band. Visitors tap what they see (faded lines, gray and dry surface, cracks or potholes, starting from dirt, something custom) and get the matching service, in plain words taken from AAC's own descriptions, with a link to that service and a quote button. It's specific to paving, helps commercial buyers who know the symptom but not the service name, and gives the client something to play with in the mockup. Everything else stays quiet.

## Principles
1. One bold thing: the picker. The rest is plain ruled lists and real photos.
2. Credentials up front for commercial buyers (licensed, insured, DUNS, since 2016).
3. Real people: the team section uses their own photos and direct phone lines.

## Checked against the AI defaults
- Dark asphalt with a yellow accent is close to "near-black with one bright accent" (default 2). Changed: the page ground is light concrete; asphalt appears only in the header, the picker band and the footer, and yellow is reserved for buttons, the quote band and the picker's selected answer.
- Services are a ruled list, not cards (default 4). Team uses photos with plain text, not identical shadowed cards.
- No eyebrow labels, no middle-dot meta strings, no monospace, no arrows on buttons (default 5).
- No numbered markers: none of the content is a real sequence.
- Fonts are Barlow, chosen for its highway-sign origin, not Inter/Roboto.

## Mockup mode
- Preview bar at the top: "Design preview for Advanced Asphalt & Concrete. Not the live site."
- Every page is `noindex` so the vercel.app copy never competes with their real domain in Google.
- The quote form goes to /thank-you without sending anything, and says where it will go when live.
- Photos are hotlinked from their Wix media library until we have originals.
