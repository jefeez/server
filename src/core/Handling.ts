class Handling extends Error {
  constructor(msg: string, status: number) {
    super(
      JSON.stringify({
        message: msg,
        status,
      }) || ''
    );
    this.name = 'HandlingError';
  }
}

export { Handling };
