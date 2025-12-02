import React from "react";
import { motion } from "motion/react";
import { Target } from "lucide-react";

export default function WorkProcess() {
  const [step, setStep] = React.useState(0);
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "We start with a Discovery Call to discuss your goals, needs, and project requirements. This helps us align our vision and set the foundation for a successful collaboration.",
      active: true,
    },
    {
      number: "02",
      title: "Planning & Architecture",
      description:
        "Define the technical architecture, choose the right tech stack, and create detailed wireframes and user flows.",
      active: false,
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "Build the application with clean, scalable code. Implement features iteratively with continuous testing.",
      active: false,
    },
    {
      number: "04",
      title: "Deployment & Launch",
      description:
        "Deploy to production on AWS (or your csp of choice) with proper monitoring, optimization, and post-launch support.",
      active: false,
    },
    {
      number: "05",
      title: "Maintenance & Growth",
      description:
        "Ongoing support, performance monitoring, feature updates, and scaling as your business grows.",
      active: false,
    },
  ];

  const getStep = (index: number) => {
    return steps[index];
  };

  const handleStep = (index: number) => {
    // Set all steps to inactive
    steps.map((currentStep) => {
      if (currentStep.active) currentStep.active = false;
    });

    // Set the current step index
    setStep(index);

    // Set the current step to active
    steps[index].active = true;
    return;
  };

  return (
    <section className="px-8 py-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 flex items-center gap-2">
          <Target className="h-5 w-5 text-gray-600" />
          <h3 className="text-black">How I work</h3>
        </div>

        <div className="mb-8">
          <h4 className="mb-4 text-2xl text-black">{getStep(step).title}</h4>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-600">
            {getStep(step).description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {steps.map((current, index) => (
            <motion.button
              key={current.number}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleStep(index)}
              className={`cursor-pointer rounded-full px-6 py-2 text-sm transition-all ${
                index === step
                  ? "bg-black text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              }`}
            >
              Step {current.number}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}