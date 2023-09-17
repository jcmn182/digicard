import Image from 'next/image';
import styles from './page.module.css';
// assets
import people from '../assets/register/people.webp';
// components
import RegisterForm from '../components/registerForm';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <RegisterForm />
        </div>
        <div className={styles.img_container}>
          <Image src={people} alt="poeple" />
        </div>
      </div>
    </main>
  );
}
