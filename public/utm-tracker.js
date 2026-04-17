(function (w) {
  var UTM_KEYS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ];

  function getUtmParams() {
    var searchParams = new URLSearchParams(w.location.search);
    var payload = {};
    var hasUtm = false;

    for (var i = 0; i < UTM_KEYS.length; i += 1) {
      var key = UTM_KEYS[i];
      var value = searchParams.get(key);

      if (!value) {
        continue;
      }

      payload[key] = value;
      hasUtm = true;
    }

    return hasUtm ? payload : null;
  }

  async function sendFromLocation(config) {
    if (!config || !config.cookieId || !config.endpoint) {
      return false;
    }

    var utmParams = getUtmParams();

    if (!utmParams) {
      return false;
    }

    var body = {
      cookieId: config.cookieId,
      token: config.token,
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
      utm_content: utmParams.utm_content,
      utm_term: utmParams.utm_term,
    };

    await fetch(config.endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      cache: "no-cache",
    });

    return true;
  }

  w.UtmTracker = {
    sendFromLocation: sendFromLocation,
  };
})(window);
