import styles from './index.less';
import ky from 'ky'
export default function IndexPage() {
  const json = ky.post('https://example.com', {json: {foo: true}}).json();
  console.log(json);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
