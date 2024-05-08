import Counter from './components/Counter';

const students = ["Atif", "Aiman", "Ali", "Ayesha", "Adeel", "Areeba", "Mei Ling", "Kurama", "Kakashi", "Sasuke", "Naruto", "Sakura", "Hinata", "Shikamaru", "Ino", "Choji", "Kiba", "Neji", "Rock Lee", "Tenten", "Gaara", "Kankuro", "Temari", "Orochimaru", "Jiraiya", "Tsunade", "Kabuto", "Itachi", "Kisame", "Deidara", "Sasori", "Hidan", "Kakuzu", "Konan", "Pain", "Obito", "Madara", "Hashirama", "Tobirama", "Hiruzen", "Minato", "Kushina", "Karin", "Suigetsu"];

function App() {
  return (
    <>
      {
        students.map((student) => (
          <Counter key={student} name={student} />
        ))
      }
    </>
  );
}

export default App
