export default {
  async fetch(request: Request): Promise<Response> {
    const j = request.cf as any;

    let headers = {};
    request.headers.forEach((s, k) => (headers = { ...headers, [k]: s }));

    const data = {
      headers,

      cloudflare: {
        latitude: j.latitude,
        longitude: j.longitude,
        timeZone: j.timezone,
        city: j.city,
        postalCode: j.postalCode,
        country: j.country,
        continent: j.continent,
        region: j.region,
        regionCode: j.regionCode,

        colo: j.colo,

        asn: j.asn,
        asOrganization: j.asOrganization,
      },
    };

    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
  },
};
