import React from "react";
import { fireEvent, screen, render, waitFor } from "@testing-library/react"
import Display from "../Display";

test( "test that the Display component renders without any passed in props", () => {
    render(<Display/>)
})

const mockData =

test("show test data element", () => {
    const { rerender } = render(<Display show = {[]} />);
})














///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.


// const mockData = [{ mission_name: "Thaicom", mission_id: "9D1B7E0", manufacturers: ["Orbital ATK"], payload_ids: ["Thaicom 6", "Thaicom 8"], wikipedia: "https://en.wikipedia.org/wiki/Thaicom", website: "http://www.thaicom.net/en/satellites/overview", twitter: "https://twitter.com/thaicomplc", description: "Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology." }, { mission_name: "Telstar", mission_id: "F4F83DE", manufacturers: ["SSL"], payload_ids: ["Telstar 19V", "Telstar 18V"], wikipedia: "https://en.wikipedia.org/wiki/Telesat", website: "https://www.telesat.com/", twitter: null, description: "Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009." }, { mission_name: "Iridium NEXT", mission_id: "F3364BF", manufacturers: ["Orbital ATK"], payload_ids: ["Iridium NEXT 1", "Iridium NEXT 2", "Iridium NEXT 3", "Iridium NEXT 4", "Iridium NEXT 5", "Iridium NEXT 6", "Iridium NEXT 7", "Iridium NEXT 8"], wikipedia: "https://en.wikipedia.org/wiki/Iridium_satellite_constellation", website: "https://www.iridiumnext.com/", twitter: "https://twitter.com/IridiumBoss?lang=en", description: "In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares. These satellites will incorporate features such as data transmission that were not emphasized in the original design. The constellation will provide L-band data speeds of up to 128 kbit/s to mobile terminals, up to 1.5 Mbit/s to Iridium Pilot marine terminals, and high-speed Ka-band service of up to 8 Mbit/s to fixed/transportable terminals. The next-generation terminals and service are expected to be commercially available by the end of 2018. However, Iridium's proposed use of its next-generation satellites has raised concerns the service will harmfully interfere with GPS devices. The satellites will incorporate a secondary payload for Aireon, a space-qualified ADS-B data receiver. This is for use by air traffic control and, via FlightAware, for use by airlines. A tertiary payload on 58 satellites is a marine AIS ship-tracker receiver, for Canadian company exactEarth Ltd. Iridium can also be used to provide a data link to other satellites in space, enabling command and control of other space assets regardless of the position of ground stations and gateways." }, { mission_name: "ABS", mission_id: "2CF444A", manufacturers: ["Boeing"], payload_ids: ["ABS-3A", "ABS-3B"], wikipedia: "https://en.wikipedia.org/wiki/ABS_(satellite_operator)", website: "http://www.absatellite.com/", twitter: null, description: "ABS, formerly Asia Broadcast Satellite, is a global satellite operator based in Hong Kong and officially incorporated in Bermuda. Its services include direct-to-home and satellite-to-cable TV distribution, cellular services, and internet services. Operating 6 communication satellites, the satellite fleet currently covers 93% of the world’s population including the Americas, Africa, Asia Pacific, Europe, the Middle East, Russia and Commonwealth of Independent States." }]

// // Lifecycle of this component (roughly speaking):
// // Initial render. props.missions = []
// // When "Get Data" button is clicked, API call begins... (asynchronous cool stuff, Promises)
// // Happy path: rerender. props.missions = [real data from the api]
// // Sad path: rerender. props.error contains an error message to display

// test("MissionsList displays mission names when rerendered with new data", () => {
//     const { rerender } = render(<MissionsList missions={[]} />);

//     let renderedMissions = screen.queryByTestId("mission");
//     expect(renderedMissions).toBeNull();

//     // Simulate a successful api call, leading to a props change that triggers a rerender
//     rerender(<MissionsList missions={mockData} />);
//     renderedMissions = screen.getAllByTestId("mission");
//     expect(renderedMissions).toHaveLength(4);
// });

// // Also test the sad path :(
// test("MissionsList displays an error message when the api call fails", () => {
//     const { rerender } = render(<MissionsList missions={[]} />);

//     const renderedMissions = screen.queryByTestId("mission");
//     expect(renderedMissions).toBeNull();

//     // Simulate a failing api call, leading to a props change that triggers a rerender
//     rerender(<MissionsList missions={[]} error="very sad error, apologies for sad" />);
//     const errorMessage = screen.getByText(/very sad error, apologies for sad/i); // implicit assertion
// })
