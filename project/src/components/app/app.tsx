import Main from '../../pages/main/main';

type AppProps = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: AppProps): JSX.Element {
  return (
    <Main
      title={title}
      genre={genre}
      year={year}
    />
  );
}

export default App;
