import "./App.css"
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className="AppVideos">
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="pedroluizsgc"
          description="Brecker o golerio"
          music="Musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video
          likes={400}
          messages={500}
          shares={600}
          name="pedroluizsgc"
          description="Brecker o golerio"
          music="Musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
      </div>
    </div>
  )
}

export default App
