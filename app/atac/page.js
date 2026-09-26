import {Shell,PageHero,Kicker,Icon,Btn} from '../components';

const IMG='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?cs=srgb&dl=pexels-gmb-visuals-564876670-20335223.jpg&fm=jpg';

const features=[
  ['map','SHARED LIVE MAP','See the team on one map with squad colours, recent movement, accuracy circles and last-seen age.'],
  ['signal','LIVE / DELAYED / OFFLINE','ATAC makes freshness visible: LIVE under 15 seconds, DELAYED 15–60 seconds and OFFLINE over 60 seconds.'],
  ['target','GROUND MARKS','Report what is actually on the ground using controlled mark types, with an optional photo and note.'],
  ['radio','FIELD TRAFFIC','Structured one-tap messages, free text and browser voice messages sit against the sender callsign and position.'],
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
