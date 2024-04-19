import { Loader } from "@googlemaps/js-api-loader"
import { useEffect, useState } from "react";
import { useStyles } from "tss-react/mui";

// https://developers.google.com/maps/documentation/javascript/overview#js_api_loader_package
const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    version: "weekly",
});

type Props = {
    className?: string;
    center: {
        lat: number;
        lng: number;
    }
};

export function Map(props: Props) {

    const { className } = props;

    const { cx, css } = useStyles();

    const [element, setElement] = useState<HTMLDivElement | null>(null);

    useEffect(() => {

        if (element === null) {
            return;
        }

        loader.load().then(async () => {
            const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
            new Map(
                element,
                {
                    center: { lat: -34.397, lng: 150.644 },
                    zoom: 8,
                }
            );
        });

    }, [element]);

    return (
        <div
            ref={setElement}
            id="map"
            className={cx(css({
                width: '100%',
                height: '100%',
                maxHeight: '100px',
                borderRadius: '15px',
            }), className)}
        />
    )
}
