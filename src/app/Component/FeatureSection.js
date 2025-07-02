'use client';

const features = [
  {
    title: 'Enjoy on your TV',
    description:
      'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
    icon: './images/icons/tv.jpg',
  },
  {
    title: 'Download your shows to watch offline',
    description:
      'Save your favourites easily and always have something to watch.',
    icon: './images/icons/tvd.png',
  },
  {
    title: 'Watch everywhere',
    description:
      'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
    icon: './images/icons/the.png',
  },
  {
    title: 'Create profiles for kids',
    description:
      'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
    icon: './images/icons/kidss.png',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-black text-white px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">More reasons to join</h2>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#221b38] to-[#200F19] rounded-2xl p-6 flex flex-col justify-between min-h-[300px] hover:shadow-2xl transition duration-300"
          >
            <div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/80">{feature.description}</p>
            </div>
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-22 h-22 self-end mt-4"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
