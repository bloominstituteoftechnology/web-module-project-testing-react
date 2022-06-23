import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';

export const showObj = {
    "name": "Stranger Things",
    "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/396/991288.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/396/991288.jpg"
    },
    "summary": "A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.",
    "seasons": [
        {
            "id": 0,
            "name": "Season 1",
            "episodes": [
                {
                    "id": 553946,
                    "url": "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
                    "name": "Chapter One: The Vanishing of Will Byers",
                    "season": 1,
                    "number": 1,
                    "type": "regular",
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 49,
                    "rating": {
                        "average": 8.2
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
                    "summary": "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/553946"
                        }
                    }
                },
                {
                    "id": 578663,
                    "url": "https://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
                    "name": "Chapter Two: The Weirdo on Maple Street",
                    "season": 1,
                    "number": 2,
                    "type": "regular",
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 56,
                    "rating": {
                        "average": 8.1
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855787.jpg",
                    "summary": "While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/578663"
                        }
                    }
                },
                {
                    "id": 578664,
                    "url": "https://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
                    "name": "Chapter Three: Holly, Jolly",
                    "season": 1,
                    "number": 3,
                    "type": "regular",
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 52,
                    "rating": {
                        "average": 8.7
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855788.jpg",
                    "summary": "While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/578664"
                        }
                    }
                },
                {
                    "id": 578665,
                    "url": "https://www.tvmaze.com/episodes/578665/stranger-things-1x04-chapter-four-the-body",
                    "name": "Chapter Four: The Body",
                    "season": 1,
                    "number": 4,
                    "type": "regular",
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 51,
                    "rating": {
                        "average": 8.5
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855789.jpg",
                    "summary": "Jim realizes that the government is covering something up about Will's death and begins a personal investigation. Meanwhile, Nancy discovers that Jonathan has information about Barbara's disappearance, while Mike and his friends smuggle Jane into the school so she can use the ham radio to contact Will.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/578665"
                        }
                    }
                },
                {
                    "id": 578666,
                    "url": "https://www.tvmaze.com/episodes/578666/stranger-things-1x05-chapter-five-the-flea-and-the-acrobat",
                    "name": "Chapter Five: The Flea and the Acrobat",
                    "season": 1,
                    "number": 5,
                    "type": "regular",
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 53,
                    "rating": {
                        "average": 8.4
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855790.jpg",
                    "summary": "Jim searches for Will at Hawkins Laboratory, but finds something unexpected. Meanwhile, Lonnie helps Joyce bury Will but reveals an ulterior motive for returning to town, while the boys find a way to locate Will but discover that Jane is opposing them.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/578666"
                        }
                    }
                },
                {
                    "id": 578667,
                    "url": "https://www.tvmaze.com/episodes/578667/stranger-things-1x06-chapter-six-the-monster",
                    "name": "Chapter Six: The Monster",
                    "season": 1,
                    "number": 6,
                    "type": "regular",
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 47,
                    "rating": {
                        "average": 8.7
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855791.jpg",
                    "summary": "Jonathan manages to pull Nancy back to the real world from the Upside Down. Meanwhile, Lucas refuses to help with the search for Jane and goes to Hawkins Labs on his own, while Dustin and Mike look for the missing girl.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/578667"
                        }
                    }
                },
                {
                    "id": 578668,
                    "url": "https://www.tvmaze.com/episodes/578668/stranger-things-1x07-chapter-seven-the-bathtub",
                    "name": "Chapter Seven: The Bathtub",
                    "season": 1,
                    "number": 7,
                    "type": "regular",
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 42,
                    "rating": {
                        "average": 8.6
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855792.jpg",
                    "summary": "Jim manages to bring everyone together so that they can join forces to reconnect Jane to the Upside Down and find Will. Meanwhile, the government closes in on Jane and the boys.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/578668"
                        }
                    }
                },
                {
                    "id": 578669,
                    "url": "https://www.tvmaze.com/episodes/578669/stranger-things-1x08-chapter-eight-the-upside-down",
                    "name": "Chapter Eight: The Upside Down",
                    "season": 1,
                    "number": 8,
                    "type": "regular",
                    "airdate": "2016-07-15",
                    "airtime": "",
                    "airstamp": "2016-07-15T12:00:00+00:00",
                    "runtime": 55,
                    "rating": {
                        "average": 9
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855793.jpg",
                    "summary": "Jim convinces Brenner to let him and Joyce enter the Upside Down to find Will... unaware that Brenner plans to recover Jane no matter what it takes. Meanwhile, Nancy and Jonathan prepare to trap the monster at the Byers house, but receive an unexpected visitor.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/578669"
                        }
                    }
                }
            ]
        },
        {
            "id": 1,
            "name": "Season 2",
            "episodes": [
                {
                    "id": 909340,
                    "url": "https://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax",
                    "name": "Chapter One: MADMAX",
                    "season": 2,
                    "number": 1,
                    "type": "regular",
                    "airdate": "2017-10-27",
                    "airtime": "",
                    "airstamp": "2017-10-27T12:00:00+00:00",
                    "runtime": 48,
                    "rating": {
                        "average": 8.3
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855794.jpg",
                    "summary": "One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor. The boys discover that there's a new player in town, and Jim pays a visit to El.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/909340"
                        }
                    }
                },
                {
                    "id": 909342,
                    "url": "https://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak",
                    "name": "Chapter Two: Trick or Treat, Freak",
                    "season": 2,
                    "number": 2,
                    "type": "regular",
                    "airdate": "2017-10-27",
                    "airtime": "",
                    "airstamp": "2017-10-27T12:00:00+00:00",
                    "runtime": 56,
                    "rating": {
                        "average": 8.3
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855795.jpg",
                    "summary": "The boys go trick-or-treating on Halloween, and Will has another vision. Meanwhile, El relieves the days following her escape from the Upside Down, and Dustin finds something in the garbage can.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/909342"
                        }
                    }
                },
                {
                    "id": 909343,
                    "url": "https://www.tvmaze.com/episodes/909343/stranger-things-2x03-chapter-three-the-pollywog",
                    "name": "Chapter Three: The Pollywog",
                    "season": 2,
                    "number": 3,
                    "type": "regular",
                    "airdate": "2017-10-27",
                    "airtime": "",
                    "airstamp": "2017-10-27T12:00:00+00:00",
                    "runtime": 51,
                    "rating": {
                        "average": 8.3
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/399/998468.jpg",
                    "summary": "Dustin takes in a stray and calls it D'Artagnan. However, his plans to show it to Mr. Clarke don't go as intended. Meanwhile, Max tries to convince Mike to let her join the group, El sneaks out to pay her friends a visit, and Will decides to take a stand and face his fears.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/909343"
                        }
                    }
                },
                {
                    "id": 909344,
                    "url": "https://www.tvmaze.com/episodes/909344/stranger-things-2x04-chapter-four-will-the-wise",
                    "name": "Chapter Four: Will the Wise",
                    "season": 2,
                    "number": 4,
                    "type": "regular",
                    "airdate": "2017-10-27",
                    "airtime": "",
                    "airstamp": "2017-10-27T12:00:00+00:00",
                    "runtime": 46,
                    "rating": {
                        "average": 8.4
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/399/998469.jpg",
                    "summary": "After his encounter with the shadow creature, Will's condition worsens. Meanwhile, Jim and El fight after Jim discovers that El disobeyed the rules, and Owens brings Nancy and Jonathan to Hawkins Labs for a chat.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/909344"
                        }
                    }
                },
                {
                    "id": 909345,
                    "url": "https://www.tvmaze.com/episodes/909345/stranger-things-2x05-chapter-five-dig-dug",
                    "name": "Chapter Five: Dig Dug",
                    "season": 2,
                    "number": 5,
                    "type": "regular",
                    "airdate": "2017-10-27",
                    "airtime": "",
                    "airstamp": "2017-10-27T12:00:00+00:00",
                    "runtime": 58,
                    "rating": {
                        "average": 8.8
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855799.jpg",
                    "summary": "Jim is trapped in the Upside Down, and Joyce enlists Bob to help find him. Meanwhile, Nancy and Jonathan go to Murray, and El learns about the circumstances surrounding her birth.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/909345"
                        }
                    }
                },
                {
                    "id": 909346,
                    "url": "https://www.tvmaze.com/episodes/909346/stranger-things-2x06-chapter-six-the-spy",
                    "name": "Chapter Six: The Spy",
                    "season": 2,
                    "number": 6,
                    "type": "regular",
                    "airdate": "2017-10-27",
                    "airtime": "",
                    "airstamp": "2017-10-27T12:00:00+00:00",
                    "runtime": 52,
                    "rating": {
                        "average": 8.9
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/399/998470.jpg",
                    "summary": "Owens and his team try to find a way to end the shadow creature's influence on Will. Meanwhile, Dustin and Lucas find unlikely allies in their quest to find Dart.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/909346"
                        }
                    }
                },
                {
                    "id": 909347,
                    "url": "https://www.tvmaze.com/episodes/909347/stranger-things-2x07-chapter-seven-the-lost-sister",
                    "name": "Chapter Seven: The Lost Sister",
                    "season": 2,
                    "number": 7,
                    "type": "regular",
                    "airdate": "2017-10-27",
                    "airtime": "",
                    "airstamp": "2017-10-27T12:00:00+00:00",
                    "runtime": 46,
                    "rating": {
                        "average": 7.3
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/399/998471.jpg",
                    "summary": "El travels to Chicago to find her sister Eight, aka Kali, who has teamed up with other outcasts to kill the men who tormented her at Hawkins Labs.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/909347"
                        }
                    }
                },
                {
                    "id": 909348,
                    "url": "https://www.tvmaze.com/episodes/909348/stranger-things-2x08-chapter-eight-the-mind-flayer",
                    "name": "Chapter Eight: The Mind Flayer",
                    "season": 2,
                    "number": 8,
                    "type": "regular",
                    "airdate": "2017-10-27",
                    "airtime": "",
                    "airstamp": "2017-10-27T12:00:00+00:00",
                    "runtime": 48,
                    "rating": {
                        "average": 9.1
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/399/998472.jpg",
                    "summary": "When the demo-dogs overrun Hawkins Labs, one of the group saves the others at the cost of their own life. When the others get back to the Byers house, they realize what they're facing and try to get answers from a captive Will.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/909348"
                        }
                    }
                },
                {
                    "id": 909349,
                    "url": "https://www.tvmaze.com/episodes/909349/stranger-things-2x09-chapter-nine-the-gate",
                    "name": "Chapter Nine: The Gate",
                    "season": 2,
                    "number": 9,
                    "type": "regular",
                    "airdate": "2017-10-27",
                    "airtime": "",
                    "airstamp": "2017-10-27T12:00:00+00:00",
                    "runtime": 62,
                    "rating": {
                        "average": 8.9
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/399/998473.jpg",
                    "summary": "The group splits up to close the gate, evict the Mind Flayer from Will, and drive the demo-dogs away from Hawkins Lab.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/909349"
                        }
                    }
                }
            ]
        },
        {
            "id": 2,
            "name": "Season 3",
            "episodes": [
                {
                    "id": 1576469,
                    "url": "https://www.tvmaze.com/episodes/1576469/stranger-things-3x01-chapter-one-suzie-do-you-copy",
                    "name": "Chapter One: Suzie, Do You Copy?",
                    "season": 3,
                    "number": 1,
                    "type": "regular",
                    "airdate": "2019-07-04",
                    "airtime": "",
                    "airstamp": "2019-07-04T12:00:00+00:00",
                    "runtime": 51,
                    "rating": {
                        "average": 7.4
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/204/510098.jpg",
                    "summary": "Things change over the summer: Jonathan, Nancy, Steve, and Billy get jobs; Dustin goes to science camp; El and Mike become an item; Lucas and Max almost become an item. Meanwhile, mysterious power outages plague Hawkins and rats start exploding.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/1576469"
                        }
                    }
                },
                {
                    "id": 1576470,
                    "url": "https://www.tvmaze.com/episodes/1576470/stranger-things-3x02-chapter-two-the-mall-rats",
                    "name": "Chapter Two: The Mall Rats",
                    "season": 3,
                    "number": 2,
                    "type": "regular",
                    "airdate": "2019-07-04",
                    "airtime": "",
                    "airstamp": "2019-07-04T12:00:00+00:00",
                    "runtime": 50,
                    "rating": {
                        "average": 7.4
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/204/510099.jpg",
                    "summary": "While El and Max go shopping, Nancy and Wheeler follow up on the exploding rats. Billy takes a coworker on a field trip, and Joyce blows off dinner with Jim to meet with Mr. Clarke.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/1576470"
                        }
                    }
                },
                {
                    "id": 1576471,
                    "url": "https://www.tvmaze.com/episodes/1576471/stranger-things-3x03-chapter-three-the-case-of-the-missing-lifeguard",
                    "name": "Chapter Three: The Case of the Missing Lifeguard",
                    "season": 3,
                    "number": 3,
                    "type": "regular",
                    "airdate": "2019-07-04",
                    "airtime": "",
                    "airstamp": "2019-07-04T12:00:00+00:00",
                    "runtime": 50,
                    "rating": {
                        "average": 7.8
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/204/510100.jpg",
                    "summary": "El goes astrally projecting and discovers that Billy has done something with Heather. While the girls try to find the missing lifeguard, Will tries to get Mike and Lucas interested in D&amp;D. Dustin and Steve spy on the mall shops, and Robin tries to decipher the Russian message.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/1576471"
                        }
                    }
                },
                {
                    "id": 1576472,
                    "url": "https://www.tvmaze.com/episodes/1576472/stranger-things-3x04-chapter-four-the-sauna-test",
                    "name": "Chapter Four: The Sauna Test",
                    "season": 3,
                    "number": 4,
                    "type": "regular",
                    "airdate": "2019-07-04",
                    "airtime": "",
                    "airstamp": "2019-07-04T12:00:00+00:00",
                    "runtime": 53,
                    "rating": {
                        "average": 8.3
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/399/998477.jpg",
                    "summary": "Mike, Lucas, and Will recruit El and Max to help them learn who the Mind Flayer's host is. Robin, Steve, and Dustin recruit someone to sneak into Lynx, and Nancy and Jonathan are fired.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/1576472"
                        }
                    }
                },
                {
                    "id": 1576473,
                    "url": "https://www.tvmaze.com/episodes/1576473/stranger-things-3x05-chapter-five-the-flayed",
                    "name": "Chapter Five: The Flayed",
                    "season": 3,
                    "number": 5,
                    "type": "regular",
                    "airdate": "2019-07-04",
                    "airtime": "",
                    "airstamp": "2019-07-04T12:00:00+00:00",
                    "runtime": 52,
                    "rating": {
                        "average": 8
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/204/510102.jpg",
                    "summary": "The Scoop Group explore the tunnels beneath Starcourt, while Nancy and Jonathan recruit Mike and the others to help them discover what happen to the Holloways and find the Mind Flayer's base of operations.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/1576473"
                        }
                    }
                },
                {
                    "id": 1576474,
                    "url": "https://www.tvmaze.com/episodes/1576474/stranger-things-3x06-chapter-six-e-pluribus-unum",
                    "name": "Chapter Six: E Pluribus Unum",
                    "season": 3,
                    "number": 6,
                    "type": "regular",
                    "airdate": "2019-07-04",
                    "airtime": "",
                    "airstamp": "2019-07-04T12:00:00+00:00",
                    "runtime": 60,
                    "rating": {
                        "average": 8
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/204/510103.jpg",
                    "summary": "Dr. Alexei reveals what the Russians have been building, and Eleven sees where Billy has been. Dustin and Erica stage a daring rescue.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/1576474"
                        }
                    }
                },
                {
                    "id": 1576475,
                    "url": "https://www.tvmaze.com/episodes/1576475/stranger-things-3x07-chapter-seven-the-bite",
                    "name": "Chapter Seven: The Bite",
                    "season": 3,
                    "number": 7,
                    "type": "regular",
                    "airdate": "2019-07-04",
                    "airtime": "",
                    "airstamp": "2019-07-04T12:00:00+00:00",
                    "runtime": 55,
                    "rating": {
                        "average": 8.2
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/204/510104.jpg",
                    "summary": "El and the others defend themselves as the Flayer tracks them down. The Scoop Group escape the Russian base and hide in a movie theater, but the Russians close in on them.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/1576475"
                        }
                    }
                },
                {
                    "id": 1576476,
                    "url": "https://www.tvmaze.com/episodes/1576476/stranger-things-3x08-chapter-eight-the-battle-of-starcourt",
                    "name": "Chapter Eight: The Battle of Starcourt",
                    "season": 3,
                    "number": 8,
                    "type": "regular",
                    "airdate": "2019-07-04",
                    "airtime": "",
                    "airstamp": "2019-07-04T12:00:00+00:00",
                    "runtime": 78,
                    "rating": {
                        "average": 8.5
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/204/510105.jpg",
                    "summary": "The Flayer comes to the mall to get El, and Dustin contacts Suzie to provide Jim and Joyce with needed information. El reminds Billy of his past, and Jim and Joyce have an argument about not arguing.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/1576476"
                        }
                    }
                }
            ]
        },
        {
            "id": 3,
            "name": "Season 4",
            "episodes": [
                {
                    "id": 1752754,
                    "url": "https://www.tvmaze.com/episodes/1752754/stranger-things-4x01-chapter-one-the-hellfire-club",
                    "name": "Chapter One: The Hellfire Club",
                    "season": 4,
                    "number": 1,
                    "type": "regular",
                    "airdate": "2022-05-27",
                    "airtime": "",
                    "airstamp": "2022-05-27T12:00:00+00:00",
                    "runtime": 76,
                    "rating": {
                        "average": 8.1
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/410/1026083.jpg",
                    "summary": "El is bullied at school. Joyce opens a mysterious package. A scrappy player shakes up D&amp;D night.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/1752754"
                        }
                    }
                },
                {
                    "id": 1949379,
                    "url": "https://www.tvmaze.com/episodes/1949379/stranger-things-4x02-chapter-two-vecnas-curse",
                    "name": "Chapter Two: Vecna's Curse",
                    "season": 4,
                    "number": 2,
                    "type": "regular",
                    "airdate": "2022-05-27",
                    "airtime": "",
                    "airstamp": "2022-05-27T12:00:00+00:00",
                    "runtime": 75,
                    "rating": {
                        "average": 8.5
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/410/1025650.jpg",
                    "summary": "A plane brings Mike to California — and a dead body brings Hawkins to a halt. Nancy goes looking for leads. A shaken Eddie tells the gang what he saw.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/1949379"
                        }
                    }
                },
                {
                    "id": 1949380,
                    "url": "https://www.tvmaze.com/episodes/1949380/stranger-things-4x03-chapter-three-the-monster-and-the-superhero",
                    "name": "Chapter Three: The Monster and the Superhero",
                    "season": 4,
                    "number": 3,
                    "type": "regular",
                    "airdate": "2022-05-27",
                    "airtime": "",
                    "airstamp": "2022-05-27T12:00:00+00:00",
                    "runtime": 62,
                    "rating": {
                        "average": 8.3
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/410/1026085.jpg",
                    "summary": "Murray and Joyce fly to Alaska, and El faces serious consequences. Robin and Nancy dig up dirt on Hawkins' demons. Dr. Owens delivers sobering news.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/1949380"
                        }
                    }
                },
                {
                    "id": 2209851,
                    "url": "https://www.tvmaze.com/episodes/2209851/stranger-things-4x04-chapter-four-dear-billy",
                    "name": "Chapter Four: Dear Billy",
                    "season": 4,
                    "number": 4,
                    "type": "regular",
                    "airdate": "2022-05-27",
                    "airtime": "",
                    "airstamp": "2022-05-27T12:00:00+00:00",
                    "runtime": 77,
                    "rating": {
                        "average": 8.8
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/410/1025655.jpg",
                    "summary": "Max is in grave danger... and running out of time. A patient at Pennhurst asylum has visitors. Elsewhere, in Russia, Hopper is hard at work.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/2209851"
                        }
                    }
                },
                {
                    "id": 2209853,
                    "url": "https://www.tvmaze.com/episodes/2209853/stranger-things-4x05-chapter-five-the-nina-project",
                    "name": "Chapter Five: The Nina Project",
                    "season": 4,
                    "number": 5,
                    "type": "regular",
                    "airdate": "2022-05-27",
                    "airtime": "",
                    "airstamp": "2022-05-27T12:00:00+00:00",
                    "runtime": 74,
                    "rating": {
                        "average": 8.1
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/410/1026087.jpg",
                    "summary": "Owens takes El to Nevada, where she's forced to confront her past, while the Hawkins kids comb a crumbling house for clues. Vecna claims another victim.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/2209853"
                        }
                    }
                },
                {
                    "id": 2209854,
                    "url": "https://www.tvmaze.com/episodes/2209854/stranger-things-4x06-chapter-six-the-dive",
                    "name": "Chapter Six: The Dive",
                    "season": 4,
                    "number": 6,
                    "type": "regular",
                    "airdate": "2022-05-27",
                    "airtime": "",
                    "airstamp": "2022-05-27T12:00:00+00:00",
                    "runtime": 73,
                    "rating": {
                        "average": 8.3
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/410/1025840.jpg",
                    "summary": "Behind the Iron Curtain, a risky rescue mission gets underway. The California crew seeks help from a hacker. Steve takes one for the team.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/2209854"
                        }
                    }
                },
                {
                    "id": 2209855,
                    "url": "https://www.tvmaze.com/episodes/2209855/stranger-things-4x07-chapter-seven-the-massacre-at-hawkins-lab",
                    "name": "Chapter Seven: The Massacre at Hawkins Lab",
                    "season": 4,
                    "number": 7,
                    "type": "regular",
                    "airdate": "2022-05-27",
                    "airtime": "",
                    "airstamp": "2022-05-27T12:00:00+00:00",
                    "runtime": 99,
                    "rating": {
                        "average": 8.9
                    },
                    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/410/1025841.jpg",
                    "summary": "As Hopper braces to battle a monster, Dustin dissects Vecna's motives — and decodes a message from beyond. El finds strength in a distant memory.",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/2209855"
                        }
                    }
                },
                {
                    "id": 2209856,
                    "url": "https://www.tvmaze.com/episodes/2209856/stranger-things-4x08-chapter-eight-papa",
                    "name": "Chapter Eight: Papa",
                    "season": 4,
                    "number": 8,
                    "type": "regular",
                    "airdate": "2022-07-01",
                    "airtime": "",
                    "airstamp": "2022-07-01T12:00:00+00:00",
                    "runtime": 85,
                    "rating": {
                        "average": null
                    },
                    "image": null,
                    "summary": "",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/2209856"
                        }
                    }
                },
                {
                    "id": 2209857,
                    "url": "https://www.tvmaze.com/episodes/2209857/stranger-things-4x09-chapter-nine-the-piggyback",
                    "name": "Chapter Nine: The Piggyback",
                    "season": 4,
                    "number": 9,
                    "type": "regular",
                    "airdate": "2022-07-01",
                    "airtime": "",
                    "airstamp": "2022-07-01T12:00:00+00:00",
                    "runtime": 139,
                    "rating": {
                        "average": null
                    },
                    "image": null,
                    "summary": "",
                    "_links": {
                        "self": {
                            "href": "https://api.tvmaze.com/episodes/2209857"
                        }
                    }
                }
            ]
        }
    ]
}

test('renders without errors with no props', async () => { render(<Display />) });

test('renders Show component when the button is clicked ', () => { 
    render(<Display  />)
 });

test('renders show season options matching your data when the button is clicked', () => { });
