
    function openn() {
      document.getElementsByClassName("slide-menu")[0].style.left = "0px";
      document.querySelector(".overlay").style.display = "block";
      document.body.style.overflow = "hidden";
    }

    function cloose() {
      document.getElementsByClassName("slide-menu")[0].style.left = "-250px";
      document.querySelector(".overlay").style.display = "none";
      document.body.style.overflow = "auto";
    }

  const successData = [
  {
    name: 'Zoho',
    desc: 'Bootstrapped SaaS giant from India',
    link: 'https://www.zoho.com',
    
  },
  {
    name: 'Freshworks',
    desc: 'CRM and support solutions, NASDAQ listed',
    link: 'https://www.freshworks.com',
    // img: 'https://assets.www.freshworks.com/attachments/cjfwqvfv200d8ptxxlxhpsa2e-freshworks.svg'
  },
  {
    name: 'CRED',
    desc: 'Reward-based credit card payment platform',
    link: 'https://www.cred.club',
    // img: 'https://seeklogo.com/images/C/cred-logo-B7480F207C-seeklogo.com.png'
  },
  {
    name: 'BYJUs',
    desc: 'EdTech learning app for school students',
    link: 'https://www.byjus.com',
    // img: 'https://seeklogo.com/images/B/byjus-logo-F1D0D65F7E-seeklogo.com.png'
  },
  {
    name: 'Ola',
    desc: 'Cab aggregator and electric mobility',
    link: 'https://www.olacabs.com',
    // img: 'https://logos-world.net/wp-content/uploads/2021/02/Ola-Logo.png'
  },
  {
    name: 'Flipkart',
    desc: 'E-commerce marketplace acquired by Walmart',
    link: 'https://www.flipkart.com',
    // img: 'https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png'
  },
  {
    name: 'Razorpay',
    desc: 'Online payments and banking for businesses',
    link: 'https://razorpay.com',
    // img: 'https://razorpay.com/images/logo.svg'
  },
  {
    name: 'Swiggy',
    desc: 'Food delivery platform across India',
    link: 'https://www.swiggy.com',
    // img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png'
  },
  {
    name: 'Paytm',
    desc: 'Payments and e-commerce platform',
    link: 'https://paytm.com',
    // img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Paytm_logo.png/800px-Paytm_logo.png'
  }
];

const failData = [
  {
    name: 'Stayzilla',
    desc: 'Homestay booking shut due to scale issues',
    link: 'https://yourstory.com/2017/02/stayzilla-suspends-operations',
    // img: 'https://static.startuptalky.com/2021/05/Stayzilla-StartupTalky.jpg'
  },
  {
    name: 'TinyOwl',
    desc: 'Food delivery startup closed after layoffs',
    link: 'https://techcrunch.com/2016/05/25/tinyowl-now-defunct',
    // img: 'https://static.startuptalky.com/2021/08/TinyOwl-Shutdown-StartupTalky.jpg'
  },
  {
    name: 'Peppertap',
    desc: 'Hyperlocal grocery delivery failure',
    link: 'https://tech.economictimes.indiatimes.com/news/startups/peppertap-shuts-down/51964835',
    // img: 'https://startuptalky.com/content/images/2021/06/peppertap.jpg'
  },
  {
    name: 'LocalBanya',
    desc: 'Online grocery that ran out of funds',
    link: '#',
    // img: 'https://startuptalky.com/content/images/2021/07/localbanya-shutdown-story.jpg'
  },
  {
    name: 'Zebpay India',
    desc: 'Crypto exchange shut due to regulations',
    link: 'https://www.zebpay.com',
    // img: 'https://cryptologos.cc/logos/zebpay-zebpay-logo.png'
  },
  {
    name: 'Frankly.me',
    desc: 'Video Q&A startup shut in 2016',
    link: '#',
    // img: 'https://startuptalky.com/content/images/2021/07/frankly-me-shutdown.png'
  },
  {
    name: 'AskMe',
    desc: 'Classifieds marketplace failed financially',
    link: '#',
    // img: 'https://startuptalky.com/content/images/2021/07/askme-shutdown-failure.jpg'
  },
  {
    name: 'Dazo',
    desc: 'Shut down due to logistics challenges',
    link: '#',
    // img: 'https://startuptalky.com/content/images/2021/06/dazo-failure-story.jpg'
  },
  {
    name: 'Hike Messenger',
    desc: 'Messaging app failed to compete with WhatsApp',
    link: '#',
    // img: 'https://upload.wikimedia.org/wikipedia/en/6/62/Hike_Messenger_Logo.png'
  }
];

const addCards = (data, containerId) => {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  data.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-content">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <button onclick="window.open('${item.link}', '_blank')">
          ${containerId.includes('fail') ? 'Read Story' : 'Visit Website'}
        </button>
      </div>`;
    container.appendChild(card);
  });
};


    function toggleSection(type) {
      document.getElementById('success').style.display = 'none';
      document.getElementById('failed').style.display = 'none';
      document.getElementById(type).style.display = 'block';
      document.getElementById(type).scrollIntoView({ behavior: 'smooth' });
    }

    document.addEventListener('DOMContentLoaded', () => {
      addCards(successData, 'success-cards');
      addCards(failData, 'failed-cards');
    });a