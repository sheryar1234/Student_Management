import React from 'react';
import homepage from '../image/homepage.png';
import student from '../image/student.webp';
import '../CSS/myStyles.css';

// import Navbar2 from './Navbar2';
const Home = () => {
  return (
    <>
    {/* <Navbar2/> */}
    <div className="cont">

    <div style={styles.container}>
      <div style={styles.heading}>
        <h1 style={styles.h1}>FAST SE Department</h1>
        <p style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac purus sit amet nisi ullamcorper condimentum. Mauris eu nisl nec lorem lacinia finibus.</p>
      </div>
      <div style={styles.image}>
        <img src={student} alt="Placeholder" style={styles.imageStyle} />
      </div>
    </div>
</div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
    // maxWidth:'100rem',
    paddingLeft : '16.5rem',
  },
  heading: {
    flex: 1,
    paddingRight: '20px',
  },
  image: {
    flex: 1,
  },
  imageStyle: {
    maxWidth: '40rem',
    height: '30rem',
  },
  h1: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  p: {
    fontSize: '18px',
    color: '#555',
  }

};

export default Home;
