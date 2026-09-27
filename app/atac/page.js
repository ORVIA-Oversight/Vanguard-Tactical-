import {Shell,PageHero,Kicker,Icon,Btn} from '../components';

const IMG='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?cs=srgb&dl=pexels-gmb-visuals-564876670-20335223.jpg&fm=jpg';

const features=[
  ['map','SHARED LIVE MAP','See the team on one map with squad colours, recent movement, accuracy circles and last-seen age.'],
  ['signal','LIVE / DELAYED / OFFLINE','ATAC makes freshness visible: LIVE under 15 seconds, DELAYED 15–60 seconds and OFFLINE over 60 seconds.'],
  ['target','GROUND MARKS','Report what is actually on the ground using controlled mark types, with an optional photo and note.'],
  ['radio','FIELD TRAFFIC','Structured one-tap messages and free text are in the live baseline. Push-to-talk voice exists in the build but is flagged for a current production retest.'],
  ['calendar','EVENT BRIEF','Keep arrival instructions, organiser brief, AO image and source PDF with the live event instead of buried in chat.'],
  ['users','CALLSIGN FIRST','Field users join with an event code and a pre-loaded callsign. Shared views use callsigns rather than personal names.']
];

export default function Page(){
  return <Shell>
    <PageHero
      kicker="VANGUARD × ATAC"
      title="SEE THE TEAM. SEE THE GROUND. RUN THE EVENT."
      text="ATAC is the live field-awareness layer that fits naturally beside Vanguard events: authorised participants deliberately join an event, share their position while active, report ground information and give Control one common operational picture."
      image={IMG}
      chips={['LIVE STATUS','CALLSIGNS','GROUND MARKS','EVENT BRIEF','VOICE MESSAGES']}
    />

    <section className="section">
      <div className="section-head">
        <div><Kicker>LIVE FIELD LAYER</Kicker><h2>THE BIT THAT HAPPENS AFTER THE BRIEF.</h2></div>
        <p className="section-intro">Vanguard organises the people, event, kit and brief. ATAC adds the live event picture once the team is moving. The capability already exists as an event-based mobile web app; the unified Vanguard account and data hand-off is the next integration layer.</p>
      </div>
      <div className="content-grid">
        {features.map(([i,t,d])=><div className="content-card" key={t}><Icon name={i}/><h3>{t}</h3><p>{d}</p></div>)}
      </div>
    </section>

    <section className="section section-dark">
      <div className="section-head">
        <div><Kicker>SIMULATED OPERATING PICTURE</Kicker><h2>MAKE STATUS VISIBLE, NOT ASSUMED.</h2></div>
        <p className="section-intro">This visual is a Vanguard demonstration of the ATAC operating model. It is deliberately labelled simulated rather than pretending to be a live event.</p>
      </div>

      <div className="atac-demo">
        <div className="atac-demo-top">
          <div><span className="eyebrow">ATAC / EVENT ALPHA</span><h3>FIELD PICTURE</h3></div>
          <span className="sim-badge">SIMULATED DATA</span>
        </div>
        <div className="atac-demo-grid">
          <div className="atac-map">
            <div className="map-grid"></div>
            <span className="map-point p1 live"><b>A1</b><small>±8m</small></span>
            <span className="map-point p2 live"><b>A2</b><small>±12m</small></span>
            <span className="map-point p3 delayed"><b>B1</b><small>31s</small></span>
            <span className="map-point p4 offline"><b>B2</b><small>2m 14s</small></span>
            <span className="map-mark m1"><Icon name="target" size={18}/><small>GROUND MARK</small></span>
            <span className="map-mark m2"><Icon name="map" size={18}/><small>RV</small></span>
          </div>
          <div className="atac-side">
            <div className="status-stack">
              <div><span className="status-dot live-dot"></span><b>LIVE</b><strong>6</strong></div>
              <div><span className="status-dot delayed-dot"></span><b>DELAYED</b><strong>1</strong></div>
              <div><span className="status-dot offline-dot"></span><b>OFFLINE</b><strong>1</strong></div>
            </div>
            <div className="atac-feed">
              <span className="eyebrow">RECENT TRAFFIC</span>
              <div><b>A1</b><span>MOVING</span><small>now</small></div>
              <div><b>B1</b><span>RV ON ME</span><small>18s</small></div>
              <div><b>A2</b><span>GROUND MARK ADDED</span><small>34s</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="section-head">
        <div><Kicker>WHAT IS ALREADY UNDERNEATH IT</Kicker><h2>ATAC ALREADY HAS A REAL-TIME BACK END.</h2></div>
        <p className="section-intro">The live ATAC build is not a mock-up. It currently runs on Viktor Space with a Convex real-time database. Vanguard does not need to recreate the field engine from zero; the integration job is to connect Vanguard identity, teams and events to the capability that already exists.</p>
      </div>
      <div className="content-grid">
        <div className="content-card"><Icon name="signal"/><h3>CONVEX REAL-TIME DATA</h3><p>Events, players, positions, messages, waypoints and administrator sessions are stored behind live subscriptions, so connected command views receive new field data without refreshing.</p></div>
        <div className="content-card"><Icon name="map"/><h3>MAPLIBRE + OPENSTREETMAP</h3><p>The live map uses MapLibre GL JS over OpenStreetMap raster tiles. Position history, accuracy, squad filtering, waypoints and field marks sit on the same event picture.</p></div>
        <div className="content-card"><Icon name="bolt"/><h3>LOCAL POSITION QUEUE</h3><p>Position fixes are queued on the phone when data drops and uploaded in order when connectivity returns. Catch-up history is preserved, although it is not live awareness during the outage.</p></div>
        <div className="content-card"><Icon name="users"/><h3>ROSTER + CALLSIGN CONTROL</h3><p>Pre-loaded callsigns carry name, squad/group and role. The field map stays callsign-first while the authenticated control view can see the real identity behind it.</p></div>
        <div className="content-card"><Icon name="shield"/><h3>ADMIN + EVENT CONTROL</h3><p>The control layer can create, close and reopen events, manage event codes, remove participants, revoke or reinstate callsigns and inspect event history without deleting the underlying field record.</p></div>
        <div className="content-card"><Icon name="eye"/><h3>HISTORY + GAP EVIDENCE</h3><p>Stored position history supports fix counts, first/last fix and gaps over 60 seconds. The system records the gap as an information gap rather than inventing a cause.</p></div>
      </div>
    </section>

    <section className="section">
      <div className="section-head">
        <div><Kicker>HOW IT FITS</Kicker><h2>VANGUARD BEFORE. ATAC DURING. LEARNING AFTER.</h2></div>
        <p className="section-intro">The point is not another standalone app. It is a field layer attached to the same team and event model.</p>
      </div>
      <div className="steps atac-steps">
        <div className="step"><b>01 / PREPARE</b><h3>VANGUARD EVENT</h3><p>Roster, attendance, assignment, equipment, timings and controlled documents.</p></div>
        <div className="step"><b>02 / JOIN</b><h3>EVENT CODE + CALLSIGN</h3><p>No app-store install for field users. Join the defined event and deliberately start sharing.</p></div>
        <div className="step"><b>03 / OPERATE</b><h3>ATAC LIVE LAYER</h3><p>Position age, accuracy, squad view, movement, field marks, messages and event brief.</p></div>
        <div className="step"><b>04 / REVIEW</b><h3>VANGUARD AAR</h3><p>Bring human observations, decisions and lessons back into the team record. Automated ATAC replay/export remains a future integration.</p></div>
      </div>
    </section>

    <section className="section section-dark">
      <div className="section-head">
        <div><Kicker>WHAT IS LIVE / WHAT IS NEXT</Kicker><h2>SHOW THE CAPABILITY WITHOUT OVERSELLING IT.</h2></div>
        <p className="section-intro">ATAC's field capability is live. Some of the deeper Vanguard integration is not yet wired, so the website distinguishes the two.</p>
      </div>
      <div className="content-grid">
        <div className="content-card"><Icon name="check"/><h3>LIVE ATAC CAPABILITY</h3><p>Event-code joining, callsigns, foreground position sharing, accuracy and age, status states, movement trails, ground marks, structured traffic, event brief and command map.</p></div>
        <div className="content-card"><Icon name="bolt"/><h3>VANGUARD INTEGRATION — IN BUILD</h3><p>Use the Vanguard roster and event object to create the ATAC event, carry authorised role/callsign data across and return controlled event information without duplicate administration.</p></div>
        <div className="content-card"><Icon name="eye"/><h3>FUTURE EVENT REPLAY</h3><p>Automated export, after-action replay and deeper event analytics are not current ATAC functions and are shown only as future capability.</p></div>
      </div>
    </section>

    <section className="section section-dark">
      <div className="section-head">
        <div><Kicker>CAPABILITY TRUTH</Kicker><h2>WHAT WE CAN DO NOW — AND WHAT WE CANNOT.</h2></div>
        <p className="section-intro">This is the current controlled position from the live ATAC build and technical handover, not a future-feature wishlist.</p>
      </div>
      <div className="capability-matrix">
        <div className="capability-column">
          <span className="capability-label live-cap">LIVE / BASELINE</span>
          <h3>Available now</h3>
          <ul>
            <li>Event-code join with pre-loaded callsign, role and squad/group</li>
            <li>PWA / home-screen use with no app-store install for field users</li>
            <li>Foreground GPS position sharing with phone-reported accuracy</li>
            <li>LIVE / DELAYED / OFFLINE freshness states</li>
            <li>Offline position queue and ordered catch-up when signal returns</li>
            <li>Recent movement trails, squad filters, follow mode and accuracy circles</li>
            <li>41 ground-mark types in five groups, with optional note/photo</li>
            <li>Preset and free-text field messages with callsign and position</li>
            <li>Manual waypoints and shareable map locations</li>
            <li>Event brief with organiser instructions, AO image and source PDF</li>
            <li>Authenticated super-admin event and roster controls</li>
            <li>Stored field history and reporting-gap evidence</li>
            <li>Simulation mode permanently marked SIMULATED DATA</li>
          </ul>
        </div>
        <div className="capability-column">
          <span className="capability-label review-cap">RETEST / CONTROLLED</span>
          <h3>Exists but needs current proof</h3>
          <ul>
            <li>Push-to-talk browser voice clips exist in the build, but later assurance records require a current production retest before we present voice as field-proven</li>
            <li>Photo/note storage exists, but privacy and retention behaviour should be retested before wider commercial use</li>
            <li>Scale and endurance across many phones and poor-signal environments are not yet supported by a mature operational evidence base</li>
          </ul>
        </div>
        <div className="capability-column">
          <span className="capability-label missing-cap">NOT BUILT / NOT AVAILABLE</span>
          <h3>Do not claim yet</h3>
          <ul>
            <li>Background GPS while the phone is locked or the browser is backgrounded</li>
            <li>Offline map tiles</li>
            <li>Native iOS or Android apps</li>
            <li>Geofences or automatic entry/exit alarms</li>
            <li>Man-down or guaranteed emergency alerting</li>
            <li>CAD / dispatch / automatic resource allocation</li>
            <li>Customer self-service, multi-tenant administration or billing</li>
            <li>Automatic after-action export or replay</li>
            <li>Full Vanguard-to-ATAC identity/event synchronisation</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="section-head">
        <div><Kicker>FIELD BOUNDARIES</Kicker><h2>USEFUL AWARENESS. NOT A MAGIC BLUE DOT.</h2></div>
        <p className="section-intro">ATAC is a supporting event-awareness tool. The age and accuracy of a position matter just as much as the dot itself.</p>
      </div>
      <div className="content-grid">
        <div className="content-card"><Icon name="signal"/><h3>FOREGROUND REQUIRED</h3><p>Browser position sharing requires the app to remain active and the phone awake. It does not provide hidden or guaranteed background tracking.</p></div>
        <div className="content-card"><Icon name="radio"/><h3>NOT A RADIO REPLACEMENT</h3><p>Messages and voice clips support the event picture. Normal radios, phones and site emergency arrangements remain the primary operational path.</p></div>
        <div className="content-card"><Icon name="shield"/><h3>NOT A SAFETY ALARM</h3><p>No man-down detection, monitoring centre or guaranteed emergency alert path. Position accuracy and mobile connectivity are variable.</p></div>
      </div>
      <div className="actions">
        <a className="btn" href="https://atac.orvia.org.uk/join" target="_blank" rel="noreferrer">OPEN ATAC FIELD JOIN <Icon name="arrow" size={17}/></a>
        <Btn href="/events" secondary>SEE VANGUARD EVENTS</Btn>
      </div>
    </section>

    <section className="band"><h2>PLAN IT IN VANGUARD. SEE IT MOVE THROUGH ATAC.</h2><Btn href="/pricing">EXPLORE VANGUARD</Btn></section>
  </Shell>
}
