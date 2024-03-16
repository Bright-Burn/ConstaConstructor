export class JsonHelper {
  public static parse(data: string): any {
    return JSON.parse(data, JsonHelper.CustomStringParser)
  }

  private static CustomStringParser(_: string, value: any): any {
    if (typeof value === 'string') {
      /// Check if date format
      const DATE_REGEXP = /^\d{4}[.\/-]\d{2}[.\/-]\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/g

      if (DATE_REGEXP.test(value)) {
        return new Date(value)
      }
    }

    return value
  }
}
