const spotifyPlaylists = [
  {
    src: "https://open.spotify.com/embed/playlist/3oB1b99IxeIHEtk7JGThnk?utm_source=generator&theme=0",
    title: "M.C. Jeter Playlist 1",
  },
  {
    src: "https://open.spotify.com/embed/playlist/7HgTm5knicEYvwsi8GieD8?utm_source=generator&theme=0",
    title: "M.C. Jeter Playlist 2",
  },
  {
    src: "https://open.spotify.com/embed/playlist/454ut6805imsdvy5cQfsok?utm_source=generator&theme=0",
    title: "M.C. Jeter Playlist 3",
  },
];

export default function ExtrasPage() {
  return (
    <main className="page-content">
      <h1 className="section-heading">Extras</h1>

      <h3 className="section-heading">M.C. Jeter Spotify</h3>
      <div className="spotify-grid">
        {spotifyPlaylists.map((playlist) => (
          <iframe
            key={playlist.src}
            style={{ borderRadius: "12px" }}
            src={playlist.src}
            title={playlist.title}
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        ))}
      </div>
    </main>
  );
}
