import { GoogleMap, LoadScript } from '@react-google-maps/api';


type Props = {
    className?: string;
    center: {
        lat: number;
        lng: number;
    }
};

export function Map(props: Props) {

    const { className, center } = props;

    const containerStyle = {
        width: '100%',
        height: '100%',
        maxHeight: '100px',
        borderRadius: '15px',
    };

    return (
        <LoadScript
            googleMapsApiKey="CLÉ_API_GOOGLE_MAPS"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Enfants de GoogleMap ici */}
            </GoogleMap>
        </LoadScript>
    )
}
