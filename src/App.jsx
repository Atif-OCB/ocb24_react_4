import Counter from './components/Counter';
import RegisterForm from './components/RegisterForm';
// import Card from './components/Card';

const students = ["Atif", "Aiman", "Ali", "Ayesha", "Adeel", "Areeba", "Mei Ling", "Kurama", "Kakashi", "Sasuke", "Naruto", "Sakura", "Hinata", "Shikamaru", "Ino", "Choji", "Kiba", "Neji", "Rock Lee", "Tenten", "Gaara", "Kankuro", "Temari", "Orochimaru", "Jiraiya", "Tsunade", "Kabuto", "Itachi", "Kisame", "Deidara", "Sasori", "Hidan", "Kakuzu", "Konan", "Pain", "Obito", "Madara", "Hashirama", "Tobirama", "Hiruzen", "Minato", "Kushina", "Karin", "Suigetsu"];

function App() {
  return (
    <>
      <RegisterForm />
      {/* {
        students.map((student) => (
          <>
            <Counter key={student} name={student} />
            <Card key={`card-${student}`} name={student} />
          </>
        ))
      } */}
    </>
  );
}

export default App
