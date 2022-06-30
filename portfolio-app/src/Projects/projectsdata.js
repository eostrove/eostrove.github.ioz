import playlist from '../css/images/playlist_creator.png';

const data = [
    {
        title: 'Car Sales and Shop Repair',
        link: '',
        image: '',
        date: '2022-06-24',
        bullet1: 'A React app connecting 3 microservices (Inventory, Sales, Services) for car salesmen and car mechanics to record and manage their respective car sales and repairs.',
        bullet2: 'Merges car salesmen and car mechanic data in one database, enabling a holistic view of car sales and repair history.',
        bullet3: 'Technologies used include React, Docker, polling, Insomnia, JavaScript, and Python.',
    },
    {
        title: 'Playlist Creator',
        link: 'https://ems-playlist-project.herokuapp.com/playlists/',
        image: playlist,
        date: '2022-05-16',
        bullet1: 'A Django app built with Python that enables signed on users to add songs, artists, and create playlists.',
        bullet2: 'Leverages Spotify API to get song images by pulling album art from Spotify.',
        bullet3: 'Leverages Spotify API to enable Spotify web player in song details pages.',
    }
]

export default data;