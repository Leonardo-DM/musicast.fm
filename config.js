/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
|
| To configure your streaming, define the name of your radio, url and 
| type of your streaming below.
|
*/

var settings = {
    'radio_name': 'Deboxe Funk Brasil Hits',

    // URL of streaming without / on the final, eg: http://streaming.com:8080
    'url_streaming': 'http://stream.zeno.fm/rzywd1sz8zhvv',

    // When choosing icecast, make sure the file 'player.log' in the document root is writeable.
    // Choose between 'shoutcast' or 'icecast'
    'streaming_type': 'shoutcast',

    // Visit https://api.vagalume.com.br/docs/ to get your API key
    'api_key': 'f99c41384eeb8a2ef898f5a5e997c28c',

    // Set to true to get the last songs played
    'historic': true,

    // Only for SHOUTCast!
    // Set to true to show the next song to be played. 
    // Make sure your streaming show this information!
    'next_song': false,

    // Path to default cover art when none are found
    'default_cover_art': 'img/bg-l30.jpg',
};
