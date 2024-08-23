import ThemeSwitch from '../features/ThemeSwitch';
import Layout from '../layout';

const Settings = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-6xl">Settings</h1>
        <br />
        <hr />
        <br />
        <span className="flex gap-4 items-center">
          <h3 className="text-4xl">Change Your Theme:</h3>
          <ThemeSwitch />
        </span>

        <br />
        <hr />
        <br />
      </Layout>
    </div>
  );
};

export default Settings;
