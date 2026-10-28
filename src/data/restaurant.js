const address = "12-4, Dogenzaka, Shibuya-ku, Tokyo 150-0043, Japan";

export const restaurant = {
    name: "YŪGEN Modern Japanese Kitchen",
    address,
    hours: "11:30 AM – 10:00 PM",

    // opens Google Maps (or the Maps app on a phone) with directions
    directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=" +
        encodeURIComponent(`YŪGEN Modern Japanese Kitchen, ${address}`),
};