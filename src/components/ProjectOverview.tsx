import { motion } from "motion/react";
import { Building2, Users, Calendar, MapPin, Navigation as NavigationIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function ProjectOverview() {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Building2, label: t.overview.stats.area, value: "45,000 m²" },
    { icon: Users, label: t.overview.stats.capacity, value: "2,500 people" },
    { icon: Calendar, label: t.overview.stats.timeline, value: "24 months" },
    { icon: MapPin, label: t.overview.stats.location, value: "Munich, Germany" },
  ];

  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.0925851967877!2d11.567851476738436!3d48.15115717124108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f7b3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sTheresienstra%C3%9Fe%2090%2C%2080333%20M%C3%BCnchen!5e0!3m2!1sen!2sde!4v1634567890123!5m2!1sen!2sde`;
  const directionsUrl = "https://maps.app.goo.gl/DcXV9stMGEARLybE6";

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-muted-foreground">{t.overview.sectionTitle}</div>
          <h2 className="mb-6 max-w-3xl text-4xl sm:text-5xl">
            {t.overview.heading}
          </h2>
          <p className="max-w-3xl text-muted-foreground text-lg mb-12">
            {t.overview.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-muted rounded-xl"
              >
                <stat.icon className="w-8 h-8 mb-4 text-primary" />
                <div className="text-muted-foreground mb-2">{stat.label}</div>
                <div className="text-2xl">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-muted-foreground">
            {t.location?.sectionTitle || "Location"}
          </div>
          <h2 className="mb-6 text-4xl sm:text-5xl">
            {t.location?.heading || "Project Location"}
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg mb-12">
            {t.location?.description || "Visit us at our project site in the heart of Munich"}
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Address Card */}
              <div className="bg-secondary p-6 rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-2">
                      {t.location?.addressLabel || "Address"}
                    </h3>
                    <p className="text-muted-foreground">
                      Theresienstraße 90
                      <br />
                      80333 München
                      <br />
                      {t.location?.country || "Germany"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-6 py-4 rounded-xl hover:opacity-90 transition-opacity"
              >
                <NavigationIcon className="w-5 h-5" />
                {t.location?.directionsButton || "Get Directions"}
              </a>

              {/* Access Information */}
              <div className="bg-muted p-6 rounded-xl">
                <h3 className="mb-4">
                  {t.location?.accessTitle || "Access Information"}
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <p>
                      {t.location?.publicTransport || "U-Bahn: Theresienstraße (U2)"}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <p>
                      {t.location?.parking || "Parking available in nearby facilities"}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <p>
                      {t.location?.accessibility || "Wheelchair accessible entrance"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-2xl border border-border">
                <iframe
                  src={mapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Project Location Map"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
