if(window.mics && window.mics._call){
  mics._call("mycanal-web", 'setConfig',[{"segment_evaluator_url":"https://static.mediarithmics.com/tag/2/evaluator.min.js","enable_local_segment_evaluation":true,"segment_definition_uri":"/v1/sites/mycanal-web/segment.js?v=309","enable_apx_matching":true,"enable_goo_matching":true,"enable_tcf_v2_for_cookie_matching":false,"enable_id5":false,"namespace":"mics_canal","site_token":"mycanal-web"}])
} else if(window.mics && window.mics._setConfig){
  mics._setConfig({"segment_evaluator_url":"https://static.mediarithmics.com/tag/2/evaluator.min.js","enable_local_segment_evaluation":true,"segment_definition_uri":"/v1/sites/mycanal-web/segment.js?v=309","enable_apx_matching":true,"enable_goo_matching":true,"enable_tcf_v2_for_cookie_matching":false,"enable_id5":false,"namespace":"mics_canal","site_token":"mycanal-web"})
}

if (window.mics && window.mics._call) {
    mics._call("mycanal-web", 'markConfigAsLoaded', [])
} else if (window.mics && window.mics._markConfigAsLoaded) {
    mics._markConfigAsLoaded()
}