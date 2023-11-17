import FeatureHeader from '@/components/FeatureHeader'

const Feature: React.FC<{
    date: string;
    month: string;
    title: string;
    time: string;
    location: string;
    color: string;
    image: string;
  }> = ({ date, month, title, time, location, color,image}) =>{

    return(
        <div className={`rounded-t-lg rounded-l-lg p-6 ${image ? 'h-96 bg-cover bg-center' : "auto"}`} style={{ backgroundImage: `${ image ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0)),": ""} url(${image})` }} >
          <FeatureHeader
            date={date}
            month={month}
            title={title}
            time={time}
            location={location}
          />
        </div>
    )

}

export default Feature;
