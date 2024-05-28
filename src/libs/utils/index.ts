const simulateSlow = async (duration?: number) => await new Promise(resolve => setTimeout(resolve, duration ? duration : 3000));

export { simulateSlow };