public class LatLongObject {
	private String dispatchType;
	private String latitude;
	private String longitude;

	public LatLongObject(String dispatchType, String latitude, String longitude) {
		this.dispatchType = dispatchType;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public String getDispatchType() {
		return dispatchType;
	}

	public String getLatitude() {
		return latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public String toString() {
		return latitude + ", " + longitude;
	}

	public boolean equals(Object other) {
		if (other == this) {
			return true;
		}

		if (!(other instanceof LatLongObject)) {
			return false;
		}

		LatLongObject castedOther = (LatLongObject)other;
		return this.latitude.equals(castedOther.latitude) && this.longitude.equals(castedOther.longitude);
	}

	public int hashCode() {
		return 31 * latitude.hashCode() + longitude.hashCode();
	}
}