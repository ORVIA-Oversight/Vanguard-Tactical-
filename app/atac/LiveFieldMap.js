'use client';

import {useEffect,useRef,useState} from 'react';
import maplibregl from 'maplibre-gl';

const SAMPLE=[
  {id:'6-1',label:'6-1',lng:-1.4791,lat:53.5488,status:'LIVE'},
  {id:'6-2',label:'6-2',lng:-1.4759,lat:53.5502,status:'LIVE'},
  {id:'7-1',label:'7-1',lng:-1.4820,lat:53.5473,status:'DELAYED'}
];

export default function LiveFieldMap(){
  const ref=useRef(null);
  const mapRef=useRef(null);
  const [geoStatus,setGeoStatus]=useState('');

  useEffect(()=>{
    if(!ref.current || mapRef.current) return;
    const map=new maplibregl.Map({
      container:ref.current,
      style:'https://demotiles.maplibre.org/style.json',
      center:[-1.479,53.549],
      zoom:14
    });
    map.addControl(new maplibregl.NavigationControl(),'top-right');
    SAMPLE.forEach(p=>{
      const el=document.createElement('div');
      el.className='vanguard-map-marker '+(p.status==='DELAYED'?'is-delayed':'');
      el.innerHTML='<b>'+p.label+'</b>';
      new maplibregl.Marker({element:el}).setLngLat([p.lng,p.lat]).addTo(map);
    });
    mapRef.current=map;
    return ()=>{map.remove();mapRef.current=null;};
  },[]);

  function showPosition(){
    if(!navigator.geolocation){setGeoStatus('Location is not available in this browser.');return;}
    setGeoStatus('Requesting location…');
    navigator.geolocation.getCurrentPosition(pos=>{
      const {latitude,longitude,accuracy}=pos.coords;
      const el=document.createElement('div');
      el.className='vanguard-map-marker is-user';
      el.innerHTML='<b>YOU</b>';
      new maplibregl.Marker({element:el}).setLngLat([longitude,latitude]).addTo(mapRef.current);
      mapRef.current.flyTo({center:[longitude,latitude],zoom:15});
      setGeoStatus('Your browser-reported position is shown (±'+Math.round(accuracy)+'m). It is not stored by this demo.');
    },()=>setGeoStatus('Location was not shared.'),{enableHighAccuracy:true,timeout:10000});
  }

  return <div className="vanguard-live-map-shell">
    <div className="vanguard-live-map-head">
      <div><span className="eyebrow">MAPLIBRE / OPEN MAP</span><h3>INTERACTIVE FIELD PICTURE</h3></div>
      <span className="sim-badge">SIMULATED EVENT DATA</span>
    </div>
    <div ref={ref} className="vanguard-live-map"/>
    <div className="vanguard-live-map-foot">
      <button type="button" className="btn btn-small" onClick={showPosition}>SHOW MY POSITION</button>
      <span>{geoStatus || 'MapLibre is now running directly inside Vanguard. Traccar / Meshtastic adapters can feed the same track contract next.'}</span>
    </div>
  </div>;
}
