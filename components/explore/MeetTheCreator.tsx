// components/MeetTheCreator.js

const MeetTheCreator = () => {
    return (
      <section className="bg-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet the <span className="text-yellow-500">CLAMIO</span> Creator
            </h2>
            <p className="mb-6">
              Welcome to the creators' stage, where the magic happens! Say hello to an eclectic mix of artists, experts, and storytellers, all ready to enchant you with their digital masterpieces.
            </p>
            <p className="mb-6">
              Discover the minds behind your favorite digital products and follow them to stay updated with their latest works. Whether you're an e-sports enthusiast, a health-conscious individual, a spiritual seeker, a travel aficionado, or a food lover, you're bound to discover a creator who speaks to your interests!
            </p>
            <p className="mb-6">
              Join a community that's teeming with talent and be the first to know about fresh releases, upcoming events, and exclusive goodies from these maestros of the digital realm!
            </p>
            <button className="px-6 py-3 bg-yellow-500 font-bold text-white rounded-lg">
              Browse Creators
            </button>
          </div>
          <div className="md:w-1/2 flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="relative h-[300px] md:h-96 w-full">
              <img 
                src="/Broadcast-cuate.png" 
                alt="CLAMIO Creator" 
                className="rounded-lg w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MeetTheCreator;
  