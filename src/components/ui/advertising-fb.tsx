import { Button } from "./button";
import { Iframe } from "./iframe";

type TypeAdvertising = {
  title: string;
  description: string;
  labelButtom: string;
  titleFacebook: string;
  urlFacebook: string;
  widthFacebook: string;
  heightFacebook: string;
};

export default function AdvertisingFacebook({
  title,
  description,
  labelButtom,
  titleFacebook,
  urlFacebook,
  widthFacebook,
  heightFacebook,
}: TypeAdvertising) {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white p-6 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left column: Main content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-purple-200">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                {labelButtom}
              </Button>
            </div>
          </div>

          {/* Right column: Features */}
          <div className="bg-black bg-opacity-50 rounded-xl md:p-8 space-y-6">
            <h3 className="text-2xl font-semibold my-4 text-center">
              Hechanos un vistanzo!
            </h3>
            <div className="flex justify-center">
              <Iframe
                title={titleFacebook}
                src={urlFacebook
                }
                width={widthFacebook}
                height={heightFacebook}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
