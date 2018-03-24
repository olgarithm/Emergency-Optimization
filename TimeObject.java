public class TimeObject {
	private String dispatchType;
	private String time;

	public TimeObject(String time, String dispatchType) {
		this.time = time;
		this.dispatchType = dispatchType;
	}

	public String getDispatchType() {
		return dispatchType;
	}

	public String getTime() {
		return time;
	}

	public String toString() {
		return time;
	}

	public boolean equals(Object other) {
		if (other == this) {
			return true;
		}

		if (!(other instanceof TimeObject)) {
			return false;
		}

		TimeObject castedOther = (TimeObject)other;
		return this.time.equals(castedOther.time);
	}

	public int hashCode() {
		return 31 * time.hashCode();
	}
}